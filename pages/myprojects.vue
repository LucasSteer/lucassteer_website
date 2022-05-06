<template>
  <main class="flex flex-row flex-wrap justify-around">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :subtitle="project.subtitle"
      :link="project.link"
      :imgSrc="project.imgSrc"
      :imgAlt="project.imgAlt"
    />
  </main>
</template>

<script>
import ProjectCard from '~/components/ProjectCard.vue';

export default {
  name: 'MyprojectsPage',
  components: {
    ProjectCard,
  },
  head() {
    return {
      title: 'My Projects | Lucas Steer',
    };
  },
  data() {
    return {
      projects: [
        {
          title: 'GeocARching',
          subtitle: 'Geocaching implemented in AR for Android devices',
          link: 'https://github.com/LucasSteer/CIS4250_GeocARching',
          imgSrc: '/thumbnails/GeocARching.jpg',
          imgAlt: 'A black-and-white photo of a 3D model of a cactus in AR',
        },
      ],
    };
  },
};
</script>
