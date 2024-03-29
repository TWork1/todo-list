const path = require('path');
const Htmlwebpackplugins =('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module:{
        rules: [{
            test: /\.css$/i,
            use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(otf|ttf)$/i,
                type: 'asset/resource'
            }
        ]
      },
      plugins:[
        new HtmlwebpackPlugins({
            title:'Todo List',
            template:'./src/inedx.html'
        })
      ]
    };