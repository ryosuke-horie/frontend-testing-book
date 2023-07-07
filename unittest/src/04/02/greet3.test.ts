import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

// 未実装だから動かない
test("挨拶が未実装（本来の実装ではない）", () => {
  expect(greet).toBe(undefined);
});

// モックで実装した関数が呼ばれる
test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
