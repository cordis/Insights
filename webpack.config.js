var path = require("path");

var config = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./app.tsx"
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "insights.bundle.js"
    },
    resolve: {
        modules: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "node_modules")
        ],
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { enforce: 'pre', test: /\.tsx?$/, exclude: /node_modules/, loader: 'tslint-loader' },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                query: {
                    presets:['react','es2015']
                }
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html/, loader: 'html-loader?minimize=false' },
            { test: /\.styl$/, loader: 'css-loader!stylus-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    }
};

module.exports = config;
