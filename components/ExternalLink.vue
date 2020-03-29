<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    class="text-blue-800 font-semibold hover:text-blue-400 hover:underline"
    >{{ text }}</a
  >
</template>

<script>
export default {
  name: 'ExternalLink',
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
