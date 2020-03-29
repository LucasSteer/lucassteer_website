<template>
  <a
    :href="url"
    class="text-green-800 font-semibold hover:text-green-400 hover:underline"
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
