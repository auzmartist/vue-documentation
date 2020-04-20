<template>
	<div class="app">
		<vue-doc-library :components="components" :docs="docs"/>
	</div>
</template>

<script>
import {components} from './vue-docs'
import docs from './components/component.docs.js'
import PropTypes from './components/prop-types.vue'
import CardSelect from './components/card-select.vue'

export default {
	name: 'app',
	components: {
		PropTypes,
		...components
	},
	data: () => ({
		components: {CardSelect, PropTypes},
		docs,
	}),
}
</script>

<style lang="stylus" scoped>
.app {
	font-family: 'Consolas', monospace
	font-size: 0.75rem
	line-height: 1.1rem
	letter-spacing: 0.03em
}
</style>