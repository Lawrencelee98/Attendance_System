<template>
	<el-container class='home-container'>
		<el-header>
			<div>
				<img src="../../assets/logo.png" style="height: 100%;">
				<span>My Dashboard</span>
			</div>
			<el-button type='info' @click='logout'>
				ログアウト
			</el-button>
		</el-header>
		<el-container style='height: 100vh;'>
			<el-row style='margin-top:5rem' gutter='20'>
            <router-link to="/attendance">
                    <el-col :span="8">
                    <el-card shadow='hover'>
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style='width:100%'>
                    <div style="padding: 14px;">
                        <span>出勤管理システム</span>
                        <div >
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col> 
                </router-link>
                <router-link to="/cashflow">
                <el-col :span="8"> 
                    <el-card shadow='hover'>
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style='width:100%'>
                    <div style="padding: 14px;">
                        <span>キャッシュフロー管理</span></span>
                        <div >
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>         
                </el-col>
                </router-link> 
                <router-link to="/marketing">
                <el-col :span="8">
                    <el-card shadow='hover'>
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image" style='width:100%'>
                    <div style="padding: 14px;">
                        <span>営業管理</span></span>
                        <div >
                        <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
                </router-link>
            </el-row>
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
	methods:{
		saveNavState(){
			
		},
		// 导航菜单的展开与折叠按钮
		toggleCollapse(){
			this.isCollapse = !this.isCollapse
		},
		// 退出登录
		logout(){
			windows.sessionStorage.clear();
			this.$router.next('/login');
			alert("logout")
		},
	}
}
</script>

<style scoped>
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
	.el-row{
        margin-left:10%;
        margin-right:10%;
        width:100%;
    }
    .el-col{
        display:flex;
        justify-content:center;
    }
	.el-card{
        width:65%;
        display:flex;
        justify-content:center;      
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

</style>

