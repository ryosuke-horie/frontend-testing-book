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


    // 条件分岐の境界値
    test("50 + 50 は 100", () => {
      expect(add(50, 50)).toBe(100);
    })
    test("合計地の最大値は100となる", () => {
      expect(add(100, 1)).toBe(100);
    })
  });
  describe("sub", () => {
    test("1 - 1 は 0", () => {
      expect(sub(1, 1)).toBe(0);
    });
    test("2 - 1 は 1", () => {
      expect(sub(2, 1)).toBe(1);
    });

    // 条件分岐の境界値
    test("最低値は0であることをテストする", () => {
      expect(sub(0, 1)).toBe(0);
    })
  });
});
