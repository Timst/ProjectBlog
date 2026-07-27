import { VPBTheme } from '@chunge16/vitepress-blogs-theme';
import CustomVPBHome from './components/CustomVPBHome.vue';
import './style.css';
import CustomVPBHomePost from './components/CustomVPBHomePost.vue';
import { usePosts } from './composables/usePosts.js';

export { usePosts } from './composables/usePosts.js';

export default {
  extends: VPBTheme,
  enhanceApp({ app, router, siteData }) {
    app.component('VPBHome', CustomVPBHome)
    app.component('VPBHomePost', CustomVPBHomePost)
  }
};
