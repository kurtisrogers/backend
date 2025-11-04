// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

import globals from "globals";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [{
  ignores: [
    '**/dev/*',
    '**/dist/*',
    '**/tests/*',
    'tsconfig.json',
    '**/types/generated/*',
    '**/config/*',
    '**/scripts/*'
  ]
}, {files: ["**/*.{js,mjs,cjs,ts}"]}, {
  "rules": {
    "no-console": "error",
  },
}, {languageOptions: { globals: globals.browser }}, ...tseslint.configs.recommended, eslintConfigPrettier, eslintPluginPrettierRecommended];