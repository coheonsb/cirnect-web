module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  extends: ['eslint:recommended', 'plugin:vue/recommended', 'plugin:nuxt/recommended', '@nuxtjs/eslint-config-typescript', 'plugin:@typescript-eslint/eslint-recommended'],
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    // 'prettier/prettier': ['error'],
    'vue/require-default-prop': 0,
    'vue/html-indent': ['error', 2],
    'prefer-const': 'error',
    'no-var': 'error',
    'vue/require-prop-types': 'off',
    // 'vue/singleline-html-element-content-newline': 0,
    'import/no-extraneous-dependencies': 'off',
    'vue/no-reserved-component-names': 'off',
    'import/no-named-as-default': 'off',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', { registeredComponentsOnly: false }],
    'vue/no-multiple-template-root': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: 4, multiline: 4 }],
    'vue/html-closing-bracket-newline': ['error', { multiline: 'never' }],
    'vue/first-attribute-linebreak': 'off',
    'vue/require-name-property': 'error',
    'import/order': 'off',
    'import/default': 'off',
    'vue/multi-word-component-names': 'off',
    camelcase: 'warn',
    'no-unsafe-optional-chaining': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/require-v-for-key': 'off'
  }
}
