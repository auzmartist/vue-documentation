import PropTypes from '../components/prop-types.vue'

export default {
	'card-select': {
		props: {
			selected: 'CAT2',
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
	'vue-slots': {
		slots: {
			default: '<h2>H2</h2>',
			name: '<p>named slot content</p>',
		}
	},
}