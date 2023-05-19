<template>
  <div class="p-4 desktop:grid grid-cols-3 items-center gap-4">
    <div
      class="flex flex-row gap-[2vw] items-center justify-center tablet:gap-0 tablet:flex-col desktop:gap-4"
    >
      <img
        src="/headshot.jpg"
        alt="Headshot of Lucas Steer"
        class="h-[128px] w-[128px] rounded-full tablet:m-4 tablet:h-[160px] tablet:w-[160px] desktop:h-[384px] desktop:w-[384px]"
      />
      <h1
        class="text-2xl text-center text-green-baseLarge dark:text-greenDarkMode-baseLarge font-bold tracking-widest tablet:text-4xl"
      >
        Lucas Steer
        <i
          class="block text-center text-grey dark:text-white font-normal tracking-wider tablet:text-2xl"
          >He/Him</i
        >
      </h1>
    </div>
    <section class="col-span-2">
      <div
        class="my-4 tablet:m-4 p-4 shadow-card rounded-lg forced-colors:border-4 forced-colors:border-systemColors-ButtonBorder dark:shadow-none dark:border-4 dark:border-grey-400"
      >
        <h2
          class="mb-2 text-lg font-bold tracking-wider text-green-base dark:text-greenDarkMode-base tablet:text-xl"
        >
          Full-stack software engineer
        </h2>
        <p class="tablet:text-lg">
          ... who's always looking for unique and exciting challenges! I pride
          myself in being able to solve problems across the stack and
          communicate solutions clearly for any audience.
        </p>
        <p class="pt-4 tablet:text-lg">
          Check out
          <InternalLink
            url="myexperiences"
            text="my experiences"
            class="tablet:text-lg"
          />
          and
          <InternalLink
            url="myprojects"
            text="my projects"
            class="tablet:text-lg"
          />
          to learn more about what I've done and the new things that I'm
          learning and working on!
        </p>
      </div>
      <div
        class="my-4 tablet:m-4 p-4 shadow-card rounded-lg forced-colors:border-4 forced-colors:border-systemColors-ButtonBorder dark:shadow-none dark:border-4 dark:border-grey-400"
      >
        <h2
          class="mb-2 text-lg font-bold tracking-wider text-green-base dark:text-greenDarkMode-base tablet:text-xl"
        >
          Passionate about web accessibility
        </h2>
        <p class="tablet:text-lg">
          ... and its ability to bring more equitable access to everyone. I
          strive to have accessibility best practices be a core part of both my
          professional and personal work.
        </p>
        <p class="pt-4 tablet:text-lg">
          If you notice any issues with this site, whether they're related to
          accessibility or not, feel free to create an issue on this project's
          <ExternalLink
            url="https://github.com/LucasSteer/lucassteer_website"
            class="tablet:text-lg"
            >GitHub repo</ExternalLink
          >!
        </p>
      </div>
      <div
        class="my-4 tablet:m-4 p-4 shadow-card rounded-lg forced-colors:border-4 forced-colors:border-systemColors-ButtonBorder dark:shadow-none dark:border-4 dark:border-grey-400"
      >
        <h2
          class="mb-2 text-lg font-bold tracking-wider text-green-base dark:text-greenDarkMode-base tablet:text-xl"
        >
          Connect with me
        </h2>
        <p class="tablet:text-lg">
          ... on
          <ExternalLink
            url="https://www.linkedin.com/in/lucassteer/"
            text="LinkedIn"
            class="tablet:text-lg"
            >LinkedIn</ExternalLink
          >
          or email me directly at
          <ExternalLink
            url="mailto:lucassteer@gmail.com"
            text="lucassteer@gmail.com"
            class="tablet:text-lg"
            >lucassteer@gmail.com</ExternalLink
          >.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About Me | Lucas Steer',
  meta: [
    {
      name: 'description',
      content:
        'The home page for Lucas Steer, a Full-Stack Software Engineer based out of Toronto, Canada.',
    },
  ],
});
</script>
