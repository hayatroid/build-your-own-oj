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
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
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
