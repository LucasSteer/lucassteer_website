<template>
  <section class="rounded-lg px-4 pb-4 shadow-card">
    <div class="border-b-2 border-grey-400 py-2 tablet:py-3 tablet:px-4">
      <h3 class="text-xl font-semibold tracking-wide text-green-baseLarge">
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
import TimelineBadge from './TimelineBadge.vue';

export default {
  name: 'PromotionCard',
  components: {
    TimelineBadge,
  },
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
