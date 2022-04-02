import { UserPlugins } from "vuepress/config";

export default <UserPlugins>{
  sitemap: { hostname: "https://wiki.router86.com" },
  smplayer: {
    artplayer: {
      src: {
        playbackRate: true,
        whitelist: ["*"],
      },
    },
  },
  pangu: {},
  zooming: {
    selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
    options: {
      bgColor: "rgba(0,0,0,0.6)",
    },
  },

  "fulltext-search": {},
  "one-click-copy": {
    copySelector: [
      'div[class*="language-"] pre',
      'div[class*="aside-code"] aside',
    ],
    copyMessage: "复制成功",
    duration: 1000,
    showInMobile: false,
  },
  "vuepress-plugin-comment": {
    choosen: "gitalk",
    options: {
      id: "<%- frontmatter.commentid || frontmatter.permalink %>",
      title: "「Comment」<%- frontmatter.title %>",
      body: "<%- frontmatter.title %>：<%-window.location.origin %><%- frontmatter.to.path || window.location.pathname %>",
      clientID: "745792e3f1ab3df97461",
      clientSecret: "a76b00308473a406bb5a999597aa986a66288781",
      owner: "MonoLogueChi",
      repo: "wiki.router86.com-comments",
      admin: ["MonoLogueChi"],
      distractionFreeMode: false,
    },
  },
};
