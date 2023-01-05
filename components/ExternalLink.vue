<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    class="font-bold tracking-wide text-blue-base hover:text-blue-highlight hover:underline focus:text-blue-highlight focus:underline dark:text-blueDarkMode-base dark:hover:text-blueDarkMode-highlight dark:focus:text-blueDarkMode-highlight"
  >
    <slot /><span class="sr-only">Opens in a new window.</span>
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
