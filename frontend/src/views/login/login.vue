<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../../assets/logo.png" alt="" />
      </div>
    <!-- 表单 -->
    <el-form ref='loginFormRef' class='login_form' :model="loginForm" :rules='loginFormRules'>
      <!-- 用户名 --><!-- 在prop里指定验证规则 -->
      <el-form-item prop='username' > 
        <el-input prefix-icon='el-icon-user' v-model='loginForm.username'></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password" >
        <el-input prefix-icon='el-icon-lock' v-model='loginForm.password' type='password'></el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item >
        <el-button type='primary' @click='login'>登录</el-button>
        <el-button type='info' @click="resetLoginForm">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
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
					{required: true, message: "请输入登录名", trigger: "blur" },
					{min: 3, max:10, message: "长度在3到10个字符之间", trigger: "blur"}
				],
				password: [
					{required: true, message: "请输入密码", trigger: "blur"},
					{min:5, max:16, message: "长度在5到16个字符之间", trigger: "blur"}
				],
			}
		}
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
		async authentication(){
			const {data:res} = await this.$http.post('login/', this.loginForm);
			if(res.code!==200){
				this.$message.error('登录失败');
			}else{
				window.sessionStorage.setItem('token',res.token)
				this.$message.success('登陆成功');
				// 跳转到home里
				this.$router.push('/home')
			}
		}
	}
};
</script>

// scope 限制样式作用域，仅在本组件
<style scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  position:absolute;
  left:50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}
.avatar_box > img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #eee;
}
.login_form{
  position:absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
