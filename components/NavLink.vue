<template>
  <a
    class="transition duration-200 ease-in-out font-semibold tablet:text-xl tablet:tracking-widest"
    :class="{
      'text-green-baseLarge': !url,
      'hover:text-green-highlightLarge': url,
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
      default: undefined,
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
