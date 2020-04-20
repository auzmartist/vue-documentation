import webpack from 'webpack'
import config from './webpack.vue-doc-config.js'

webpack(config(), function(err, stats) {
	if(err) throw err

	process.stdout.write(stats.toString({
		colors: true,
		errors: true,
		modules: false,
		children: false,
		chunks: false,
		chunkModules: false,
	}) + '\n\n')
})

// function var