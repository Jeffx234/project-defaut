/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // Regras de identação
    indent: ['error', 2],

    // Regras para tipagem de variáveis e funções
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',

    // Regras para variáveis não utilizadas
    '@typescript-eslint/no-unused-vars': 'error',

    // Outras regras de boas práticas (exemplos)
    'no-console': 'warn', // Evitar o uso de console.log e similares.
    'no-alert': 'error', // Evitar o uso de alert().

    // Outras regras de formatação e estilo (exemplos)
    'quotes': ['error', 'single'], // Usar aspas simples.
    'semi': ['error', 'always'], // Sempre usar ponto e vírgula.
    'no-trailing-spaces': 'error', // Não permitir espaços no final da linha.
    'comma-dangle': ['error', 'always-multiline'], // Sempre usar vírgula no final de objetos e arrays multi-linha.
    'object-curly-spacing': ['error', 'always'], // Espaçamento após o início e antes do fim de chaves.

    ignorePatterns: [
      'node_modules/',
    ],
  },
};
