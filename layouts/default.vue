<template>
  <div class="flex flex-col justify-between h-screen">
    <header
      class="min-h-16 border-b-2 border-grey-900 flex flex-row items-center justify-between px-2 tablet:pr-8 py-2"
    >
      <img
        src="/favicon/favicon-310.png"
        alt="Lucas Steer's Logo"
        class="h-12 w-12 hidden tablet:block"
      />
      <nav class="w-full">
        <ul class="flex flex-row justify-around">
          <li>
            <NavLink url="/" text="About Me" />
          </li>
          <li>
            <NavLink url="/myexperiences" text="My Experiences" />
          </li>
          <li>
            <NavLink url="/myprojects" text="My Projects" />
          </li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto my-4">
      <nuxt />
    </div>
    <footer
      class="min-h-16 border-t-2 border-grey-900 px-4 pt-2 tablet:flex tablet:flex-row tablet:justify-between tablet:items-center tablet:pt-0"
    >
      <p class="text-xs mb-1">
        © 2021 Lucas Steer. All Rights Reserved.
      </p>
      <p class="text-xs relative">
        Contact:
        <ExternalLink url="mailto:lucassteer@gmail.com" class="text-xs"
          >lucassteer@gmail.com</ExternalLink
        >
      </p>
    </footer>
  </div>
</template>

<script>
import NavLink from '~/components/NavLink.vue';
import ExternalLink from '~/components/ExternalLink.vue';

require('@/assets/app.css'); // import all CSS

export default {
  components: {
    NavLink,
    ExternalLink,
  },
};
</script>
