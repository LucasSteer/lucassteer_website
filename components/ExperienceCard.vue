<template>
  <div
    class="desktop:w-7/12 shadow-card rounded-lg forced-colors:border-4 forced-colors:border-systemColors-ButtonBorder dark:shadow-none dark:border-4 dark:border-grey-400"
    :class="{
      'desktop:ml-auto': !isOdd,
      'pb-4': isExpanded,
    }"
  >
    <h2>
      <button
        class="group w-full text-left cursor-pointer px-4 rounded-t-lg hover:bg-grey-50 focus:bg-grey-50 active:bg-grey-100 dark:hover:bg-zinc-700 dark:focus:bg-zinc-700 dark:active:bg-zinc-600"
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
                class="text-2xl tracking-widest font-bold text-green-baseLarge dark:text-greenDarkMode-baseLarge"
              >
                {{ company }}
                <span
                  class="block text-base font-bold tracking-wider text-green-base dark:text-greenDarkMode-base tablet:text-lg"
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
            class="stroke-grey-500 forced-colors:stroke-systemColors-ButtonText dark:stroke-grey-300 group-hover:stroke-green-highlight forced-colors:group-hover:stroke-systemColors-Highlight dark:group-hover:stroke-greenDarkMode-base group-focus:stroke-green-highlight forced-colors:group-focus:stroke-systemColors-Highlight dark:group-focus:stroke-greenDarkMode-base transition-all motion-reduce:transition-none duration-300 ease-in-out"
            :class="{ 'rotate-180': isExpanded }"
            aria-hidden="true"
          >
            <path d="m 10 30 l 40 40 l 40 -40" />
          </svg>
        </div>
        <div
          class="w-auto scale-x-0 mx-4 transform-gpu border-b-2 border-grey-400 dark:border-grey-200 transition-transform motion-reduce:transition-none duration-300"
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
              class="stroke-green-highlight forced-colors:stroke-systemColors-Highlight dark:stroke-greenDarkMode-base h-7 tablet:h-8"
            >
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
