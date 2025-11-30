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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "第一部：プロトタイプをつくる",
        items: [
          {
            text: "テスト",
            link: "/prototype/docs",
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
