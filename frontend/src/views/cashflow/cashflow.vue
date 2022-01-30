<template>
	<div class='cashflow'>
		<!-- 当日收支 -->
		<el-row :gutter="20">
			<!-- 当前收入 -->
			<el-col :span="8">
				<el-card shadow='always'>
					<div class='contant'>
						<div class='topbox'>本日収入</div>
						<div class='income'>+ {{income}}円</div>
					</div>
				</el-card>
			</el-col>
			<!-- 本日支出 -->
			<el-col :span="8">
				<el-card shadow='always'>
					<div class="contant">
						<div class='topbox'>本日支出</div>
						<div class='expenses'>- {{expenses}}円</div>
					</div>
				</el-card>
			</el-col>
			<!-- 本日余剰 -->
			<el-col :span="8">
				<el-card shadow='always'>
					<div class="contant">
						<div class="topbox">本日余剰</div>
						<div class='rest'>{{income-expenses}}円</div>
					</div>
				</el-card>
			</el-col>
		</el-row>
		<!-- 期間選択  追加数据-->
		<el-card style="margin-top: 10px">
			<el-row :gutter="20">
				<el-col :span="20" style="display: flex;flex-direction: row; align-items: center;">
					<span style="padding-right: 0.5rem;">期間を選択してください</span>
					<el-date-picker v-model="datevalue" type="daterange" align="center" unlink-panels range-separator="To"
						:picker-options="pickerOptions" @change="dataChangeHandler">
					</el-date-picker>
				</el-col>
				<el-col :span="4">
					<!-- 追加数据按钮 -->
					<el-tooltip content='add' placement="top" effect="light" :enterable="false">
						<el-button type='danger' icon='el-icon-plus' circle @click="addDataDialogFormVisible = true"></el-button>
					</el-tooltip>
					
				</el-col>
			</el-row>
		</el-card>
		<!-- 表格数据 -->
		<el-card class='table' :body-style="{padding:'12px'}">
			<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
				<el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand" style="margin-left: 25px;">
							<el-form-item label="備考">
								<span>{{ props.row.remark }}</span>
							</el-form-item>
						</el-form>
					</template>
				</el-table-column>
				<el-table-column type='index' label="#">
				</el-table-column>
				<el-table-column prop="date" label="日期" width="120">
				</el-table-column>
				<el-table-column prop="client" label="取引先" width="180">
				</el-table-column>
				<el-table-column prop="usage" label="用途" width="500">
				</el-table-column>
				<el-table-column prop="amount" label="金額">
				</el-table-column>
				<el-table-column>
					<template slot-scope="props">
						<el-tooltip content='edit' placement="top" effect="light" :enterable="false">
							<el-button type='primary' icon='el-icon-edit' size='mini' @click="editTableData(props.row.id)">
							</el-button>
						</el-tooltip>
						<el-tooltip content='delete' placement="top" effect="light" :enterable="false">
							<el-button type='danger' icon='el-icon-delete' size='mini' @click='deleteTableData(props.row.id)'>
							</el-button>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
		</el-card>	
		
		<!-- 添加数据的对话框 -->
		<el-dialog title="記録添加" :visible.sync="addDataDialogFormVisible" width="40%" @close="closeDialog()">
			<el-form :model="addData" label-width="120px" ref="addDataFormRef">
				<el-form-item label="タイプ" prop="type">
					<el-col :span="20">
						<el-select style="width: 100%;" v-model="addData.type" placeholder="">
							<el-option label="支出" value="0"></el-option>
							<el-option label="収入" value="1"></el-option>
						</el-select>
					</el-col>
				</el-form-item>
				<el-form-item label="金額" prop="amount">
					<el-col :span="20">
						<el-input v-model="addData.amount"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="日付" prop="date">
					<el-col :span="20">
						<el-date-picker v-model='addData.date' type="date" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="用途" prop="usage">
					<el-col :span="20">
						<el-input type="textarea" v-model='addData.usage' maxlength="50"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="取引先" prop="client">
					<el-col :span="20">
						<el-input v-model="addData.client"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="備考" prop="remark">
					<el-col :span="20">
						<el-input type="textarea" v-model='addData.remark' maxlength="100"></el-input>
					</el-col>
				</el-form-item>
				
				<el-form-item label="ファイル" prop="remark">
					<el-col :span="20">
						<!-- :on-preview="handlePreview" -->
						<el-upload
						  class="upload-demo"
						  ref="upload"
						  :action="actionURL"
						  drag
						  name='file'
						  :limit="1"
						  :on-remove="handleRemove"
						  :file-list="fileList"
						  :auto-upload="false">
						  <i class="el-icon-upload"></i>
						  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
						</el-upload>
					</el-col>
				</el-form-item>

			</el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="closeDialog()">戻　る</el-button>
		    <el-button type="primary" @click="addTableData()">追　加</el-button>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				income: '6666',
				expenses: '1111',
				datevalue: '',
				addDataDialogFormVisible: false,
				formLabelWidth:'120px',
				fileList: [],
				addData:{
					date:'',
					amount:'',
					type:'',
					usage:'', // 最大50个字符
					remark:'',
					client:''
				},
				tableData: [],
				actionURL : "",
				// datepicker
				pickerOptions: {
					shortcuts: [{
						text: '本月',
						onClick(picker) {
							picker.$emit('pick', [new Date(), new Date()]);
						}
					}, {
						text: '一年間',
						onClick(picker) {
							const end = new Date();
							const start = new Date(new Date().getFullYear(), 0);
							picker.$emit('pick', [start, end]);
						}
					}, {
						text: '最近六ヶ月',
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setMonth(start.getMonth() - 6);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
			}
		},
		created() {
			this.getData()
		},
		methods:{
			// 当日期选择器发生变化时，向服务器请求数据
			dataChangeHandler(value) {
				getData()
			},
			// 向服务器请求数据
			async getData() {
				if(this.start_date!==undefined&& this.end_date!==undefined){
					const {data:res} = await this.$http.post('cashflow/tabledata',{start:this.start_date,end:this.end_date})
					this.tableData = res.tableData
				}else{
					const {data:res} = await this.$http.post('cashflow/tabledata',{start:'', end:""})
					this.tableData = res.tableData
				}
			},
			// 用来处理每条数据的背景，根据数据的type来区分
			tableRowClassName({row,rowIndex}) {
				if (row.type==0) {
					return 'warning-row';
				} else {
					return 'success-row';
				}
			},
			// 与服务器交互，删除数据
			deleteTableData(id){
				console.log('delete:'+id)
				return this.$message.success(id)
			},
			// 与服务器交互，编辑数据
			editTableData(id){
				return console.log('edit:'+id)
			},
			closeDialog(){
				this.$refs['addDataFormRef'].resetFields()
				this.addDataDialogFormVisible = false
			},
			// 提交数据
			async addTableData(){
				// 首先向服务器提交表单数据，
				const {data:res} = await this.$http.post('cashflow/additem',this.addData)
				this.actionURL =  "http://127.0.0.1:8000/api/cashflow/uploadfile/"+res.id
				console.log(res)
				if(res.code == 200){
					
					await this.$message.info("Uploaded data")
					//如果提交成功在判断是否存在文件
					console.log("filelist: "+this.fileList)
					this.$refs['upload'].submit()
					if(this.fileList.length != 0 ){
						this.$message.info("Uploading file")
						// 如果存在文件则提交文件
						
						console.log("提交数据URL:" + this.actionURL)
						this.$refs['upload'].submit()
					}
				}else{
					this.$message.error("Data upload failed")
				}
				
				// this.$refs.addDataFormRef.resetFields()
				this.addDataDialogFormVisible = false
				this.getData()
				return this.$message.success("add Tabel data")
			},
			handleRemove(file,fileList){
				var index = fileList.indexOf(file)
				fileList.splice(index,1)
			},
		}
	}
</script>
<style>
	.topbox{
		margin: 0;
		padding: 0;
	}
	.income {
		font-weight: bolder;
		color: #000000;
		font-size: 30px;
		margin-top: 0px;
		width: 100%;
	}

	.expenses {
		font-weight: bolder;
		color: #c3737c;
		font-size: 30px;
		margin-top: 0px;
		width: 100%;
	}

	.rest {
		font-weight: bolder;
		color: #7dc373;
		font-size: 30px;
		margin-top: 0px;
		width: 100%;
	}

	.contant {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 0;
		padding: 0;
	}

	.table {
		margin-top: 10px;
	}

	.el-table .warning-row {
		background: oldlace;
	}

	.el-table .success-row {
		background: #c8f5a3;
	}
</style>
