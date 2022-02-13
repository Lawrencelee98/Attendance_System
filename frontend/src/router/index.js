import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/login/login.vue')
  },
  {
	  path: '/home',
	  name: 'home',
	  component: () => import('../views/home/home.vue'),
	  redirect:'/attendance',
	  children:[
		  {
			  path: '/attendance', 
			  name: 'Attendance',//出勤管理
			  component: ()=> import('../views/attendance/attendance.vue')
		  },
      {
        path: '/cashflow',
        name: 'Cashflow', //入出金管理
        component: ()=> import('../views/cashflow/cashflow.vue')
      },
	  {
		  path: '/marketing',
		  name: 'marketing',
		  component: ()=> import('../views/marketing/marketing.vue')
	  }
	  ]
  }
]
const router = new VueRouter({
	routes
})

// 挂在路由导航守卫
router.beforeEach((to,from,next)=>{
	// to代表将要访问的路径
	// from代表从哪个路径跳转而来
	// next是一个函数，代表放行,next() , next('/login')-> 指定强制跳转路径
	if(to.path==='/login'){
		return next();
	}else{
		const tokenStr = window.sessionStorage.getItem('token');
		
		if(!tokenStr){
			return next('/login');
		}else{
			return next();
		}
	}
})

export default router
