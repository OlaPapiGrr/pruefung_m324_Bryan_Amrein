import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions:
      {
        globals:
          globals.browser,
      },
  },

  {
    rules:
      {
        eqeqeq:
          'error', // Erzwingt die Verwendung von === statt ==
      },
  },
];
