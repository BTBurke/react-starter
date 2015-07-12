module.exports = {
    entry: {
        app: ['webpack-dev-server/client?http://localhost:8080', './src/js/app']
    },
    output: {
        path: './dist',
        filename: 'assets/scripts/app.js'
    },
    devServer: {
        contentBase: "./dist",
        progress: true,
        noInfo: true,
        hot: true,
        colors: true,
        inline: true,
        port: 8080
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['jsx', 'babel'],
                exclude: /node_modules/
            }
        ]
    }
};