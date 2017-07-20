import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'
import SERVERPART from'../components/SERVERPART.vue'
//import ServerPartShop from'../components/ServerPartShop.vue'
//import Endaccount from'../components/Endaccount.vue'
Vue.use(Router);

Vue.use(ElementUI)
export default new Router({
	mode:'history',
	scrollBehavior:()=>({
		y:0
	}),
	linkActiveClass:'active',
  routes: [
//  {
//    path: '/SERVERPART',
//    component:SERVERPART
//  },
//  {
//  	path:'/ServerPartShop',
//  	component:ServerPartShop
//  },
//  {
//  	path:'/Endaccount',
//  	component:Endaccount
//  },
    {
    	path:'*',
    	redirect:'/SERVERPART'
    }
  ]
})
