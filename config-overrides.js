const path = require('path');

const configFactory = require('react-scripts/config/webpack.config');

const paths = {
    src: path.resolve(__dirname, './src'),
    build: path.resolve(__dirname, './build'),
    static: path.resolve(__dirname, './public'),
};

module.exports = function override(_, env) {
    return configFactory(env);
};
