module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
    "react/no-unknown-property": ["error", { ignore: ["css"] }],
    "react/button-has-type": "off",
    "import/prefer-default-export": "off",
    "no-restricted-exports": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-param-reassign": "off",
    "prefer-const": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
  },
};
