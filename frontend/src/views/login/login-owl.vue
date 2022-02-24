<template>
	<div style='display: flex; width: 100%;height: 100%; justify-content: center; align-items: center;'>
		<div class="login-box">
		    <div class="owl" id="owl">
		        <div class="hand"></div>
		        <div class="hand hand-r"></div>
		        <div class="arms">
		            <div class="arm"></div>
		            <div class="arm arm-r"></div>
		        </div>
		    </div>
		    <div class="input-box">
				<!-- 表单 -->
				<el-form ref='loginFormRef' class='login_form' :model="loginForm" :rules='loginFormRules'>
				  <!-- 用户名 --><!-- 在prop里指定验证规则 -->
				  <el-form-item prop='username' > 
				    <el-input prefix-icon='el-icon-user' v-model='loginForm.username'  placeholder="Username"></el-input>
				  </el-form-item>
				  <!-- 密码 -->
				  <el-form-item prop="password" >
				    <el-input prefix-icon='el-icon-lock' v-model='loginForm.password' type='password' placeholder="Password" @focus="focusPassword" @blur='blurPassword'></el-input>
				  </el-form-item>
				  <!-- 按钮 -->
				  <el-form-item >
				    <el-button type='primary' @click='login' size="small">ログイン</el-button>
					<el-button type='success' @click="goRegister">ユーザー登録</el-button>
				    <el-button type='info' @click="resetLoginForm">リセット</el-button>
				  </el-form-item>
				</el-form>
				
<!-- 		        <input type="text" placeholder="Username">
		        <input type="password" id="password" placeholder="Password" @focus="focusPassword" @blur='blurPassword'>
		        <button>Login</button> -->
		    </div>
		</div>
	</div>

</template>

<script>

// $(function(){
// 	$("#password").focus(function(){
// 		$('#owl').addClass('password');
// 	}).blur(function(){
// 		$('#owl').removeClass('password');
// 	})
// })

export default {
	data(){
		return {
			// 登录表单绑定的对象
			loginForm: {
				username: '',
				password: '',
			},
			loginFormRules: {
				username: [
					{required: true, message: "ユーザーネームを入力してやね", trigger: "blur" },
					{min: 3, max:10, message: "长度在3到10个字符之间", trigger: "blur"}
				],
				password: [
					{required: true, message: "パスワードを入力してやね", trigger: "blur"},
					{min:5, max:16, message: "长度在5到16个字符之间", trigger: "blur"}
				],
			}
		}
	},
	create(){
		let viewportContent = "width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
		document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent)
	},
	methods: {
		// 重置表单方法, method里面的this指向的是这个组件的实例
		resetLoginForm(){
			// $代表着vue定义的属性,用来和用户定义的属性相互区分
			this.$refs.loginFormRef.resetFields();
		},
		login(){
			this.$refs.loginFormRef.validate(async valid=> {
				if(!valid){
					return;
				}else{
					this.authentication()
				}
				
			})
		},
		goRegister(){
			this.$router.push('/register')
		},
		async authentication(){
			const {data:res} = await this.$http.post('login/', this.loginForm);
			if(res.code==200){			
				window.sessionStorage.setItem('token',res.token)
				window.sessionStorage.setItem('user',res.nickname)
				this.$message.success('ログイン成功');
				// 跳转到home里
				this.$router.push('/home')
			}else{
				console.log(res)
				this.$message.error('ログインできません');
			}
		},
		focusPassword(){
			document.getElementById("owl").classList.add('password')
		},
		blurPassword(){
			document.getElementById('owl').classList.remove('password')
		}
	}
};
</script>

<style scoped>
	#app{
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	@import url("./mycss.css");
	body{
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

</style>
