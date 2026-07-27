import { createContentLoader } from 'vitepress';
import { transformPosts } from './post-utils.js';

function getBlogConfig() {
  return globalThis?.VITEPRESS_CONFIG?.site?.themeConfig?.blog ?? {};
}

const blogConfig = getBlogConfig();
const pattern = `${blogConfig?.postsPath ?? 'blog/posts'}/**/*.md`;

export default createContentLoader(pattern, {
  excerpt: true,
  transform(raw) {
    return transformPosts(raw, blogConfig);
  },
});
