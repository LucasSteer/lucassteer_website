<template>
  <div class="flex flex-row items-center gap-1 tablet:gap-2">
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="6"
      class="stroke-green-highlight forced-colors:stroke-systemColors-AccentColor dark:stroke-greenDarkMode-base h-7 tablet:h-8"
      :class="{ 'h-6 tablet:h-7': compact }"
      role="img"
    >
      <title>Timeline Icon</title>
      <path
        d="m 20 20 l 60 0 l 0 60 l -60 0 l 0 -60 m 20 -10 l 0 20 m 20 -20 l 0 20 m -40 10 l 60 0"
      />
    </svg>
    <p
      class="text-base tablet:text-lg"
      :class="{ 'text-sm tablet:text-base': compact }"
    >
      <span
        class="text-base tablet:text-lg font-bold"
        :class="{ 'text-sm tablet:text-base': compact }"
      >
        {{ start }}
      </span>
      to
      <span
        class="text-base tablet:text-lg font-bold"
        :class="{ 'text-sm tablet:text-base': compact }"
      >
        {{ end }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'TimelineBadge',
  props: {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      default: 'Present',
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
