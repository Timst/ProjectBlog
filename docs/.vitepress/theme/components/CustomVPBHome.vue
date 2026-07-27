<script setup>
import { useData } from 'vitepress';
import { usePosts } from '../composables/usePosts.js';
import CustomVPBHomePost from './CustomVPBHomePost.vue';

const { posts } = usePosts();
const { theme } = useData();
</script>

<template>
  <section class="vpb-shell mx-auto">
      <div class="grid gap-5 xl:grid-cols-2 xl:gap-6">
        <div v-for="post of posts" :key="post.url">
          <CustomVPBHomePost :post="post" />
        </div>
      </div>
  </section>
</template>

