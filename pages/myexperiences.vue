<template>
  <div>
    <!-- <logo /> -->
    <ExternalLink
      url="mailto:lucassteer@gmail.com"
      text="lucassteer@gmail.com"
      class="text-gray-700"
    />
  </div>
</template>

<script>
import ExternalLink from '~/components/ExternalLink.vue';

export default {
  components: {
    ExternalLink,
  },
  head() {
    return {
      title: 'My Experiences | Lucas Steer',
    };
  },
};
</script>
