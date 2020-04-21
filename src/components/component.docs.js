import PropTypes from '../components/prop-types.vue'

export default {
	'card-select': {
		props: {
			selected: {value: 'CAT2'},
		},
	},
	'prop-types': {
		events: {
			'prop-select': `Indicates the prop name which was selected.`,
			'event-select': `Indicates the event name which was selected.`,
		},
	},
	'hint-comp': {
		props: {
			label: 'Something',
		},
	},
}