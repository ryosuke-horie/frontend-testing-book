import { add, sub } from ".";

// describeでテストをグループ化する
// describeはネスト可能
describe("四則演算", () => {
  describe("add", () => {
    test("1 + 1 は 2", () => {
      // アサーションを書く（検証値が期待値どうりであるということを表現する）
      // toBeはマッチャー
      expect(add(1, 1)).toBe(2);
    });

    test("1 + 0 は 1", () => {
      expect(add(1,0)).toBe(1);
    });

    test("1 + 2 は 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
  describe("sub", () => {
    test("1 - 1 は 0", () => {
      expect(sub(1, 1)).toBe(0);
    });
    test("2 - 1 は 1", () => {
      expect(sub(2, 1)).toBe(1);
    });
  });
});
