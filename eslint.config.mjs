// eslint.config.mjs - ESLint's new flat config file

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsdoc from "eslint-plugin-jsdoc";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    // ".next/**",
    // "out/**",
    // "build/**",
    // "next-env.d.ts",
    // End of defaults
    "src/app/testing/page.tsx"
  ]),
  {
    plugins: {
      jsdoc: jsdoc,
    },
    extends: ["jsdoc/recommended-typescript-error"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "no-warning-comments": "error",
    },
  },
]);

export default eslintConfig;
