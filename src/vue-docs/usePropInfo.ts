import { computed } from "@vue/composition-api"

export default function usePropInfo(prop) {
	const attrs = computed(() => ({
		type: typeof prop.type === 'function' ? typeof prop.type() : 'unknown',
		default: !prop.default ? null : typeof prop.default === 'function' ? prop.default() : prop.default,
		required: !!prop.required,
	}))

	return {
		attrs,
	}
}