<template>
  <a
    :href="url"
    class="font-bold tracking-wide underline-offset-2 text-green-base forced-colors:text-systemColors-Highlight forced-colors:hover:text-systemColors-Highlight forced-colors:focus:text-systemColors-Highlight hover:text-green-highlight underline hover:decoration-2 focus:text-green-highlight focus:decoration-2 dark:text-greenDarkMode-base dark:hover:text-greenDarkMode-highlight dark:focus:text-greenDarkMode-highlight"
    >{{ text }}</a
  >
</template>

<script>
export default {
  name: 'InternalLink',
  props: {
    url: {
      type: String,
      default: '/',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
