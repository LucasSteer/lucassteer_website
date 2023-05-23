<template>
  <NuxtLayout>
    <div class="flex flex-col justify-between gap-4">
      <PageHeader text="Page Not Found" v-if="error.statusCode == '404'" />
      <PageHeader text="An Error Occurred" v-else />
      <p class="text-xl tablet:text-3xl desktop:text-4xl">Sorry about that ☹</p>
      <p class="text-base tablet:text-2xl desktop:text-3xl">
        You can use the navigation menu to find your way back!
      </p>
    </div>
    <img
      :src="`/icons/${themeStore.theme}Favicon.svg`"
      alt=""
      class="mx-auto my-8 opacity-50 forced-colors:opacity-100 h-64 tablet:h-72 desktop:h-80"
    />
  </NuxtLayout>
</template>

<script setup>
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();

defineProps({
  error: Object,
});

definePageMeta({
  layout: 'error',
});

useHead({
  title: 'Page Not Found | Lucas Steer',
});
</script>
