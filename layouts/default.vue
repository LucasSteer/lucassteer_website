<template>
  <div class="flex h-screen flex-col justify-between">
    <header
      class="flex min-h-16 flex-row items-center justify-between border-b-2 border-grey-900 px-2 py-2 tablet:min-h-initial tablet:pr-8"
    >
      <img
        src="/favicon/favicon-57.png"
        alt="Lucas Steer's Logo"
        height="48"
        width="48"
        class="hidden h-12 w-12 tablet:block"
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
    <div class="container mx-auto">
      <nuxt />
    </div>
    <footer
      class="min-h-16 border-t-2 border-grey-900 px-4 pt-2 tablet:flex tablet:flex-row tablet:items-center tablet:justify-between tablet:pt-0"
    >
      <p class="mb-1 text-xs">© 2022 Lucas Steer. All Rights Reserved.</p>
      <p class="relative text-xs">
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
  name: 'DefaultLayout',
  components: {
    NavLink,
    ExternalLink,
  },
};
</script>
