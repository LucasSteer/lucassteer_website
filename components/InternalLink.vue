<template>
  <a
    :href="url"
    class="font-bold tracking-wide text-green-base hover:text-green-highlight hover:underline focus:text-green-highlight focus:underline dark:text-greenDarkMode-base dark:hover:text-greenDarkMode-highlight dark:focus:text-greenDarkMode-highlight"
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
