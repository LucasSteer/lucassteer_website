<template>
  <section
    class="w-full shadow-card rounded-lg m-4 relative overflow-hidden transition duration-200 ease-in-out transform hover:scale-103 focus:scale-103 desktop:w-1/2"
  >
    <ExternalLink :url="link">
      <img :src="imgSrc" :alt="imgAlt" class="mx-auto w-full h-full" />
      <div
        class="w-full absolute bottom-0 p-2 bg-white flex flex-col justify-center min-h-1/6 tablet:py-4 tablet:px-8 desktop:min-h-1/6"
      >
        <h2
          class="text-xl text-green-baseLarge tracking-widest tablet:text-2xl desktop:text-4xl"
        >
          {{ title }}
        </h2>
        <h3
          class="text-sm tracking-widest tablet:text-base tablet:leading-8 desktop:text-xl"
        >
          {{ subtitle }}
        </h3>
      </div>
    </ExternalLink>
  </section>
</template>

<script>
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  name: 'ProjectCard',
  components: {
    ExternalLink,
  },
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
  },
};
</script>
