<template>
	<div class="doc-event">
		<strong>{{event.name}}</strong>:
		<i v-if="event.type">Event&lt;{{typeof event.type()}}&gt;</i>
		<hr v-if="event.note">
		<p v-if="event.note" v-html="event.note"></p><br/>
	</div>
</template>

<script>
export default {
	name: 'doc-event',
	props: {event: Object, required: true},
}
</script>

<style lang="stylus" scoped>
@require '~style/doc.styl'
</style>