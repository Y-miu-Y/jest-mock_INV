import { sample } from "../sample";

const mock = jest.fn().mockResolvedValue(Promise.resolve(1));

jest.mock("../sample", () => {
  return {
    sample: () => mock(),
  };
});

describe("モックお試し", () => {
  it("テスト確認", async() => {
    expect(true).toBeTruthy();
  });

  it("モック", async() => {

    expect(true).toBeTruthy();
    sample().then((res) => {
      expect(res).toBe(1);
    });
  });
});