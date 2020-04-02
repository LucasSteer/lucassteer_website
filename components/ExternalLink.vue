<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    class="text-blue-800 font-semibold hover:text-blue-400 hover:underline"
  >
    <slot />
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
