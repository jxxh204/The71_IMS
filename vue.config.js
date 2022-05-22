const path = require('path');

// htmlWebpackPlugin
module.exports = {
	lintOnSave: false,
	outputDir: path.resolve(__dirname, './dist'),

	publicPath: './',
	devServer: {
		// overlay: false,
		// host: 'localhost',
		// disableHostCheck: true,
		// historyApiFallback: true, //history 모드 404오류 해결.
	},
	transpileDependencies: ['@vue/reactivity', 'vuetify'],
	productionSourceMap: false,

	pages: {
		index: {
			// entry for the page
			entry: 'src/main.ts',
			// the source template
			template: 'public/index.html',
			// output as dist/index.html
			filename: 'index.html',
			// when using title option,
			// template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'The71_IMS',
			// chunks to include on this page, by default includes
			// extracted common chunks and vendor chunks.
			chunks: ['chunk-vendors', 'chunk-common', 'index'],
		},
	},
	chainWebpack: config => {
		config.module
			.rule('images')
			.use('url-loader')
			.loader('file-loader') // replaces the url-loader
			.tap(
				options =>
					Object.assign({}, options, {
						name: `img/[name].[ext]`,
					}), //파일 이름을 바꿀려면 폴더를 명시해줘야한다!!! img/...!
			);
	},

	css: {
		extract: {
			filename: `[name].css`,
			chunkFilename: `[name].css`,
		},
	},
	configureWebpack: {
		output: {
			filename: `js/[name].js`,
			chunkFilename: `js/[name].js`,
		},
	},
};