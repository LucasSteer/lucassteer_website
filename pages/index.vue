<template>
  <PageHeader text="About Me" />
  <div class="p-4 desktop:grid grid-cols-3 items-center gap-4">
    <div
      class="flex flex-row gap-[2vw] items-center justify-center tablet:gap-0 tablet:flex-col desktop:gap-4"
    >
      <img
        src="/headshot.jpg"
        alt="Headshot of Lucas Steer"
        class="h-[128px] w-[128px] rounded-full tablet:m-4 tablet:h-[160px] tablet:w-[160px] desktop:h-[384px] desktop:w-[384px]"
      />
      <div>
        <h2
          class="text-2xl text-center text-green-baseLarge dark:text-greenDarkMode-baseLarge font-bold tracking-widest tablet:text-4xl"
        >
          Lucas Steer
        </h2>
        <p
          class="text-center italic font-normal tracking-wider text-grey dark:text-white tablet:text-2xl"
        >
          He/Him
        </p>
      </div>
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
          <InlineLink url="myexperiences" class="tablet:text-lg"
            >my experiences</InlineLink
          >
          and
          <InlineLink url="myprojects" class="tablet:text-lg"
            >my projects</InlineLink
          >
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
          <InlineLink
            url="https://github.com/LucasSteer/lucassteer_website"
            class="tablet:text-lg"
            >GitHub repo</InlineLink
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
          <InlineLink
            url="https://www.linkedin.com/in/lucassteer/"
            class="tablet:text-lg"
            >LinkedIn</InlineLink
          >
          or email me directly at
          <InlineLink url="mailto:lucassteer@gmail.com" class="tablet:text-lg"
            >lucassteer@gmail.com</InlineLink
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
