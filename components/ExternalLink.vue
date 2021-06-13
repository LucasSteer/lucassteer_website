<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    class="text-blue-base font-semibold hover:text-blue-highlight hover:underline"
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
