<template>
  <a
    :href="url"
    class="text-green-base font-semibold hover:text-green-highlight hover:underline"
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
