import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  {
    "parserOptions": {
      "ecmaVersion": 2020,
      "sourceType": "module"
    },
    "env": {
      "browser": true,
      "es6": true
    },
    "extends": ["eslint:recommended"]
  }
]);
