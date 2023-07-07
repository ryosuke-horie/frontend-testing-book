import { greet, sayGoodBye } from "./greet";

jest.mock("./greet", () => ({
  // これは実装済みだから、モック化しない
  ...jest.requireActual("./greet"),

  // こっちはモック化する
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("挨拶を返す（本来の実装どおり）", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});

test("さよならを返す（本来の実装ではない）", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
