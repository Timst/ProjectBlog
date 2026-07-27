import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { data as posts } from './posts.data.js';

function normalizePath(path) {
  const decoded = decodeURI(path ?? '');
  const withoutHtml = decoded.replace(/\.html$/, '');
  const withoutIndex = withoutHtml.replace(/\/index$/, '');

  return withoutIndex.replace(/\/$/, '') || '/';
}

function findEntryIndex(entries, currentPath) {
  const normalizedCurrentPath = normalizePath(currentPath);

  return entries.findIndex((entry) => normalizePath(entry?.url) === normalizedCurrentPath);
}

function resolveAdjacentEntries(entries, currentPath) {
  const currentIndex = findEntryIndex(entries, currentPath);

  return {
    currentIndex,
    current: currentIndex >= 0 ? entries[currentIndex] : null,
    next: currentIndex > 0 ? entries[currentIndex - 1] : null,
    prev: currentIndex >= 0 ? entries[currentIndex + 1] ?? null : null,
  };
}

export function usePosts() {
  const route = useRoute();
  const path = computed(() => route.path);
  const adjacentPosts = computed(() => resolveAdjacentEntries(posts, route.path));
  const post = computed(() => adjacentPosts.value.current);
  const nextPost = computed(() => adjacentPosts.value.next);
  const prevPost = computed(() => adjacentPosts.value.prev);

  return { posts, post, nextPost, prevPost, path };
}
