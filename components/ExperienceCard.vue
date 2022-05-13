<template>
  <section
    class="w-full rounded-lg px-4 pt-2 pb-4 shadow-card desktop:w-7/12"
    :class="{ 'desktop:ml-auto': !isOdd }"
  >
    <div
      class="mb-2 flex flex-row items-center border-b-2 border-grey-400 pt-2 pb-4 tablet:mb-4 tablet:py-4"
    >
      <img
        :src="imgSrc"
        :alt="imgAlt"
        height="64"
        width="64"
        class="min-w-16 mx-2 h-16 min-h-16 w-16 rounded-full border-2 border-grey-700 object-scale-down tablet:mx-8"
      />
      <div class="ml-2 tablet:ml-0">
        <h2>
          <ExternalLink
            :url="link"
            class="text-2xl tracking-widest text-blue-baseLarge hover:text-blue-highlightLarge focus:text-blue-highlightLarge"
            >{{ heading }}
          </ExternalLink>
        </h2>
        <p
          class="text-base font-semibold tracking-wide text-green-base tablet:text-lg"
        >
          {{ ecRole }}
        </p>
        <p class="text-sm tablet:text-base">{{ timeline }}</p>
        <p class="text-sm tablet:text-base">{{ location }}</p>
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
    location: {
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
