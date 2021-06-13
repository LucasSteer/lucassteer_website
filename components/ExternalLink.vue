<template>
  <a
    :href="url"
    target="_blank"
    rel="noreferrer noopener"
    class="text-blue-base font-semibold hover:text-blue-highlight hover:underline focus:text-blue-highlight focus:underline"
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
