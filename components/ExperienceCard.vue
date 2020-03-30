<template>
  <section
    class="w-full pt-2 pb-4 px-4 shadow-card rounded-lg desktop:w-7/12"
    :class="{ 'desktop:ml-auto': !isOdd }"
  >
    <h2>
      <ExternalLink
        :url="link"
        :text="heading"
        class="text-2xl tracking-widest text-orange-500"
      />
    </h2>
    <div
      class="flex flex-row border-b-2 border-gray-400 pt-2 pb-4 mb-2 tablet:py-4 tablet:mb-4"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="min-h-16 min-w-16 h-16 w-16 object-scale-down rounded-full border-gray-700 border-2 mx-2 tablet:mx-8"
      />
      <div class="ml-2 tablet:ml-0">
        <p class="text-sm text-gray-700 tablet:text-lg">
          {{ ecRole }}
        </p>
        <p class="text-xs text-gray-700 tablet:text-base">
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
      default: '',
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
