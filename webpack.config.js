const path = require('path');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
           //     include: [helpers.root('src', 'styles')]
            }
        ]
    }
};