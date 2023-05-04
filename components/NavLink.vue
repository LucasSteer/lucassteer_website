<template>
  <a
    class="font-bold underline decoration-2 decoration-transparent underline-offset-4 transition duration-300 ease-in-out forced-colors:transition-none forced-colors:text-systemColors-LinkText forced-colors:hover:text-systemColors-LinkText forced-colors:focus:text-systemColors-LinkText hover:text-green-highlightLarge dark:hover:text-greenDarkMode-highlightLarge hover:decoration-inherit hover:decoration-4 focus:text-green-highlightLarge dark:focus:text-greenDarkMode-highlightLarge focus:decoration-inherit focus:decoration-4 text-2xl tablet:text-3xl tablet:tracking-wider desktop:text-xl"
    :class="{
      'text-green-baseLarge decoration-inherit forced-colors:text-systemColors-Highlight dark:text-greenDarkMode-baseLarge':
        isCurrentPage,
    }"
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
