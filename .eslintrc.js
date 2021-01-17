module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "globals": {
        $: true
    },
    "extends": ["eslint:recommended", "standard"], // 配置standard规则 npm install --save-dev eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        // 空格
        "semi": ["error", "always"],
        // eslint-disable-next-line no-undef
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        // 禁止出现空语句块
        'no-empty': 'warn',
        // 函数命名前空格(未生效)
        // 'space-before-function-paren': ["off", "always"],
        // 强制把变量的使用限制在其定义的作用域范围内
        'block-scoped-var': 'warn',
        // 禁止在计算属性中使用空格a['b']
        'computed-property-spacing': 'error',
        // 禁止在函数标识符和其调用之间有空格
        'func-call-spacing': 'error',
        // switch 的冒号左没空格，右有空格
        'switch-colon-spacing': 'error',
        // 要求箭头函数的箭头之前或之后有空格
        'arrow-spacing': 'error',
        // 禁止在模板中使用this
        // 不可以直接使用 Object.prototypes 的内置属性（关闭）
        'no-prototype-builtins': 'off',
        // 要求使用 Error 对象作为 Promise 拒绝的原因（关闭）
        'prefer-promise-reject-errors': 'off'
    }
};
