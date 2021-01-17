module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          useBuiltIns: 'usage',
          corejs: 3,
          targets: {
            browsers: ['ios >= 7', 'android >= 4.0.3']
          }
        }
      ]
    ],
    env: {
      test: {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }]]
      }
    },
  //   plugins: [
  //     'lodash'
  //   ]
  }
}
