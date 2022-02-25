<template>
<div class='container'>
	<!-- 1. 基本情報 -->
	<el-card>
		<div class='title'>
			<h3>1. 基本情報</h3>
		</div>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class='title'><h4>取引先</h4></div>
				<div>
					<el-input clearable placeholder="取引先"></el-input>
				</div>				
			</el-col>
			<el-col :span="2">
				<div class='title'>
					<h4>敬称</h4>
				</div>
				<div>
					<el-select>
						<el-option label='御中'　value='1'></el-option>
						<el-option label='様'　value='2'></el-option>
						<el-option label='敬称なし'　value='3'></el-option>
					</el-select>
				</div>
			</el-col>
		</el-row>	
		 <el-divider></el-divider>
		 <el-row :gutter="20">
		 	<el-col :span="6">
		 		<div class='title'><h4>請求書番号</h4></div>
		 		<div>
		 			<el-input clearable placeholder="請求書番号"></el-input>
		 		</div>				
		 	</el-col>
		 </el-row>
		 <el-row :gutter="20">
		 	<el-col :span="6">
		 		<div class='title'><h4>発行日</h4></div>
		 		<div>
					<el-date-picker　v-model="invoice.publishdate"　type="date"　placeholder="発行日" style='width: 100%;'></el-date-picker>
		 		</div>				
		 	</el-col>
			<el-col :span="6">
				<div class='title'><h4>お支払い期限</h4></div>
				<div>
					<el-date-picker　v-model="invoice.deadline"　type="date"　placeholder="お支払い期限" style='width: 100%;'></el-date-picker>
				</div>				
			</el-col>
		 </el-row>
		 <el-row :gutter="20">

		 </el-row>
		 <el-row :gutter="20">
		 	<el-col :span="6">
		 		<div class='title'><h4>件名</h4></div>
		 		<div>
		 			<el-input clearable placeholder="件名"></el-input>
		 		</div>				
		 	</el-col>
		 </el-row>
	</el-card>
	<!-- 2. 請求元情報 -->
	<el-card style="margin-top: 15px;">
		<div class='title'>
			<h3>2. 請求元情報</h3>
		</div>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class='title'><h4>氏名</h4></div>
				<div>
					<el-input clearable placeholder="氏名"></el-input>
				</div>				
			</el-col>
			<el-col :span="6">
				<div class='title'><h4>登録番号</h4></div>
				<div>
					<el-input clearable placeholder="登録番号"></el-input>
				</div>				
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class='title'><h4>会社名</h4></div>
				<div>
					<el-input clearable placeholder="会社名"></el-input>
				</div>				
			</el-col>
			<el-col :span="6">
				<div class='title'><h4>部署・所属</h4></div>
				<div>
					<el-input clearable placeholder="部署・所属"></el-input>
				</div>				
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="4">
				<div class='title'><h4>郵便番号</h4></div>
				<div>
					<el-input clearable placeholder="郵便番号">
						 <template slot="prepend">〒</template>
					</el-input>
				</div>				
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class='title'><h4>住所</h4></div>
				<div>
					<el-input clearable placeholder="住所"></el-input>
				</div>				
			</el-col>
			<el-col :span="6">
				<div class='title'><h4>ビル名・部屋番号</h4></div>
				<div>
					<el-input clearable placeholder="ビル名・部屋番号"></el-input>
				</div>				
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class='title'><h4>電話番号</h4></div>
				<div>
					<el-input clearable placeholder="電話番号"></el-input>
				</div>				
			</el-col>
			<el-col :span="6">
				<div class='title'><h4>FAX</h4></div>
				<div>
					<el-input clearable placeholder="FAX"></el-input>
				</div>				
			</el-col>
		</el-row>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class='title'><h4>メールアドレス</h4></div>
				<div>
					<el-input clearable placeholder="メールアドレス"></el-input>
				</div>				
			</el-col>
		</el-row>
	</el-card>
	<!-- 3. 品目を入力 -->
	<el-card style='margin-top: 15px;'>
		<div class='title'>
			<h3>3. 品目を入力</h3>
		</div>
		<el-row :gutter="20">
			<el-col :span='20'>
				  <el-table :data="tableData" border style="width: 100%">
				    <el-table-column label="No." width="180" type="index"></el-table-column>
				    <el-table-column prop="title" label="品目名" width="500px"></el-table-column>
					<el-table-column prop="amount" label="数量"></el-table-column>
					<el-table-column prop="unit" label="単位" ></el-table-column>
					<el-table-column prop="unitprice" label="単価"></el-table-column>
				  </el-table>
			</el-col>
		</el-row>
		<!-- addToggle = True: 显示追加按钮 -->
		<div v-if="addToggle">
			<el-row>
				<el-col :span="3">
					<div style="height: 100%;">
						<el-button plain icon='el-icon-circle-plus-outline' 
						style="width: 100%; height: 45px;" @click='changeAddToggle'>
						品目追加
						</el-button>
					</div>
				</el-col>
			</el-row>
		</div>

		<!-- addToggle = False：显示表单 -->
		<el-card v-else >
			<div class='title'><h4 style="text-align: start;">品目追加</h4></div>
			<el-row >
				<el-form inline>
					<el-col :span="8">
						<div style="text-align:center; margin-bottom: 10px;"><h4>品目名</h4></div>
						<el-form-item style="width: 100%;">
							<el-input clearable placeholder="品目名" v-model="newitem.title" 
							style="width: 300px;">
							</el-input>						
						</el-form-item>
					</el-col>
					<el-col :span="5">
						<div style="text-align:center; margin-bottom: 10px;"><h4>数量</h4></div>
						<el-form-item>
							<div>
								<el-input-number v-model="newitem.amount"  :min="1"></el-input-number>
							</div>	
						</el-form-item>
					</el-col>					
					<el-col :span="2">
						<div style="text-align:center; margin-bottom: 10px;"><h4>単位</h4></div>
						<el-form-item>
							<div>
								<el-input clearable  v-model='newitem.unit'></el-input>
							</div>	
						</el-form-item>
					</el-col>									
					<el-col :span="6">
						<div style="text-align:center; margin-bottom: 10px;"><h4>金額</h4></div>
						<el-form-item>
							
							<div>
								<el-input clearable  v-model='newitem.unitprice'></el-input>
							</div>	
						</el-form-item>
					</el-col>
				</el-form>
			</el-row>
			<el-row :gutter="10" style="margin-top: 20px;">
				<el-col :span="2" :push="1">
					<el-button style='width: 100%; height: 25px;' type="success" @click='additem'>追加</el-button>
				</el-col>
				<el-col :span="2" :push="1">
					<el-button style='width: 100%; height: 25px' type="warning" @click='canceladd'>戻る</el-button>
				</el-col>
			</el-row>
		</el-card>
	</el-card>
</div>

</template>

<script>
export default{
	data(){
		return{
			addToggle: true,
			invoice:{},
			tableData:[
				{
					title: 'hinmokumei',
					amount: 'count',
					unit: '個',
					unitprice: '100'
					
				},
			],
			newitem:{
				title: "",
				amount: "1",
				unit: "",
				unitprice:""
			}
		}
	},
	methods:{
		changeAddToggle(){
			this.addToggle = !this.addToggle;
		},
		additem(){
			this.tableData.push(this.additem);
			console.log(this.tableData)
		}
	}
}
</script>

<style scoped>
	*{
		padding: 0;
		margin: 0;
	}
	.title{
		display: flex;
		justify-content: start;
		margin: 15px 5px;
	}

	.el-row{
		margin-bottom: 12px;
	}
	.el-divider{
		margin: 15px 0 0 0;
	}
	.el-form-item{
		padding: 0;
		margin: 0;
	}
</style>
