<template>
  <div class="flex flex-col h-screen min-w-[360px] justify-between px-4">
    <a class="sr-only" href="#maincontent">Skip to main content</a>
    <header
      class="grid items-center grid-cols-8 desktop:grid-cols-8 place-items-center border-b-2 border-grey-900 dark:border-grey-400 py-4 desktop:px-4"
    >
      <NavMenu class="w-full col-span-3" />
      <img
        :src="`/icons/${themeStore.theme}Favicon.svg`"
        alt=""
        class="w-10 col-span-2 tablet:hidden"
      />
      <img
        :src="`/logos/LucasSteerLogo_${themeStore.theme}Mode.svg`"
        alt="Lucas Steer logo"
        class="hidden col-span-2 tablet:w-72 tablet:block desktop:col-start-auto"
      />
      <ThemeSwitcher
        class="justify-self-end col-span-3 desktop:col-span-3 desktop:col-start-auto desktop:pr-1"
      />
    </header>
    <main id="maincontent" class="container mx-auto">
      <slot />
    </main>
    <footer
      class="min-h-16 border-t-2 border-grey-900 dark:border-grey-400 px-4 pt-2 tablet:flex tablet:flex-row tablet:items-center tablet:justify-between tablet:pt-0"
    >
      <p class="mb-1 text-sm">© 2024 Lucas Steer. All Rights Reserved.</p>
      <p class="relative text-sm">
        Contact:
        <InlineLink url="mailto:lucassteer@gmail.com" class="text-sm"
          >lucassteer@gmail.com</InlineLink
        >
      </p>
    </footer>
  </div>
</template>

<script>
import { useThemeStore } from '@/stores/theme';
import { mapStores } from 'pinia';

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapStores(useThemeStore),
  },
};
</script>
