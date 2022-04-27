<template>
  <main class="text-center">
    <h1 class="tracking-wide pb-10">
      <span
        v-if="error.statusCode === 404"
        class="text-6xl text-green-baseLarge"
      >
        Page not found
      </span>
      <span v-else class="text-6xl text-green-baseLarge">
        An error occurred
      </span>
    </h1>
    <p class="text-xl">Use the navigation bar to find your way back!</p>
    <img
      src="/favicon/favicon-310.png"
      alt=""
      class="opacity-25 mx-auto mt-56"
    />
  </main>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
};
</script>
