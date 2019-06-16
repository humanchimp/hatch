import { Flag, Validator } from "./interfaces";
import { detect } from "./detect";

export function* interpret(argv: string[], validator?: Validator) {
  let greediness: number = 0;

  for (const [index, arg] of argv.entries()) {
    if (greediness > 0) {
      greediness -= 1;
      continue;
    }
    const [flag, greed] = detect(arg, index, argv, validator);
    greediness += greed;
    yield flag;
  }
}
