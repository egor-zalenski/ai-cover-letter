import { dirname } from "path";
import { fileURLToPath } from "url";

import typescriptParser from "@typescript-eslint/parser";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,tsx}"],
    ignores: [".next/**", "node_modules/**"],
    plugins: {
      "@typescript-eslint": typescriptPlugin,
      "react": reactPlugin,
      "react-hooks": reactHooksPlugin,
      "import": importPlugin,
      "jsx-a11y": jsxA11yPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
      },
    },
    rules: {
      // React rules
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { extensions: [".tsx", ".jsx"] }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // Semicolon rule - never use semicolons
      "semi": ["error", "never"],
      
      // Import rules
      "import/extensions": [
        "off"
      ],
      // Enforce single-line imports with single comma
      "import/comma-style": ["error", "first"],
      "object-curly-newline": ["error", {
        "ImportDeclaration": { "multiline": true, "minProperties": 2 }
      }],
      
      // TypeScript rules
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      
      // Next.js rules
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],

      'import/no-restricted-paths': [
        'error',
        {
        zones: [
            // Previous restrictions...
            // enforce unidirectional codebase:
            // e.g. src/app can import from src/modules but not the other way around
            {
                target: './src/modules',
                from: './src/app',
            },

            // e.g src/modules and src/app can import from these shared modules but not the other way around
            {
                target: [
                    './src/components',
                    './src/hooks',
                    './src/ui',
                    './src/types',
                    './src/utils',
                    './src/store',
                ],
                from: ['./src/modules', './src/app'],
            },
        ],
        },
    ],
    },
  },
  {
    // Config for non-TypeScript files
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: [".next/**", "node_modules/**"],
    languageOptions: {
      parser: null, // Use default parser for JS files
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // Semicolon rule - never use semicolons
      "semi": ["error", "never"],
    },
  },
];
