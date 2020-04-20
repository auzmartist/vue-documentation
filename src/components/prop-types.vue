<template>
	<div class="prop-types">
		<p>{{typeof bool}}: {{bool}}</p>
		<p>{{typeof num}}: {{num}}</p>
		<p>{{typeof str}}: {{str}}</p>
		<p>{{typeof arr}}: {{arr}}</p>
		<p>{{typeof obj}}: {{obj}}</p>
		<button @click="() => $emit('event', {
			random: Math.random().toString(36).substr(2, 7)
		})">Emit Event</button>
	</div>
</template>

<script>
export default {
	name: 'prop-types',
	props: {
		bool: {
			type: Boolean
		},
		num: {
			type: Number,
			default: 235
		},
		str: {
			type: String,
			default: 'CNC',
			note: `Any of the following strings: <br> <code>['CNC', 'IM', '3DP', 'SM']</code> <br><br> 'SM' is only available in the AMER region.`
		},
		arr: {
			type: Array,
			required: true,
		},
		obj: {
			type: Object,
			default: () => ({foo: 'bar'}),
			nodte: `Any 'ol object.`
		},
	},
	events: {
		event: {
			type: Object,
			note: 'Emits an event containing a random string <br/> Example: <code>{random: "1j38hf2"}</code>',
		}
	},
}
</script>

<style lang="stylus" scoped>
.prop-types {
	border: 1px solid #aaa
}
</style>