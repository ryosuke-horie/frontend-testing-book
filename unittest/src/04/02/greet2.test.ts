import { greet } from "./greet";

// ここでgreet関数をモック化
jest.mock("./greet");

// 未実装だから動かない
test("挨拶を返さない（本来の実装ではない）", () => {
  expect(greet("Taro")).toBe(undefined);
});
