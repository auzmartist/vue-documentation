<template>
	<div class="doc-black-box">
		<div class="box" :style="{
				width: width,
				height: `${Object.keys(props).length * 20}px`,
			}">
			<div class="ports">
				<ul class="props">
					<li :class="{selected: p.selected}" v-for="(p, key) of props" :key="key"
						@click="$emit('prop-select', key)">
						<label>{{key}}</label>
					</li>
				</ul>
			</div>
			<div class="ports">
				<ul class="events">
					<li :class="{selected: e.selected}" v-for="(e, key) of events" :key="key"
						@click="$emit('event-select', key)">
						<label>{{key}}</label>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import {watch, computed} from '@vue/composition-api'
export default {
	name: 'doc-black-box',
	props: {
		props: Object,
		events: Object,
		width: {type: String, default: '200px'},
		height: {type: String, default: '100px'},
	},
}
</script>

<style lang="stylus" scoped>
@require '~style/mixins.styl'
@require '~style/variables.styl'

.doc-black-box{
	margin-top: 8px
	padding: 8px
	flexXY(center)
	.box {
		position relative
		border-radius: 12px
		minwh(200px, 100px)
		background: $c-black
		& > .ports {
			flexXY(center)
			flex-direction column
		}
	}

	ul {
		height: calc(100% - 24px)
		margin-top: 12px
		width: 0
		flexXY(space-around, center)
		flex-direction: column
		&.props {
			absPos(0, auto, auto, 0)
		}
		&.events {
			absPos(0, 0, auto, auto)
			li label {
				absPos(-6px, 12px, auto, auto)
			}
		}
		li {
			position relative
			circle(12px)
			border: 3px solid white
			background: $c-prop
			cursor: pointer
			&.selected {
				border-color: $c-prop
				&::before {
					content: ''
					absPos(2px, 0, auto, auto)
					width: 27px
					height: 3px
					background: $c-prop
				}
			}
			label {
				absPos(-6px, auto, auto, 12px)
				white-space: nowrap
				cursor: pointer
				color: white
			}
		}
		&.events li {
			background: $c-event
			&.selected {
				border-color: $c-event
				&::before {
					absPos(2px, auto, auto, 0)
					background: $c-event
				}
			}
		}
	}
}
</style>