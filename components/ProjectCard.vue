<template>
  <section
    class="hover:scale-103 focus:scale-103 relative m-4 w-full transform overflow-hidden rounded-lg shadow-card transition duration-200 ease-in-out desktop:w-1/2"
  >
    <ExternalLink :url="link">
      <img
        :src="imgSrc"
        :alt="imgAlt"
        height="703"
        width="703"
        class="mx-auto h-full w-full"
      />
      <div
        class="min-h-1/6 desktop:min-h-1/6 absolute bottom-0 flex w-full flex-col justify-center bg-white p-2 tablet:py-4 tablet:px-8"
      >
        <h2
          class="text-xl tracking-widest text-green-baseLarge tablet:text-2xl desktop:text-4xl"
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
