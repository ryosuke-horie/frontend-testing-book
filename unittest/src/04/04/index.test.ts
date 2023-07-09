/**
 * テストするべき内容
 * ・指定したタウを持つ記事がなかったらNullを返す
 * ・指定したタグを持つ記事が一件以上あったら、リンク一覧を返す
 * ・データ取得に失敗したら例外をスローする
 */

import { getMyArticleLinksByCategory } from ".";
import * as Fetchers from "../fetchers";
import { getMyArticlesData, httpError } from "../fetchers/fixtures";

jest.mock("../fetchers");

// モック生成関数
// 最小限のパラメータでテスト用のセットアップを切りかえ可能にするユーティリティ関数
function mockGetMyArticles(status = 200) {
  if (status > 299) {
    return jest
      .spyOn(Fetchers, "getMyArticles")
      .mockRejectedValueOnce(httpError);
  }
  return jest
    .spyOn(Fetchers, "getMyArticles")
    .mockResolvedValueOnce(getMyArticlesData);
}

test("指定したタグをもつ記事が一件もない場合、null が返る", async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("playwright");
  // null が返ることを確認
  expect(data).toBeNull();
});

test("指定したタグをもつ記事が一件以上ある場合、リンク一覧が返る", async () => {
  mockGetMyArticles();
  const data = await getMyArticleLinksByCategory("testing");
  expect(data).toMatchObject([
    {
      link: "/articles/howto-testing-with-typescript",
      title: "TypeScript を使ったテストの書き方",
    },
    {
      link: "/articles/react-component-testing-with-jest",
      title: "Jest ではじめる React のコンポーネントテスト",
    },
  ]);
});

test("データ取得に失敗した場合、reject される", async () => {
  mockGetMyArticles(500);
  await getMyArticleLinksByCategory("testing").catch((err) => {
    expect(err).toMatchObject({
      err: { message: "internal server error" },
    });
  });
});
