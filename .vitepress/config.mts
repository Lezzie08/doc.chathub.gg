import { defineConfig } from "vitepress";

export default defineConfig({
  title: "ChatHub",
  description: "ChatHub user guide",
  cleanUrls: true,
  lastUpdated: true,

  srcDir: './docs',

  sitemap: {
    hostname: "https://doc.chathub.gg",
  },

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

  themeConfig: {
    logo: "https://chathub.gg/logo.png",

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
          { text: "Introduction", link: "/cloud/" },
        ],
      },
      {
        text: "Premium Features",
        items: [
          { text: "Web Access", link: "/premium-features/web-access" },
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
          { text: "Mistral AI Example", link: "/custom-chatbots/mistral" },
          { text: "OpenRouter Example", link: "/custom-chatbots/openrouter" },
          { text: "Xinference Example", link: "/custom-chatbots/xinference" },
          { text: "Ollama Example", link: "/custom-chatbots/ollama" },
        ],
      },
      {
        text: "Miscellaneous",
        items: [
          {
            text: "FAQ",
            link: "/miscellaneous/faq",
          },
          {
            text: "Troubleshooting",
            link: "/miscellaneous/troubleshooting",
          },
          {
            text: "Desktop App",
            link: "/miscellaneous/desktop-app",
          },
          {
            text: "How to update manually",
            link: "/miscellaneous/update-manually",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/chathub-dev/chathub" },
    ],
  },
});
