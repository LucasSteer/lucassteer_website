<template>
  <a
    class="transition duration-200 ease-in-out hover:text-green-400 font-semibold tablet:text-xl tablet:tracking-widest"
    :class="{ 'text-green-400': !url }"
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
