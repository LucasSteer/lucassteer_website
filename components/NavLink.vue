<template>
  <a
    class="text-green-600 hover:text-green-400 tablet:text-xl tablet:tracking-widest"
    :href="url"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
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
