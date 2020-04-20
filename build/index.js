require('@Babel/register')({
	presets: [['@babel/preset-env', {
		"useBuiltIns": "usage",
		"corejs": 3
	}], '@babel/preset-typescript'],
	extensions: ['.js', '.ts', '.json'],
})

module.exports = require('./build.ts')