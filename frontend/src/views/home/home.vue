<template>
	<el-container class='home-container'>
		<el-header style='height: 8vh;'>
			<div>
				<img src="../../assets/logo.png" style="height: 100%;">
				<span>My Dashboard</span>
			</div>
			<el-button type='info' @click='logout'>
				ログアウト
			</el-button>
		</el-header>
		<el-container>
			<el-aside :width="isCollapse ? '64px' : '200px'">
				<div class='toggle-button' @click='toggleCollapse'>|||</div>
				<el-menu router id='id-menu' background-color='#fff' text-color='#000' active-text-color='#409EFF' :unique-opened='true' :default-active='activeIndex'>
<!-- 					<el-submenu index="0" style='padding-left: 0;'>
						<template slot='title'>
							<i class='el-icon-s-claim'></i>
							<span style="font-size: larger;">出勤管理</span>
						</template>
					</el-submenu> -->
					<el-menu-item index='/attendance'>
						<i class='el-icon-s-claim'></i>
						<span v-if='!isCollapse' style="font-size: larger;" slot='title'>出勤管理</span>
					</el-menu-item>
					<el-menu-item index='/cashflow'>
						<i class='el-icon-s-claim'></i>
						<span v-if='!isCollapse' style="font-size: larger;" slot='title'>入出金管理</span>
					</el-menu-item>
					<el-menu-item index='/marketing'>
						<i class='el-icon-s-claim'></i>
						<span v-if='!isCollapse' style="font-size: larger;" slot='title'>営業記録</span>
					</el-menu-item>
					<el-menu-item index='/invoice'>
						<i class='el-icon-s-claim'></i>
						<span v-if='!isCollapse' style="font-size: larger;" slot='title'>請求書</span>
					</el-menu-item>
				</el-menu>
				
			</el-aside>
			<el-main style='height: 92vh; overflow: scroll;'>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
export default{
	data(){
		return {
			isCollapse:false,
			activeIndex: "/attendance",
		}
	},
	created() {
		
	},
	methods:{
		saveNavState(){
			
		},
		// 导航菜单的展开与折叠按钮
		toggleCollapse(){
			this.isCollapse = !this.isCollapse
		},
		logout(){
			window.sessionStorage.clear();
			this.$router.push('/login')
		}
	}
}
</script>

<style scoped>
	.home-container{
		height: 100%;
	}
	/* 注意!!! 这里用类选择器 */
	.el-header{
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		padding-left: 0;
		align-items: center;
		color: #fff;
		font-size: 20px;
		box-shadow: 10px,5px,5px,#000000;
	}
	
	.el-header>div{
		height: 100%;
		display: flex;
		align-items: center;
	}
	
	.el-header>div>span{
		margin-left: 20px;
	}
	
	.el-aside{
		background-color: #FFFFFF;
		box-shadow: 100px,50px,50px,#000000;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	
	.el-main{
		background-color: #EAEDF1;
		height: 100%;
	}
	.el-menu{
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	
	.home-container{
		height: 100%;
	}
	
	.icon{
		padding-right: 30px;
	}
	
	#id-menu{
		border-right: none;
	}
	
	#id-submenu{
	}
	
	.toggle-button{
		background-color: #fff;
		font-size: 10px;
		line-height: 24px;
		color: #000;
		text-align: center;
		letter-spacing: 0.2em;
		cursor: pointer;
	}
</style>

