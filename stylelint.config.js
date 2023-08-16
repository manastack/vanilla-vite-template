module.exports = {
  extends: [
    'stylelint-a11y/recommended',
    'stylelint-config-recommended',
    'stylelint-order-config-standard',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': ['custom-properties'],
  },
}
