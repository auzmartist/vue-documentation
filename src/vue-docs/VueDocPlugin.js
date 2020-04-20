import pckg from '../../package.json'
import {components} from './index'
import VueCompositionApi from '@vue/composition-api'

export default (function VueDocPlugin() {

	function install(Vue, options) {
		Vue.use(VueCompositionApi)
		Object.values(components).forEach((c) => Vue.component(c.name, c))
	}

	return {
		name: 'VueDoc',
		version: pckg.version,
		install,
	}
})()
