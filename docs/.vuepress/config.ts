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
      lang: "en-US",
      title: "Edge Tunnel",
      description: "Running V2ray inside edge/serverless functions",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Edge Tunnel",
      description: "Running V2ray inside edge/serverless functions",
    },
  },
  theme: defaultTheme({
    lastUpdated: true,
  }),
});
