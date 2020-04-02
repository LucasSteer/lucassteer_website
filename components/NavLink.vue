<template>
  <a
    class="transition duration-200 ease-in-out hover:text-green-400 font-semibold tablet:text-xl tablet:tracking-widest"
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
      default: '/',
    },
    text: {
      type: String,
      default: '',
    },
  },
};
</script>
