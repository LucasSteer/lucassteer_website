<template>
  <NuxtLayout>
    <div class="flex flex-col justify-around text-center">
      <h1 class="pb-10 tracking-wide">
        <span
          v-if="error.statusCode == '404'"
          class="text-2xl tablet:text-3xl desktop:text-4xl text-green-baseLarge dark:text-greenDarkMode-baseLarge"
        >
          Page not found ☹
        </span>
        <span
          v-else
          class="text-2xl tablet:text-3xl desktop:text-4xl text-green-baseLarge dark:text-greenDarkMode-baseLarge"
        >
          An error occurred 😕
        </span>
      </h1>
      <p class="text-lg tablet:text-xl desktop:text-2xl">
        Use the navigation menu to find your way back!
      </p>
      <img
        :src="`/icons/${themeStore.theme}Favicon.svg`"
        alt=""
        class="mx-auto mt-56 opacity-50 forced-colors:opacity-100 h-64 tablet:h-72 desktop:h-80"
      />
    </div>
  </NuxtLayout>
</template>

<script>
import { useThemeStore } from '@/stores/theme';
import { mapStores } from 'pinia';

export default {
  name: 'ErrorPage',
  props: ['error'],
  layout: 'error',
  computed: {
    ...mapStores(useThemeStore),
  },
};
</script>
