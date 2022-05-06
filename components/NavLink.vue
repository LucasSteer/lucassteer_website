<template>
  <a
    class="font-semibold transition duration-200 ease-in-out hover:text-green-highlightLarge hover:underline focus:text-green-highlightLarge focus:underline tablet:text-xl tablet:tracking-widest"
    :class="{ 'text-green-baseLarge': isCurrentPage }"
    :href="url"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'NavLink',
  props: {
    url: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isCurrentPage: this.$route.path === this.url,
    };
  },
};
</script>
