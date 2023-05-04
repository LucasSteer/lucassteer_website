<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    class="font-bold tracking-wide underline-offset-2 text-blue-base forced-colors:text-systemColors-LinkText forced-colors:hover:text-systemColors-LinkText forced-colors:focus:text-systemColors-LinkText hover:text-blue-highlight underline hover:decoration-2 focus:text-blue-highlight focus:decoration-2 dark:text-blueDarkMode-base dark:hover:text-blueDarkMode-highlight dark:focus:text-blueDarkMode-highlight"
  >
    <slot /><span class="sr-only">Opens in a new window</span>
  </a>
</template>

<script>
export default {
  name: 'ExternalLink',
  props: {
    url: {
      type: String,
      default: '/',
    },
  },
};
</script>
