import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
Vue.use(CompositionApi)
import App from './app.vue'

import './style/app.styl'

new Vue({
	el: '#app',
	render: (h) => h(App),
})

