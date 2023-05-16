import gitPlugin from "@vuepress/plugin-git";
import { defaultTheme, defineUserConfig } from "vuepress";

export default defineUserConfig({
  lang: "en-US",
  title: "Hello VuePress",
  description: "Just playing around",
  // base: "/edgetunnel/",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "zh-CN",
      title: "Edge Tunnel",
      description: "把 V2ray 集成到 edge/serverless 环境中。",
    },
    "/en-US/": {
      lang: "en-US",
      title: "Edge Tunnel",
      description: "Running V2ray inside edge/serverless runtime",
    },
  },
  theme: defaultTheme({
    lastUpdated: true,
  }),
  plugins: [
    gitPlugin({
      contributors: false,
    }),
  ],
});
