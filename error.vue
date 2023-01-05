<template>
  <NuxtLayout>
    <main class="flex flex-col justify-around text-center">
      <h1 class="pb-10 tracking-wide">
        <span
          v-if="error.statusCode == '404'"
          class="text-2xl tablet:text-3xl desktop:text-4xl text-green-baseLarge dark:text-greenDarkMode-baseLarge"
        >
          Page not found ☹
        </span>
        <span
          v-else
          class="text-2xl tablet:text-3xl desktop:text-4xl text-green-baseLarge dark:text-greenDarkMode-baseLarge"
        >
          An error occurred 😕
        </span>
      </h1>
      <p class="text-lg tablet:text-xl desktop:text-2xl">
        Use the navigation bar to find your way back!
      </p>
      <img
        src="/favicon/favicon-310.png"
        alt=""
        class="mx-auto mt-56 opacity-25"
      />
    </main>
  </NuxtLayout>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
};
</script>
