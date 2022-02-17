<template>
	<div class='marketing'>
		<!-- 当日收支 -->
		<el-row :gutter="20">
			<!-- 当前营业个数 -->
			<el-col :span="8">
				<el-card shadow='always'>
					<div class='contant'>
						<div class='topbox'>本日営業数</div>
						<div class='income'>{{todayInfo.number}}</div>
					</div>
				</el-card>
			</el-col>
			<!-- 当前收入 -->
			<el-col :span="8">
				<el-card shadow='always'>
					<div class='contant'>
						<div class='topbox'>本日見積金額</div>
						<div class='income'>{{todayInfo.account}}</div>
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
			<el-table :data="tableData" style="width: 100%" >
				<el-table-column type="expand">
					<template slot-scope="props">
						<el-form label-position="left" inline class="demo-table-expand">
							<el-form-item label="備考">
								<span>{{ props.row.remark }}</span>
							</el-form-item>						
						</el-form>
					</template>
				</el-table-column>
				<el-table-column type='index' label="#">
				</el-table-column>
				<el-table-column prop="date" label="日期" >
				</el-table-column>
				<el-table-column prop="method" label="営業手段" >
				</el-table-column>
				<el-table-column prop="client" label="取引先">
				</el-table-column>
				<el-table-column prop="projectname" label="項目名" >
				</el-table-column>
				<el-table-column prop="budget" label="予算">
				</el-table-column>
				<el-table-column prop="responsible" label="担当者">
				</el-table-column>
				<el-table-column>
					<template slot-scope="props">
						<el-tooltip content='edit' placement="top" effect="light" :enterable="false">
							<el-button type='primary' icon='el-icon-edit' size='mini' @click="editTableData(props.row)">
							</el-button>
						</el-tooltip>
						<el-tooltip content='delete' placement="top" effect="light" :enterable="false">
							<el-button type='danger' icon='el-icon-delete' size='mini' @click='deleteTableData(props.row.id)'>
							</el-button>
						</el-tooltip>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
			  @size-change="handleSizeChange"
			  @current-change="handleCurrentChange"
			  :current-page="pageinfo.currentpage"
			  :page-sizes="[15, 50, 100]"
			  :page-size="pageinfo.pagesize"
			  layout="total, sizes, prev, pager, next, jumper"
			  :total="pageinfo.total">
			</el-pagination>
		</el-card>	
		
		<!-- 添加数据的对话框 -->
		<el-dialog title="記録添加" :visible.sync="addDataDialogFormVisible" width="40%" @close="closeDialog()">
			<el-form :model="addData" label-width="120px" ref="addDataFormRef" :rules="rules">
				<!-- 暂时日期是自动添加为当天的日期 -->
<!-- 				<el-form-item label="日付" prop="date">
					<el-col :span="20">
						<el-date-picker v-model='addData.date' type="date" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item> -->
				<el-form-item label="担当者" prop="responsible">
					<el-col :span="20">
						<el-input v-model="addData.responsible"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="営業手段" prop="method">
					<el-col :span="20">
						<el-input v-model="addData.method"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="項目名" prop="projectname">
					<el-col :span="20">
						<el-input v-model='addData.projectname'></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="取引先" prop="client">
					<el-col :span="20">
						<el-input v-model="addData.client"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="予算" prop="budget">
					<el-col :span="20">
						<el-input v-model="addData.budget" ></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="備考" prop="remark">
					<el-col :span="20">
						<el-input type="textarea" v-model='addData.remark' maxlength="100"></el-input>
					</el-col>
				</el-form-item>
			</el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="closeDialog()">戻　る</el-button>
		    <el-button type="primary" @click="validateForm()">追　加</el-button>
		  </div>
		</el-dialog>
		<!-- 编辑数据的对话框 -->
		<el-dialog title="記録編集" :visible.sync="editDataDialogFormVisible" width="40%" @close="closeEditDialog()">
			<el-form :model="editData" label-width="120px" ref="editDataFormRef" :rules="rules">
				<!-- 暂时日期是自动添加为当天的日期 -->
<!-- 				<el-form-item label="日付" prop="date">
					<el-col :span="20">
						<el-date-picker v-model='addData.date' type="date" style="width: 100%;"></el-date-picker>
					</el-col>
				</el-form-item> -->
				<el-form-item label="担当者" prop="responsible">
					<el-col :span="20">
						<el-input v-model="editData.responsible"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="営業手段" prop="method">
					<el-col :span="20">
						<el-input v-model="editData.method"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="項目名" prop="projectname">
					<el-col :span="20">
						<el-input v-model='editData.projectname'></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="取引先" prop="client">
					<el-col :span="20">
						<el-input v-model="editData.client"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="予算" prop="budget">
					<el-col :span="20">
						<el-input v-model="editData.budget"></el-input>
					</el-col>
				</el-form-item>
				<el-form-item label="備考" prop="remark">
					<el-col :span="20">
						<el-input type="textarea" v-model='editData.remark' maxlength="100"></el-input>
					</el-col>
				</el-form-item>
			</el-form>
		  <div slot="footer" class="dialog-footer">
			<el-button @click="closeEditDialog()">戻　る</el-button>
			<el-button type="primary" @click="validateEditForm()">追　加</el-button>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
	export default {
		data() {
			var checkbudget=(rule, value, cb)=>{
				const regbudget = /^[0-9]/
				if(regbudget.test(value)){
					return cb()
				}
				cb(new Error("Please input right budget"))
			}
			return {
				todayInfo:{},
				datevalue: '',
				addDataDialogFormVisible: false,
				editDataDialogFormVisible:false,
				formLabelWidth:'120px',
				fileList: [],
				downloadurl: "",
				addData:{
					// date:'',
					responsible:'',
					budget:'',
					projectname:'', 
					remark:'',
					client:'',
					method:''
				},
				editData:{},
				pageinfo:{
					pagesize:15,
					total:0,
					currentpage:1
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
				rules:{
					budget:[{required:true, trigger:'blur'},{validator:checkbudget, trigger:'blur'}],
					projectname:[
							{required:true, trigger:'blur'},
							{max:50, message:"max length is 50",trigger:'blur'}
					],
					remark:[
							{required:true, trigger:'blur'},
							{max:200, message:"max length is 100", trigger:'blur'}
					],
					client:[
							{required:true, trigger:'blur'},
							{max:50, message:"max length is 50",trigger:'blur'}
					],
					method:[
							{required:true, trigger:'blur'},
							{max:50, message:"max length is 50",trigger:'blur'}
					],
					responsible:[
							{required:true, trigger:'blur'},
							{max:20, message:"max length is 50",trigger:'blur'}
					],
				}
			}
		},
		created() {
			this.getData()
			console.log(this.tableData)
		},
		methods:{
			// 当日期选择器发生变化时，向服务器请求数据
			dataChangeHandler(value) {
				this.getData()
			},
			// 向服务器请求数据
			async getData() {
				if(this.datevalue[0]!==undefined&& this.datevalue[1]!==undefined){
					const {data:res} = await this.$http.post('marketing/tabledata',{start:this.datevalue[0],end:this.datevalue[1], page:this.pageinfo})
					this.tableData = res.tableData
					this.pageinfo.total = res.total
					this.todayInfo = res.todayinfo
				}else{
					const {data:res} = await this.$http.post('marketing/tabledata',{start:'', end:"", page: this.pageinfo})
					this.tableData = res.tableData
					this.pageinfo.total = res.total
					this.todayInfo = res.todayinfo
				}
			},
			// 与服务器交互，删除数据
			async deleteTableData(id){
				console.log('delete:'+id)
				const {data:res} = await this.$http.post('marketing/delete',{id:id})
				if(res.code==200){
					this.getData()
					return this.$message.success("Delete data success")
				}else{
					return this.$message.error("Delete data failed")
				}
			},
			// 打开编辑对话框，编辑数据
			editTableData(data){
				this.editDataDialogFormVisible = true
				this.editData = data
			},
			// 关闭编辑对话框
			closeEditDialog(){
				this.editDataDialogFormVisible = false
			},
			closeDialog(){
				this.$refs['addDataFormRef'].resetFields()
				this.addDataDialogFormVisible = false
			},
			validateForm(){
				this.$refs['addDataFormRef'].validate((valid)=>{
					if(valid){
						this.addTableData()
					}else{
						return false
					}
				})
			},
			validateEditForm(){
				this.$refs['editDataFormRef'].validate((valid)=>{
					if(valid){
						this.uploadData()
					}else{
						return false
					}
				})
			},
			async uploadData(){
				console.log("upload data:"+this.editData)
				const {data:res} = await this.$http.post('marketing/update', this.editData)
				if(res.code==200){
					this.closeEditDialog()
					this.getData()
					return this.$message.success("Update Data Success")
				}else{
					this.$message.error("Update Data Failed")
				}
			},
			// 提交数据
			async addTableData(){
				// 首先向服务器提交表单数据，
				const {data:res} = await this.$http.post('marketing/additem',this.addData)
				if(res.code == 200){
					await this.$message.success("Uploaded data")
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
			handleSizeChange(pagesize){
				console.log("change pagesize to "+pagesize)
				this.pageinfo.currentpage = 1
				this.pageinfo.pagesize = pagesize
				this.getData()
			},
			handleCurrentChange(currentpage){
				console.log("change currentpage to "+currentpage)
				this.pageinfo.currentpage = currentpage
				this.getData()
			},
			async downloadfile(id){
				// await this.$http.get('cashflow/downloadfile/'+id)
				this.downloadurl = 'http://127.0.0.1:8000/api/cashflow/downloadfile/'+id
			}
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
	.demo-table-expand {
		font-size: large;
	}
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
		}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 10px;
		width: 100%;
		
	}	
</style>
