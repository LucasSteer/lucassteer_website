<template>
  <section
    class="group relative cursor-pointer overflow-hidden rounded-lg shadow-card forced-colors:border-4 forced-colors:border-systemColors-ButtonBorder dark:shadow-none dark:border-4 dark:border-grey-400"
    @click="openLink($event, link)"
  >
    <img :src="imgSrc" :alt="imgAlt" />
    <div
      class="min-h-1/6 w-full tablet:absolute tablet:bottom-0 bg-white dark:bg-zinc-800 forced-colors:group-hover:text-systemColors-SelectedItemText forced-colors:focus-within:text-systemColors-SelectedItemText forced-colors:group-active:text-systemColors-SelectedItemText forced-colors:group-hover:bg-systemColors-SelectedItem forced-colors:focus-within:bg-systemColors-SelectedItem forced-colors:group-active:bg-systemColors-SelectedItem group-hover:bg-grey-50 focus-within:bg-grey-50 group-active:bg-grey-100 dark:group-hover:bg-zinc-700 dark:focus-within:bg-zinc-700 dark:group-active:bg-zinc-600 px-4 pt-2 pb-8 tablet:px-8 tablet:pt-3 tablet:pb-10"
    >
      <InlineLink :url="link" class="group/link no-underline">
        <h2
          ref="cardTitle"
          class="inline text-xl underline decoration-2 underline-offset-4 group-hover:decoration-4 group-focus/link:decoration-4 tracking-widest text-blue-baseLarge dark:text-blueDarkMode-baseLarge tablet:text-3xl desktop:text-4xl"
        >
          {{ title }}
        </h2>
      </InlineLink>
      <p
        class="text-sm tracking-wider my-2 tablet:text-base tablet:leading-8 desktop:text-xl"
      >
        {{ subtitle }}
      </p>
      <ul class="mt-4 flex flex-row flex-wrap gap-4">
        <li
          v-for="(tag, index) in tags"
          :key="index"
          class="rounded-md bg-primary-base forced-colors:border-2 forced-colors:border-systemColors-ButtonBorder dark:bg-primaryDarkMode-base font-normal forced-colors:group-focus:text-systemColors-SelectedItemText forced-colors:group-focus:bg-systemColors-SelectedItem dark:font-bold tracking-wide p-2 align-middle leading-4 text-white dark:text-grey tablet:text-lg tablet:leading-4 desktop:text-xl"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
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
  methods: {
    openLink(event, url) {
      if (this.$refs.cardTitle === event.target) return;

      event.preventDefault();
      location.href = url;
    },
  },
};
</script>
