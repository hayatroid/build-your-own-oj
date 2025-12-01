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
            text: "決まったコードを実行する",
            link: "/prototype/runner_00",
          },
          {
            text: "受け取ったコードを実行する",
            link: "/prototype/runner_01",
          },
          {
            text: "受け取った標準入力で実行する",
            link: "/prototype/runner_02",
          },
          {
            text: "ビルドと実行を分ける",
            link: "/prototype/runner_03",
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
