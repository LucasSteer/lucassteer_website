<template>
  <div
    class="desktop:w-7/12 shadow-card rounded-lg"
    :class="{
      'desktop:ml-auto': !isOdd,
      'pb-4': isExpanded,
    }"
  >
    <h2>
      <button
        class="group w-full text-left cursor-pointer px-4 hover:bg-grey-50 focus:bg-grey-50 active:bg-grey-100"
        @click="isExpanded = !isExpanded"
        :aria-controls="accordionId"
        :aria-expanded="isExpanded ? 'true' : 'false'"
      >
        <div
          class="flex flex-row items-center justify-between border-grey-400 px-2 py-4 tablet:px-8"
        >
          <div class="flex flex-row items-center">
            <img
              :src="imgSrc"
              alt=""
              height="64"
              width="64"
              class="min-w-16 h-16 min-h-16 w-16 rounded-full border-2 border-grey-700 object-scale-down"
            />
            <div class="ml-4 tablet:ml-8">
              <p
                class="text-2xl tracking-widest font-semibold text-green-baseLarge"
              >
                {{ company }}
                <span
                  class="block text-base font-semibold tracking-wide text-green-base tablet:text-lg"
                  >{{ ecRole }}</span
                >
              </p>
            </div>
          </div>
          <svg
            viewBox="0 0 100 100"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="8"
            width="50"
            class="stroke-grey-500 group-hover:stroke-green-highlight group-focus:stroke-green-highlight transition-all motion-reduce:transition-none duration-500 ease-in-out"
            :class="{ 'rotate-180': isExpanded }"
            aria-hidden="true"
          >
            <path d="m 10 30 l 40 40 l 40 -40" />
          </svg>
        </div>
        <div
          class="w-auto scale-x-0 mx-4 transform-gpu border-b-2 border-grey-700 transition-transform motion-reduce:transition-none duration-300"
          :class="{ 'scale-x-100': isExpanded }"
        ></div>
      </button>
    </h2>
    <AccordionWrapper :id="accordionId">
      <div class="px-4" v-if="isExpanded">
        <div
          class="mx-4 mt-4 flex flex-col gap-2 tablet:flex-row tablet:items-center tablet:justify-between"
        >
          <timeline-badge :start="start" :end="end" />
          <div class="flex flex-row items-center gap-1 tablet:gap-2">
            <svg
              viewBox="0 0 100 100"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="6"
              class="stroke-green-highlight h-7 tablet:h-8"
              role="img"
            >
              <title>Location Icon</title>
              <path d="m 50 10 c -30 0 -40 40 0 80 c 40 -40 30 -80 0 -80" />
              <circle cx="50" cy="40" r="10" />
            </svg>
            <p class="text-base tablet:text-lg">{{ location }}</p>
          </div>
        </div>
        <div class="pt-4 tablet:px-4 tablet:pt-6 tablet:pb-4">
          <slot />
        </div>
      </div>
    </AccordionWrapper>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    company: {
      type: String,
      default: '',
    },
    imgSrc: {
      type: String,
      default: '',
    },
    ecRole: {
      type: String,
      default: '',
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
    },
    location: {
      type: String,
      default: '',
    },
    isOdd: {
      type: Boolean,
      default: false,
    },
    startExpanded: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isExpanded: this.startExpanded,
      accordionId: `${this.company}-${this.ecRole}`.replace(/\s/g, ''),
    };
  },
};
</script>
