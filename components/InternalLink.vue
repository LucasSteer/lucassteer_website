<template>
  <a
    :href="url"
    class="font-semibold text-green-base hover:text-green-highlight hover:underline focus:text-green-highlight focus:underline"
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
