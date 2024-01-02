<template>
  <h1
    class="text-3xl tablet:text-5xl font-bold tracking-wider w-fit pr-10 tablet:pr-0 tablet:w-2/3 pl-2 py-4 my-4 border-b-2 border-grey-900 dark:border-grey-400 desktop:px-4"
  >
    {{ text }}
  </h1>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    text: {
      type: String,
    },
  },
};
</script>
