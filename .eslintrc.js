module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb", "@vue/typescript/recommended"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style": 0,
    "no-trailing-spaces": 0,
    "max-len": ["error", 500],
    "vue/html-closing-bracket-newline": "error",
    "indent": [2, "tab"],
    "no-tabs": 0,
    'indent': 'off',
    "import/prefer-default-export": 0,
  },
};
