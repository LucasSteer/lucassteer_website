<template>
  <Transition
    @enter="onEnter"
    @after-enter="onAfterEnter"
    @leave="onLeave"
    enter-active-class="transform-gpu transition-all motion-reduce:transition-none duration-300 overflow-hidden"
    leave-active-class="transform-gpu transition-all motion-reduce:transition-none duration-300 overflow-hidden"
    enter-to-class="h-0"
    leave-to-class="h-0"
  >
    <slot />
  </Transition>
</template>

<script>
// Credit to https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/

export default {
  name: 'AccordionWrapper',
  onMounted() {
    this.prefersReducedMotionMatch = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );
  },
  methods: {
    onEnter(element) {
      if (this.prefersReducedMotionMatch.matches) return; // for performance, we don't need to run if user prefers reduced motion

      const width = getComputedStyle(element).width;

      element.style.width = width;
      element.style.position = 'absolute';
      element.style.visibility = 'hidden';
      element.style.height = 'auto';

      const height = getComputedStyle(element).height;

      element.style.width = null;
      element.style.position = null;
      element.style.visibility = null;
      element.style.height = 0;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      // Trigger the animation.
      // We use `requestAnimationFrame` because we need
      // to make sure the browser has finished
      // painting after setting the `height`
      // to `0` in the line above.
      requestAnimationFrame(() => {
        element.style.height = height;
      });
    },
    onAfterEnter(element) {
      if (this.prefersReducedMotionMatch.matches) return; // for performance, we don't need to run if user prefers reduced motion

      element.style.height = 'auto';
    },
    onLeave(element) {
      if (this.prefersReducedMotionMatch.matches) return; // for performance, we don't need to run if user prefers reduced motion

      const height = getComputedStyle(element).height;

      element.style.height = height;

      // Force repaint to make sure the
      // animation is triggered correctly.
      getComputedStyle(element).height;

      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
  },
  data() {
    return {
      prefersReducedMotionMatch: false,
    };
  },
};
</script>
