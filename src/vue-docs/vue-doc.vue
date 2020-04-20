<template>
	<div class="vue-doc">
		<div class="doc">
			<h2>&lt;{{component.name}}&gt;</h2>
			<blockquote>{{component.introduction}}</blockquote>
			<p>{{component.description}}</p>
			<code v-if="component.sample">{{component.sample}}</code>
		</div>
		<div class="sandbox">
			<component :is="component" v-bind="componentIO.props"/>
		</div>
		<section class="docs">
			<!-- <doc-prop v-for="(prop, key) of rProps" :name="key" :prop="prop" :data-name="key" :key="key"/> -->
			<article :class="['prop', {gray: !selectedProp}]">
				<doc-prop v-if="selectedProp"
					:name="selectedProp[0]" :prop="selectedProp[1]" :data-name="selectedProp[0]"/>
				<h4 v-else class="centered">Select a prop at right</h4>
			</article>

			<doc-black-box :props="rProps" :events="rEvents"
				@prop-select="selectProp"
				@event-select="selectEvent"/>

			<article v-if="Object.keys(rEvents).length > 0" :class="['event', {gray: !selectedEvent}]">
				<doc-event v-if="selectedEvent"
					:name="selectedEvent[0]" :event="selectedEvent[1]" :data-name="selectedEvent[0]"/>
				<h4 v-else class="centered">Select an event at left</h4>
			</article>

		</section>
	</div>
</template>

<script>
import {computed} from '@vue/composition-api'
import useVmInfo from './useVmInfo'
import DocBlackBox from './doc-black-box.vue'
import DocProp from './doc-prop.vue'
import DocEvent from './doc-event.vue'

export default {
	name: 'vue-doc',
	components: {DocBlackBox, DocProp, DocEvent},
	props: {
		component: {
			type: Object,
			required: true,
			note: 'The component to document.'
		},
		props: {
			type: Object,
			default: () => ({}),
			note: 'Notes and sample values for props.',
		},
	},
	setup(props, ctx) {
		const {rProps, rEvents, selectProp, selectEvent} = useVmInfo(props, ctx)

		console.log(rProps.value)
		return {
			rProps,
			rEvents,
			selectProp,
			selectEvent,

			componentIO: {
				props: Object.entries(rProps.value).reduce((acc, [key, value]) => {
					acc[key] = value.value || value.defaultValue
					return acc
				}, {})
			},

			selectedProp: computed(() => Object.entries(rProps.value).find(([key, {selected}]) => selected)),
			selectedEvent: computed(() => Object.entries(rEvents.value).find(([key, {selected}]) => selected)),
		}
	},
}
</script>

<style lang="stylus" scoped>
@require '~style/variables.styl'
@require '~style/mixins.styl'
@require '~style/doc.styl'

.vue-doc{
	padding: 24px 0 36px 0
	.doc {
		font-size: 0.85rem
		h2 {
			font-size: 1.4rem
			color: $c-black
			margin-bottom: 0.5rem
		}
		blockquote {
			color: lighten($c-black, 40%)
			margin-bottom: 1rem
		}
		p {
			margin-bottom: 1rem
		}
		& > code {
			padding: 8px
		}
		margin-bottom: 16px
	}
	.sandbox {
		position relative
		padding: 12px
		flexXY(center)
		background: #e4e5e5
		border: 1px solid #d4d8da
		border-radius: 12px
		&::before {
			absPos(0, auto, auto, 0)
			content: 'Sandbox'
			font-size: 0.6rem
			color: #999
			left: 12px
		}
	}
	.docs {
		flexXY(center, flex-start)
	}

	article {
		max-width: 500px
		min-height: 100px
		flex: 1
		margin: 16px
		padding: 24px 16px
		border-radius: 4px
		background: #fdfeff
		box-shadow: 0 1px 3px 0 rgba($c-black, 0.3)
		transition: background 0.3s ease-in-out

		&.prop {
			margin-left: 0
			border-top: 4px solid $c-prop
		}
		&.event {
			margin-right: 0
			border-top: 4px solid $c-event
		}
		&.gray {
			background: #58595a
		}

		.centered {
			text-align: center
			text-transform: uppercase
			letter-spacing: 0.1em
			font-weight bold
			color: rgba(255, 255, 255, 0.8)
		}
	}
}
</style>