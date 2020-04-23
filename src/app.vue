<template>
	<div class="app">
		<vue-doc-library :components="components" :docs="docs"/>
	</div>
</template>

<script>
import {components} from './vue-docs'
import docs from './components/component.docs.js'
import CardSelect from './components/card-select.vue'
import PropTypes from './components/prop-types.vue'
import VueVoid from './components/vue-void.vue'
import VueDeprecated from './components/vue-deprecated.vue'
import VueSlots from './components/vue-slots.vue'

export default {
	name: 'app',
	components: {
		PropTypes,
		...components
	},
	data: () => ({
		components: {CardSelect, PropTypes, VueSlots, VueVoid, VueDeprecated},
		docs,
	}),
}
</script>
