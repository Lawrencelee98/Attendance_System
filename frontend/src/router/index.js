import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
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
      }
	  ]
  }
]
const router = new VueRouter({
	routes
})

export default router
