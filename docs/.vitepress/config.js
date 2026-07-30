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
  head: [
    // For standard .ico files
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/general/favicon.png' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-Q8B2Y8LJ8S'
      }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Q8B2Y8LJ8S');`
    ]
  ],
  transformHead({ pageData }) {
    const head = []

    const coverPath = pageData.frontmatter.image || '/general/photo.webp'
    const fullImageUrl = `https://timothy-daniel.com${coverPath}`

    head.push(['meta', { property: 'og:image', content: fullImageUrl }])
    head.push(['meta', { property: 'og:image:width', content: '1200' }])
    head.push(['meta', { property: 'og:image:height', content: '630' }])
    head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }])
    head.push(['meta', { name: 'twitter:image', content: fullImageUrl }])

    return head
  },
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
