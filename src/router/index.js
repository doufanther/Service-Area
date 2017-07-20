import Vue from 'vue';
import Router from 'vue-router';
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-default/index.css'

Vue.use(Router);

Vue.use(ElementUI)
export default new Router({
	mode:'history',
	scrollBehavior:()=>({
		y:0
	}),
	linkActiveClass:'active',
  routes: [

  ]
})
