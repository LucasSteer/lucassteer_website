<template>
  <section
    class="w-full pt-2 pb-4 px-4 shadow-card rounded-lg desktop:w-7/12"
    :class="{ 'desktop:ml-auto': !isOdd }"
  >
    <h2>
      <ExternalLink
        :url="link"
        class="text-2xl tracking-widest text-blue-baseLarge hover:text-blue-highlightLarge focus:text-blue-highlightLarge"
        >{{ heading }}
      </ExternalLink>
    </h2>
    <div
      class="flex flex-row items-center border-b-2 border-grey-400 pt-2 pb-4 mb-2 tablet:py-4 tablet:mb-4"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="min-h-16 min-w-16 h-16 w-16 object-scale-down rounded-full border-grey-700 border-2 mx-2 tablet:mx-8"
      />
      <div class="ml-2 tablet:ml-0">
        <p class="text-base tablet:text-lg">
          {{ ecRole }}
        </p>
        <p class="text-sm tablet:text-base">
          {{ timeline }}
        </p>
      </div>
    </div>
    <slot />
  </section>
</template>

<script>
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  name: 'ExperienceCard',
  components: {
    ExternalLink,
  },
  props: {
    heading: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: '',
    },
    imgAlt: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '/',
    },
    ecRole: {
      type: String,
      default: '',
    },
    timeline: {
      type: String,
      default: '',
    },
    isOdd: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
