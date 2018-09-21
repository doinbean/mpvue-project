// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: false,
    node: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    indent:0,
    "no-unused-vars": [0, {
      // 允许声明未使用变量
      "vars": "local",
      // 参数不检查
      "args": "none"
    }],
    "no-multiple-empty-lines":0,
    // 关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    // 关闭()不允许空格
    'space-in-parens':0,
    'key-spacing':0,
    'space-before-blocks':0,
    // 关闭if else前面空格
    'keyword-spacing':0,
    //驼峰
    'camelcase':0,
    'space-infix-ops':0
  },
  globals: {
    App: true,
    Page: true,
    wx: true,
    getApp: true,
    getPage: true
  }
}
