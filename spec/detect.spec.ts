import { expect } from "chai";
import { detect } from "../src/detect";
import { Flag } from "../src/interfaces";

describe("detect()", () => {
  describe("without a conveter", () => {
    it("detects a gnu flag with value provided", () => {
      expect(detect("--hello=88", 0, ["--hello=88"])).to.eql([
        {
          type: "gnu",
          name: "hello",
          value: "88",
        } as Flag,
        0,
      ]);
    });

    it("detects a gnu flag with value as the next positional param", () => {
      expect(detect("--hello", 0, ["--hello", "88"])).to.eql([
        {
          type: "gnu",
          name: "hello",
          value: "88",
        } as Flag,
        1,
      ]);
    });

    it("detects a gnu flag without a provided value", () => {
      expect(detect("--hello", 0, ["--hello"])).to.eql([
        {
          type: "gnu",
          name: "hello",
          value: undefined,
        } as Flag,
        0,
      ]);
    });
  });
});
