const path = require('path')
const VueWebpackPlugin = require('vue-loader/lib/plugin.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const resolve = (rel) => path.resolve(__dirname, '..', rel)

const load = (test, ...use) => ({test, use, exclude: /node_modules/})

module.exports = (env) => {
	const config = {
		mode: env.prod ? 'production' : 'development',
		devtool: env.prod ? 'cheap-eval-source-map' : 'source-map',
		entry: resolve('src/main.js'),
		output: {
			path: resolve('build/out'),
			filename: env.prod ? 'app.min.js' : 'app.js',
			library: 'app',
			libraryTarget: 'umd',
			umdNamedDefine: true,
		},
		module: {
			rules: [
				load(/\.(j|t)s?$/, 'babel-loader'),
				load(/\.vue$/, 'vue-loader'),
				load(/\.styl(us)?$/, 'style-loader', 'css-loader', 'stylus-loader'),
				load(/\.css$/, 'style-loader', 'css-loader'),
				{
					test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
					loader: 'url-loader',
					query: {
						limit: 10000,
						name: 'img/[name].[hash:7].[ext]',
					},
				},
				{
					test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
					loader: 'url-loader',
					query: {
						limit: 10000,
						name: 'fonts/[name].[hash:7].[ext]',
					},
				},
			]
		},
		resolve: {
			extensions: ['.ts', '.js', '.json', '.styl', '.css'],
			alias: {
				'vue$': 'vue/dist/vue.esm.js',
				'src': resolve('src'),
				'style': resolve('src/style'),
			},
		},
		plugins: [
			new VueWebpackPlugin(),
		],
		devServer: {
			port: 9999,
			historyApiFallback: true,
			open: true,
			hot: true,
		},
	}

	if(!env.prod) {
		config.plugins.concat([
			new HtmlWebpackPlugin({
				template: resolve('build/template.html'),
				inject: 'body',
			}),
			new CopyWebpackPlugin([
				{from: resolve('static'), to: 'static'},
			]),
		])
	}

	return config
}
