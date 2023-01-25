<template>
  <section
    class="rounded-lg px-4 pb-4 shadow-card dark:shadow-none dark:border-2 dark:border-grey-400"
  >
    <div
      class="border-b-2 border-grey-400 dark:border-grey-200 y-2 px-2 tablet:py-3 tablet:px-4"
    >
      <h3
        class="text-xl font-bold tracking-wide text-green-baseLarge dark:text-greenDarkMode-baseLarge"
      >
        {{ ecRole }}
      </h3>
    </div>
    <div class="pt-2 px-2 tablet:px-4">
      <timeline-badge class="pb-2" :start="start" :end="end" compact />
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: 'PromotionCard',
  props: {
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
  },
};
</script>
