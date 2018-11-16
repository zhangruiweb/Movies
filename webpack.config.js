let path = require('path');
let proxy = require('http-proxy-middleware');

module.exports = {
	  devServer: {
        historyApiFallback: true,
        port: 8080,
        proxy:{
            '/v2': {
                target: 'http://api.douban.com',
                secure:false,
                changeOrigin: true,
                pathRewrite: {
                    '^/v2': '/v2'
                }
            }
        }
      },
	  entry: './app/main.js',
	  output: {
	      path: path.resolve(__dirname, 'dist'),
	      filename: 'all.js',
	      publicPath: 'public'
	  },
	  module: {
		  rules: [
		    {
		      test: /\.m?js$/,
		      exclude: /(node_modules)/,
		      use: {
		        loader: 'babel-loader',
		        options: {
		          presets: ['es2015','react']
		        }
		      }
		    },
		    {
	            test: /\.less$/,
	            use: [
		            {
		                loader: "style-loader" // creates style nodes from JS strings
		            }, {
		                loader: "css-loader" // translates CSS into CommonJS
		            }, {
		                loader: "less-loader" // compiles Less to CSS
		            }
	            ]
        	},
        	{
	            test: /\.css$/,
	            use: [
		            {
		                loader: "style-loader" // creates style nodes from JS strings
		            }, {
		                loader: "css-loader" // translates CSS into CommonJS
		            }
	            ]
        	},
        	{
		      test: /\.jsx$/,
		      use: [
			      {
			      	loader: 'jsx-loader',
			      },
			      {
			      	loader: 'babel-loader',
			      	options: {
			          presets: ['es2015','react']
			        }
			      }
		      ]
		    }
		  ]
	  },
	  watch:true
};