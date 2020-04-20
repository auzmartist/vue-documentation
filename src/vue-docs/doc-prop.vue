<template>
	<div class="doc-prop">
		<strong>{{name}}</strong><span v-if="!attrs.required" title="optional">?</span>:
		<i>{{attrs.type}}</i> {{attrs.default != null ? '=' : ''}}
		<code v-if="attrs.default != null" title="default value">{{JSON.stringify(attrs.default)}}</code>
		<hr v-if="attrs.note">
		<p v-if="attrs.note" v-html="attrs.note"></p><br/>
	</div>
</template>

<script>
import {computed} from '@vue/composition-api'
import usePropInfo from './usePropInfo'

export default {
	name: 'doc-prop',
	props: {name: String, prop: Object},
	setup(props, ctx) {
		const attrs = computed(() => ({
			...props.prop,
			type: typeof props.prop.type === 'function' ? typeof props.prop.type() : 'unknown',
			default: props.prop.default ? typeof props.prop.default === 'function' ?
				props.prop.default() : props.prop.default : null,
			required: !!props.prop.required,
		}))

		return {
			attrs,
		}
	},
}
</script>

<style lang="stylus" scoped>
@require '~style/variables.styl'
@require '~style/doc.styl'
</style>