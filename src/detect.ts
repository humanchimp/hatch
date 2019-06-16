import { Greed, Flag, Convert, Converter } from "./interfaces";

const flagSyntax = /^-+/;

export function detect<T>(
  arg: string,
  index: number,
  argv: string[],
  converterFor: (name: string) => Converter<string> = () => ({
    convert: (it: string) => it,
  }),
): [Flag, Greed] {
  if (arg.startsWith("--")) {
    const flagText = arg.replace(flagSyntax, "");

    if (arg.includes("=")) {
      const [name, value] = flagText.split("=");

      return [
        {
          type: "gnu",
          name,
          value: converterFor(name).convert(value),
        },
        0,
      ];
    }
    if (argv.length > index + 1) {
      try {
        return [
          {
            type: "gnu",
            name: flagText,
            value: converterFor(flagText).convert(argv[index + 1]),
          },
          1,
        ];
      } catch {}
    }
    return [
      {
        type: "gnu",
        name: flagText,
        value: undefined,
      },
      0,
    ];
  }
}
