<template>
	<div class="vue-doc-library">
		<section class="nav">
			<nav>
				<a v-for="(c, key) of components" :href="`#${c.name}`" :key="key" @click="selectComponent(key)">
					<div :class="['doc-link', {selected: state.compData[key].selected}]">
						{{key}}
					</div>
				</a>
			</nav>
		</section>
		<section class="docs">
			<vue-doc v-for="(c, key) of components" :id="`${c.name}`" :key="key"
				:component="c" :props="docs[c.name] && docs[c.name].props" :events="docs[c.name] && docs[c.name].events"></vue-doc>
		</section>
	</div>
</template>

<script>
import {reactive, computed} from '@vue/composition-api'
import VueDoc from '../vue-doc.vue'

export default {
	name: 'vue-doc-library',
	components: {VueDoc},
	props: {
		components: {type: Object, default: () => ({})},
		docs: {type: Object, default: () => ({})},
	},
	setup(props, ctx) {
		const state = reactive({
			compData: Object.keys(props.components).reduce((acc, key) => {
				acc[key] = {key, selected: false}
				return acc
			}, {}),
		})

		const selectedComponent = computed(() => Object.entries(state.compData).find(([key, data]) => data.selected)?.[0] || null)

		return {
			state,
			selectComponent: (key) => Object.values(state.compData).forEach((c) => c.selected = c.key === key),
		}
	},
}
</script>

<style lang="stylus" scoped>
@require '~style/mixins.styl'
@require '~style/variables.styl'

.vue-doc-library {
	absPos(0, 0, 0, 0)
	z-index -1
	background: $c-black
	flexXY(space-between, flex-start)

	section.nav {
		height: 100%
		min-width: 200px
		color: $c-prop
		background: #f4f4f4
		nav {
			position: sticky
			top: 0
		}
		nav a {
			color: $c-prop
			text-decoration none
			flexXY(flex-start, center)
			padding: 8px 12px
			wh(100%, 40px)
			border-bottom: 1px solid #ddd
		}
	}

	section.docs {
		flex-grow: 1
		background: #eaeced
		padding: 12px
	}
}
</style>