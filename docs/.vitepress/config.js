import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';
import { processData } from '@chunge16/vitepress-blogs-theme/config';
import { enUS, zhCN } from 'date-fns/locale';

export default defineConfig({
  base: "/",
  title: "Tim's Projects",
  description: "A place for me to yap about things I've been up to",
  lang: "en-US",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: '/' },
      { text: "Who's this guy", link: '/bio' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/timst' }
    ],

    blog: {
      defaultAuthor: "Timothy Daniel",
      categoryIcons: {
          article: 'i-[carbon--notebook]',
          tutorial: 'i-[carbon--book]',
          document: 'i-[carbon--document]',
      },
      tagIcons: {
        github: 'i-[carbon--logo-github]',
        vue: 'i-[logos--vue]',
        javascript: 'i-[logos--javascript]',
        'web development': 'i-[carbon--development]',
        html: 'i-[logos--html-5]',
        git: 'i-[logos--git-icon]',
        vite: 'i-[logos--vitejs]',
        locked: 'i-[carbon--locked]',
        react: 'i-[logos--react]',
        blog: 'i-[carbon--blog]',
        comment: 'i-[carbon--add-comment]',
      },
      dateConfig: {
        format: "yyyy-MM-dd",
        locale: enUS
      },
      giscus: {
      defaultEnable: false
    }
    },

    search: {
      provider: 'local',
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ['@chunge16/vitepress-blogs-theme'],
    },
    ssr: {
      noExternal: ['@chunge16/vitepress-blogs-theme']
    },
  },

  async transformPageData(pageData, ctx) {
    await processData(pageData, ctx);
  },
});
