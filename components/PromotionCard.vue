<template>
  <section class="rounded-lg px-4 pt-2 pb-4 shadow-card">
    <div class="border-b-2 border-grey-400 pt-2 pb-4 tablet:pb-4 tablet:px-4">
      <h3 class="text-xl font-semibold tracking-wide text-green-baseLarge">
        {{ ecRole }}
      </h3>
      <p class="text-sm tablet:text-base">
        {{ timeline }}
      </p>
    </div>
    <div class="pt-2 px-2 tablet:pb-2 tablet:px-4">
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
    timeline: {
      type: String,
      default: '',
    },
  },
};
</script>
