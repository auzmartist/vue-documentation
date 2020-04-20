<template>
	<div class="card-select">
		<div :class="[`card`, {selected: c.selected}]" v-for="c of cards" :key="c.label"
			@click="() => select(c.label)">
			<h1>{{c.label}}</h1>
			<small>{{c.small}}</small>
		</div>
	</div>
</template>

<script>
export default {
	name: 'card-select',
	introduction: 'Selectable labeled cards',
	description: 'A simple set of selectable labeled cards which emit the clicked label.',
	sample: `<card-select :selected="CAT2" @change="onChange"/>`,
	props: {
		selected: {
			type: String,
			note: 'The label to auto-select'
		},
		disabled: {
			type: Boolean,
			default: false,
			note: 'Disables selection of any card',
		},
	},
	events: {
		change: {
			type: String,
			note: 'Emits the value of the selected card\'s label <br> Example: <code>CAT1</code>',
		},
	},
	data: (vm) => ({
		cards: [
			{label: 'CAT1', small: 'category 1', selected: false},
			{label: 'CAT2', small: 'category 2', selected: false},
			{label: 'CAT3', small: 'category 3', selected: false},
			{label: 'CAT4', small: 'category 4', selected: false},
		]
	}),
	methods: {
		select(label) {
			this.cards.forEach((c) => c.selected = label === c.label)
			this.$emit('change', label)
		}
	},
	created() {
		if(this.selected != null) this.select(this.selected)
	},
}
</script>

<style lang="stylus" scoped>
@require '~style/mixins.styl'

.card-select{
	flexXY(center)
	.card {
		wh(200px)
		flexXY(center)
		flex-direction: column
		margin: 8px
		background: white
		cursor: pointer
		border: 2px solid transparent
		border-radius: 4px
		box-shadow: 0 2px 8px 0 rgba(#a6a7aa, 0.6)
		transition: border-color 0.2s ease-in-out
		&.selected {
			border-color: #49f
		}
		h1 {
			color: #a6a7aa
			font-size: 2.6rem
			margin-bottom: 8px
		}
		small {
			color: #444
			text-transform uppercase
			letter-spacing: 0.2rem
		}
	}
}
</style>