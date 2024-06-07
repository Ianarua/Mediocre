const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const terser = require('@rollup/plugin-terser');
const { babel } = require('@rollup/plugin-babel');

module.exports = {
    // 入口
    input: '',
    // 出口
    output: {
        format: 'esm',
        name: 'xxx',
        file: './build/bundle.esm.js'
    },
    plugins: [
        commonjs(),
        nodeResolve(),
        babel({
            babelHelpers: 'bundled',
            exclude: /node_modules/
        }),
        terser()
    ]
};
