<template>
  <section
    class="transform motion-safe:transition-transform duration-200 ease-in-out overflow-hidden rounded-lg shadow-card dark:shadow-none dark:border-[3px] dark:border-grey-400 motion-safe:hover:scale-103 motion-safe:focus:scale-103"
  >
    <ExternalLink
      :url="link"
      class="text-grey dark:text-white hover:text-grey dark:hover:text-white hover:no-underline focus:text-grey dark:focus:text-white focus:no-underline"
    >
      <img :src="imgSrc" :alt="imgAlt" class="h-full w-full" />
      <div
        class="min-h-1/6 absolute bottom-0 flex w-full flex-col justify-center gap-2 bg-white dark:bg-zinc-800 px-4 pt-2 pb-8 tablet:px-8 tablet:pt-3 tablet:pb-10"
      >
        <h2
          class="text-xl tracking-widest text-green-baseLarge dark:text-greenDarkMode-baseLarge tablet:text-2xl desktop:text-4xl"
        >
          {{ title }}
        </h2>
        <h3
          class="text-sm tracking-wider tablet:text-base tablet:leading-8 desktop:text-xl"
        >
          {{ subtitle }}
        </h3>
        <div class="mt-4 flex flex-row gap-4">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="rounded-md bg-primary-base font-normal tracking-wide p-2 align-middle leading-4 text-white tablet:text-lg tablet:leading-4 desktop:text-xl"
            >{{ tag }}</span
          >
        </div>
      </div>
    </ExternalLink>
  </section>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: '/',
    },
    imgAlt: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '/',
    },
    tags: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
};
</script>
