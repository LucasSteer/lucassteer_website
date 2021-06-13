<template>
  <a
    class="transition duration-200 ease-in-out font-semibold tablet:text-xl tablet:tracking-widest"
    :class="{ 'text-green-800': !url, 'hover:text-green-600': url }"
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
