<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="../../assets/logo.png" alt="" />
      </div>
    <!-- 表单 -->
    <el-form ref='registerFormRef' class='login_form' :model="registerForm" :rules='loginFormRules'>
      <!-- 用户名 --><!-- 在prop里指定验证规则 -->
      <el-form-item prop='username' > 
        <el-input prefix-icon='el-icon-user' v-model='registerForm.username'></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password" >
        <el-input prefix-icon='el-icon-lock' v-model='registerForm.password' type='password'></el-input>
      </el-form-item>
	  <el-form-item prop="nickname" >
	    <el-input prefix-icon='el-icon-apple' v-model='registerForm.nickname'></el-input>
	  </el-form-item>
      <!-- 按钮 -->
      <el-form-item >
        <el-button type='primary' @click='register'>ユーザー登録</el-button>
        <el-button type='info' @click="resetRegisterForm">リセット</el-button>
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
			registerForm: {
				username: '',
				password: '',
				nickname: '',
			},
			// 使用登录表单验证
			loginFormRules: {
				username: [
					{required: true, message: "ユーザーネームを入力してください", trigger: "blur" },
					{min: 3, max:10, message: "长度在3到10个字符之间", trigger: "blur"}
				],
				password: [
					{required: true, message: "パスワードを入力してください", trigger: "blur"},
					{min:5, max:16, message: "长度在5到16个字符之间", trigger: "blur"}
				],
				nickname: [
					{required: true, message: "名前を入力してください", trigger: "blur"},
					{min:2, max:16, message: "长度在2到16个字符之间", trigger: "blur"}
				],
			}
		}
	},
	methods: {
		// 重置表单方法, method里面的this指向的是这个组件的实例
		resetRegisterForm(){
			// $代表着vue定义的属性,用来和用户定义的属性相互区分
			this.$refs.registerFormRef.resetFields();
		},
		register(){
			this.$refs.registerFormRef.validate(async valid=> {
				if(!valid){
					return;
				}else{
					this.authentication()
				}
				
			})
		},
		async authentication(){
			const {data:res} = await this.$http.post('login/register', this.registerForm);
			if(res.code!==200){
				this.$message.error('ユーザー登録が失敗しました、改めて登録してください');
			}else{
				this.$message.success('ユーザー登録しました！');
				// 跳转到home里
				this.$router.push('/login')
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
