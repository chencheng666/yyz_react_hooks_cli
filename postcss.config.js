module.exports = {
    plugins: [
        require('postcss-preset-env')(
            {
                importFrom: './src/assets/style/common.css',
                features: {
                    'color-mod-function': true,
                }
            }
        ),
    ]
};