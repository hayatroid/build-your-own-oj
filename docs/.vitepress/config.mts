import { defineConfig } from "vitepress";

const tokenize = (term: string) => {
  if (typeof term === "string") term = term.toLowerCase();
  const segmenter =
    Intl.Segmenter && new Intl.Segmenter("ja-JP", { granularity: "word" });
  if (!segmenter) return [term];
  const tokens = [];
  for (const seg of segmenter.segment(term)) {
    tokens.push(seg.segment);
  }
  return tokens;
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Build your own OJ",
  description: "We are going to build OJ from scratch. Step by step.",
  lang: "ja-JP",

  head: [["link", { rel: "icon", href: "/logo.png" }]],

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",

    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "第一部：プロトタイプをつくる",
        link: "/prototype/",
        items: [
          {
            text: "Hello, GitHub Actions!",
            link: "/prototype/runner_00",
          },
          {
            text: "コードを受け取る",
            link: "/prototype/runner_01",
          },
          {
            text: "標準入力を受け取る",
            link: "/prototype/runner_02",
          },
          {
            text: "ビルドと実行を分ける",
            link: "/prototype/runner_03",
          },
          {
            text: "ぐっと睨む",
            link: "/prototype/abstract_it",
          },
          {
            text: "Hello, Docker!",
            link: "/prototype/runner_04",
          },
          {
            text: "実行メトリクスを取得する",
            link: "/prototype/runner_05",
          },
          {
            text: "実行結果を判定する",
            link: "/prototype/runner_06",
          },
          {
            text: "ぐぐっと睨む",
            link: "/prototype/abstract_it_more",
          },
        ],
      },
      {
        text: "第二部：Runner をつくる",
        items: [],
      },
      {
        text: "第三部：Server をつくる",
        items: [],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/hayatroid/build-your-own-oj",
      },
    ],

    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            tokenize,
          },
          searchOptions: {
            combineWith: "AND",
            processTerm: tokenize,
          },
        },
      },
    },
  },
});
