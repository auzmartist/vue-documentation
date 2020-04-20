import {reactive, computed, ref} from '@vue/composition-api'

export default function useVmInfo({component, props, events}, ctx) {
	let rSelectedProp = ref(Object.keys(component.props || {})[0] || '')
	let rSelectedEvent = ref(Object.keys(component.events || {})[0] || '')

	const rProps = computed(() => {
		const obj = {}
		for(let key in component.props) {
			obj[key] = {
				note: props[key]?.note,
				...component.props[key],
				selected: rSelectedProp.value === key,
				value: props[key]?.value,
			}
			obj[key].defaultValue = obj[key].default ? typeof obj[key].default === 'function' ? obj[key].default() : obj[key].default :
				// if no default can be assigned and the prop is required, assign the default instance of type
				!!obj[key].required && obj[key].type ? new obj[key].type() : null
		}
		return obj
	})

	const rEvents = computed(() => {
		const obj = {}
		for(let key in component.events) {
			obj[key] = {
				name: key,
				selected: rSelectedEvent.value === key,
				...component.events[key],
			}
		}
		return obj
	})

	const selectProp = (prop) => rSelectedProp.value = rSelectedProp.value === prop ? '' : prop
	const selectEvent = (event) => rSelectedEvent.value = rSelectedEvent.value === event ? '' : event

	return {
		rProps,
		rEvents,
		selectProp,
		selectEvent,
	}
}