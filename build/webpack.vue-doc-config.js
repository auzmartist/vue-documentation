const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.js')

const resolve = (rel) => path.resolve(__dirname, '..', rel)

module.exports = (env = {prod: true}) => merge(baseConfig(env), {
	entry: resolve('src/vue-docs/VueDocPlugin.js'),
	output: {
		path: resolve('dist'),
		filename: env.prod ? 'vue-doc.min.js' : 'vue-doc.js',
	},
})