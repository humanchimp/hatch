import ts from "@wessberg/rollup-plugin-ts";
import typescript from "typescript";
import lope from "@topl/lope";

export default {
  input: "spec/**.spec.ts",
  output: {
    format: "cjs",
    file: "test-dist/test.js",
    sourcemap: true,
  },
  plugins: [ts({ typescript }), lope()]
};
