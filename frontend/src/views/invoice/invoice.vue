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
					<el-date-picker　v-model="value1"　type="date"　placeholder="発行日" style='width: 100%;'></el-date-picker>
		 		</div>				
		 	</el-col>
			<el-col :span="6">
				<div class='title'><h4>お支払い期限</h4></div>
				<div>
					<el-date-picker　v-model="value1"　type="date"　placeholder="お支払い期限" style='width: 100%;'></el-date-picker>
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
</div>

</template>

<script>
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
</style>
