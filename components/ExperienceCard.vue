<template>
  <section
    class="group w-full cursor-pointer rounded-lg px-4 pt-2 pb-2 shadow-card hover:bg-grey-50 focus:bg-grey-50 active:bg-grey-100 desktop:w-7/12"
    :class="{
      'desktop:ml-auto': !isOdd,
      'pb-4': isExpanded,
    }"
    @click="isExpanded = !isExpanded"
  >
    <div
      class="flex flex-row justify-between border-grey-400 px-2 pt-2 tablet:px-8 tablet:py-4"
    >
      <div class="flex flex-row items-center">
        <img
          :src="imgSrc"
          :alt="imgAlt"
          height="64"
          width="64"
          class="min-w-16 h-16 min-h-16 w-16 rounded-full border-2 border-grey-700 object-scale-down"
        />
        <div class="ml-2 tablet:ml-8">
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
          <p class="text-sm tablet:text-base">
            {{ location }}
          </p>
        </div>
      </div>

      <div
        class="h-16 w-16 select-none rounded-full text-center align-top transition-all duration-500 ease-in-out"
        :class="{ 'rotate-180': isExpanded }"
      >
        <p
          class="text-6xl text-grey-500 group-hover:text-green-highlight group-focus:text-green-highlight"
        >
          ˅
        </p>
      </div>
    </div>
    <div
      class="w-auto scale-x-0 transform-gpu border-b-2 border-grey-700 transition-transform duration-300"
      :class="{ 'scale-x-100': isExpanded }"
    ></div>
    <AccordionWrapper>
      <slot v-if="isExpanded" />
    </AccordionWrapper>
  </section>
</template>

<script>
import ExternalLink from '~/components/ExternalLink.vue';
import AccordionWrapper from '~/components/AccordionWrapper.vue';

export default {
  name: 'ExperienceCard',
  components: {
    ExternalLink,
    AccordionWrapper,
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
  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>
