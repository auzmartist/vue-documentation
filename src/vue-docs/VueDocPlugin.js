import pckg from '../../package.json'
import {components} from './index'

export default (function VueDocPlugin() {

	function install(Vue, options) {
		Object.values(components).forEach((c) => Vue.component(c.name, c))
	}

	return {
		name: 'VueDoc',
		version: pckg.version,
		install,
	}
})()
