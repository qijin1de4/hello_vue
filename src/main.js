import { createApp } from 'vue'

//import { createApp } from 'vue/dist/vue.esm-bundler'

//引入animate实现动画效果
import 'animate.css'
//import App from './App.vue'
//import App from './App_ComputedContent.vue'
//import App from './App_Events.vue'
//import App from './App_LifeCycleHooks.vue'
//import App from './App_InlineStyle.vue'
//import App from './App_CssClasses.vue'
//import App from './App_Animation.vue'
//import App from './App_Component.vue'
//import App from './App_ComponentEvents.vue'
import App from './App_Slots.vue'

const app = createApp(App);

//App_Component.vue start

/*
app.component('curr', {
	'props':['amt'],
	'template':`{{dollar(amt)}}`,
	'methods' : {
		dollar(ammount) {
			return '$$' + Number.parseFloat(ammount).toFixed(2)
		}
	}
})
*/

//End


app.mount('#app')
