<template>
  <div>
    <header
      class="h-16 bg-gray-100 border-b-4 border-green-500 flex flex-row items-center justify-between pr-2 pl-2 mb-2 tablet:pr-8 py-2"
    >
      <img
        src="favicon/favicon-310.png"
        alt="Lucas Steer's Logo"
        class="h-12 w-12 hidden tablet:block"
      />
      <nav class="w-full">
        <ul class="flex flex-row justify-around">
          <li>
            <NavLink url="/" text="About Me" />
          </li>
          <li>
            <NavLink url="myexperience" text="My Experience" />
          </li>
          <li>
            <NavLink url="myprojects" text="My Projects" />
          </li>
        </ul>
      </nav>
    </header>
    <div class="container flex flex-col justify-around">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavLink from '~/components/NavLink.vue';

require('@/assets/app.css'); // import all CSS

export default {
  components: {
    NavLink,
  },
};
</script>
