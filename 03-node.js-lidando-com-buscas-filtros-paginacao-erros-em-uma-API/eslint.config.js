import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.node, ...globals.browser } } }, // Suporte a Node.js e Browser
  pluginJs.configs.recommended,
];
