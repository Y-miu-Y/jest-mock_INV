import { sample } from "../sample";

describe("モックお試し", () => {
  it("テスト確認", async () => {
    expect(true).toBeTruthy();
  });

  it("モック動作しない", async () => {

    const mock = jest.fn().mockResolvedValue(Promise.resolve(1));

    jest.mock("../sample", () => {
      return {
        sample: () => mock(),
      };
    });

    expect(true).toBeTruthy();
    sample().then((res) => {
      expect(res).toBe(0);
    });
  });
});