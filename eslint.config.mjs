import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extend Next.js recommended + TypeScript config
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add custom rule overrides
  {
    rules: {
      "no-unused-vars": ["warn"],
      "react/no-unescaped-entities": ["warn"], // Ensures JSX escapes characters like `'`
    },
  },
];

export default eslintConfig;
