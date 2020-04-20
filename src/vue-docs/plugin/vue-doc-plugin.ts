import package from '../../../package.json'

export default (function() {
	let vue

	function install(Vue, options) {
		if(vue) throw new Error('Cannot re-install vue-doc-plugin.')
		vue = Vue,


	}

	return {
		version: package.version,
		install,
	}
})()