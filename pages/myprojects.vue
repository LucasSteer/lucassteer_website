<template>
  <div class="flex flex-row flex-wrap justify-around">
    <ProjectCard
      title="GeocARching"
      subtitle="Geocaching implemented in AR for Android devices"
      link="https://github.com/LucasSteer/CIS4250_GeocARching"
      img-src="/thumbnails/GeocARching.jpg"
      img-alt="A black-and-white photo of a 3D model of a cactus in AR"
    />
  </div>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue';

export default {
  components: {
    ProjectCard,
  },
  head() {
    return {
      title: 'My Projects | Lucas Steer',
    };
  },
};
</script>
