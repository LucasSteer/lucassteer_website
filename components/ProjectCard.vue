<template>
  <section
    class="relative overflow-hidden rounded-lg shadow-card forced-colors:border-4 forced-colors:border-systemColors-ButtonBorder dark:shadow-none dark:border-4 dark:border-grey-400"
  >
    <ExternalLink
      :url="link"
      class="group text-grey dark:text-white hover:text-grey dark:hover:text-white hover:no-underline focus:text-grey dark:focus:text-white focus:no-underline"
    >
      <img :src="imgSrc" :alt="imgAlt" class="h-full w-full" />
      <div
        class="min-h-1/6 w-full absolute bottom-0 flex flex-col justify-center gap-2 bg-white dark:bg-zinc-800 forced-colors:group-hover:text-systemColors-SelectedItemText forced-colors:group-focus:text-systemColors-SelectedItemText forced-colors:group-active:text-systemColors-SelectedItemText forced-colors:group-hover:bg-systemColors-SelectedItem forced-colors:group-focus:bg-systemColors-SelectedItem forced-colors:group-active:bg-systemColors-SelectedItem group-hover:bg-grey-50 group-focus:bg-grey-50 group-active:bg-grey-100 dark:group-hover:bg-zinc-700 dark:group-focus:bg-zinc-700 dark:group-active:bg-zinc-600 px-4 pt-2 pb-8 tablet:px-8 tablet:pt-3 tablet:pb-10"
      >
        <h2
          class="text-xl decoration-2 underline-offset-4 underline group-hover:decoration-4 group-focus:decoration-4 tracking-widest text-green-baseLarge dark:text-greenDarkMode-baseLarge tablet:text-2xl desktop:text-4xl"
        >
          {{ title }}
        </h2>
        <h3
          class="text-sm tracking-wider tablet:text-base tablet:leading-8 desktop:text-xl"
        >
          {{ subtitle }}
        </h3>
        <div class="mt-4 flex flex-row flex-wrap gap-4">
          <span
            v-for="(tag, index) in tags"
            :key="index"
            class="rounded-md bg-primary-base forced-colors:border-2 forced-colors:border-systemColors-ButtonBorder dark:bg-primaryDarkMode-base font-normal forced-colors:group-hover:text-systemColors-SelectedItemText forced-colors:group-focus:text-systemColors-SelectedItemText forced-colors:group-active:text-systemColors-SelectedItemText forced-colors:group-hover:bg-systemColors-SelectedItem forced-colors:group-focus:bg-systemColors-SelectedItem forced-colors:group-active:bg-systemColors-SelectedItem dark:font-bold tracking-wide p-2 align-middle leading-4 text-white dark:text-grey tablet:text-lg tablet:leading-4 desktop:text-xl"
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
