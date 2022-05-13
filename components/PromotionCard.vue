<template>
  <section class="rounded-lg px-4 pt-2 pb-4 shadow-card">
    <div class="border-b-2 border-grey-400 pt-2 pb-4 tablet:mb-4 tablet:pb-4">
      <h3 class="text-xl font-bold tracking-wide text-green-baseLarge">
        {{ ecRole }}
      </h3>
      <p class="text-sm tablet:text-base">
        {{ timeline }}
      </p>
    </div>
    <slot />
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
    timeline: {
      type: String,
      default: '',
    },
  },
};
</script>
