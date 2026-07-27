<script setup>
import { withBase } from 'vitepress';
import { VPBPostCategory } from '@chunge16/vitepress-blogs-theme'

defineProps({
  post: {
    type: Object,
    default: () => ({})
  }
});
</script>

<template>
  <article class="vpb-card flex h-full flex-col rounded-[1.5rem] p-5 sm:p-7">
    <div class="vpb-meta flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div class="flex flex-col items-start gap-2">
        <span class="font-['Neue_Haas_Grotesk_Display_Pro','Avenir_Next',sans-serif] text-[0.72rem] font-medium uppercase tracking-[0.16em] text-[color:var(--vpb-text-soft)] sm:text-[0.75rem] sm:tracking-[0.18em]">
          {{ post.date.since }}
        </span>
      </div>
    </div>
    <h2 class="min-h-24 mb-4 font-['Roboto',sans-serif] text-[1.85rem] leading-[1.06] tracking-[-0.045em] text-[color:var(--vpb-text-strong)] sm:text-[2.15rem]">
      <a :href="withBase(post.url)" class="vpb-link">{{ post.title }}</a>
    </h2>
    <img
      v-if="post.image"
      :src="withBase(post.image)"
      :alt="post.title"
      class="mb-5 max-h-100 w-full rounded-[1.25rem] object-cover"
    />
    <div class="vpb-prose mb-7 text-[0.97rem] sm:mb-8 sm:text-[1rem]" v-html="post.excerpt"></div>
    <div class="mt-auto flex flex-col items-start gap-4 border-t border-[color:var(--vpb-grid-line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
      <a :href="withBase(post.url)" class="vpb-accent-link">
        Continue reading
        <div class="i-[carbon--arrow-right] ml-2"></div>
      </a>
    </div>
  </article>
</template>

<style scoped>
h2 {
  margin-top: 0;
}
</style>
