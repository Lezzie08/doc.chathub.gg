import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ChatHub",
  description: "ChatHub user guide",
  cleanUrls: true,
  lastUpdated: true,

  srcDir: './docs',

  head: [
    ["link", { rel: "icon", href: "https://chathub.gg/logo.png" }],
    [
      "script",
      {
        defer: "",
        src: "https://plausible.midway.run/js/script.js",
        "data-domain": "doc.chathub.gg",
      },
    ],
  ],

  sitemap: {
    hostname: "https://doc.chathub.gg",
  },

  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        nav: [{ text: "Guides", link: "/" }],
        sidebar: [
          {
            text: "Overview",
            items: [
              { text: "Installation", link: "/" },
              { text: "Web App", link: "/webapp" },
            ],
          },
          {
            text: "Membership",
            items: [
              { text: "Introduction", link: "/membership/" },
              { text: "Lifetime", link: "/membership/lifetime" },
              { text: "Subscription", link: "/membership/subscription" },
            ],
          },
          {
            text: "ChatHub AI Service",
            items: [
              { text: "LLM Models", link: "/cloud/" },
              { text: "Image Generation", link: "/cloud/image-generation" },
            ],
          },
          {
            text: "Premium Features",
            items: [
              { text: "Code Preview", link: "/premium-features/code-preview" },
              { text: "File Upload", link: "/premium-features/file-upload" },
              { text: "Web Access", link: "/premium-features/web-access" },
              { text: "Summarize Chat 🆕", link: "/premium-features/summarize-chat" },
              { text: "Chrome Side Panel", link: "/premium-features/side-panel" },
            ],
          },
          {
            text: "Custom Chatbots",
            items: [
              { text: "Introduction", link: "/custom-chatbots/" },
              { text: "OpenAI Example", link: "/custom-chatbots/openai" },
              { text: "Anyscale Example", link: "/custom-chatbots/anyscale" },
              { text: "Together.ai Example", link: "/custom-chatbots/together" },
              { text: "OpenRouter Example", link: "/custom-chatbots/openrouter" },
              { text: "Xinference Example", link: "/custom-chatbots/xinference" },
              { text: "Ollama Example", link: "/custom-chatbots/ollama" },
            ],
          },
          {
            text: "Miscellaneous",
            items: [
              { text: "FAQ", link: "/miscellaneous/faq" },
              { text: "Troubleshooting", link: "/miscellaneous/troubleshooting" },
              { text: "Desktop App", link: "/miscellaneous/desktop-app" },
              { text: "How to update manually", link: "/miscellaneous/update-manually" },
            ],
          },
        ],
      }
    },
    "ja": {
      label: "日本語",
      lang: "ja",
      description: "ChatHubのユーザーガイド",
      themeConfig: {
        nav: [{ text: "ガイド", link: "/ja/" }],
        sidebar: [
          {
            text: "概要",
            items: [
              { text: "インストール", link: "/ja/" },
              { text: "Webアプリ", link: "/ja/webapp" },
            ],
          },
          {
            text: "メンバーシップ",
            items: [
              { text: "はじめに", link: "/ja/membership/" },
              { text: "ライフタイム", link: "/ja/membership/lifetime" },
              { text: "サブスクリプション", link: "/ja/membership/subscription" },
            ],
          },
          {
            text: "ChatHub AIサービス",
            items: [
              { text: "LLMモデル", link: "/ja/cloud/" },
              { text: "画像生成", link: "/ja/cloud/image-generation" },
            ],
          },
          {
            text: "プレミアム機能",
            items: [
              { text: "コードプレビュー", link: "/ja/premium-features/code-preview" },
              { text: "ファイルアップロード", link: "/ja/premium-features/file-upload" },
              { text: "Webアクセス", link: "/ja/premium-features/web-access" },
              { text: "Chatを要約 🆕", link: "/ja/premium-features/summarize-chat" },
              { text: "Chromeサイドパネル", link: "/ja/premium-features/side-panel" },
            ],
          },
          {
            text: "カスタムチャットボット",
            items: [
              { text: "はじめに", link: "/ja/custom-chatbots/" },
              { text: "OpenAI例", link: "/ja/custom-chatbots/openai" },
              { text: "Anyscale例", link: "/ja/custom-chatbots/anyscale" },
              { text: "Together.ai例", link: "/ja/custom-chatbots/together" },
              { text: "OpenRouter例", link: "/ja/custom-chatbots/openrouter" },
              { text: "Xinference例", link: "/ja/custom-chatbots/xinference" },
              { text: "Ollama例", link: "/ja/custom-chatbots/ollama" },
            ],
          },
          {
            text: "その他",
            items: [
              { text: "よくある質問", link: "/ja/miscellaneous/faq" },
              { text: "トラブルシューティング", link: "/ja/miscellaneous/troubleshooting" },
              { text: "デスクトップアプリ", link: "/ja/miscellaneous/desktop-app" },
              { text: "手動更新方法", link: "/ja/miscellaneous/update-manually" },
            ],
          },
        ],
      },
    },
  },

  themeConfig: {
    logo: "https://chathub.gg/logo.png",
    editLink: {
      pattern: 'https://github.com/chathub-dev/doc.chathub.gg/edit/main/docs/:path'
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/chathub-dev/chathub" },
    ],
  },
});
