module.exports = {
    entry: {
        app: './src/js/app'
    },
    output: {
        path: './dist',
        filename: 'assets/scripts/app.js'
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