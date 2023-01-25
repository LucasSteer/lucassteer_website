<template>
  <main
    class="mx-auto grid gap-12 p-12 tablet:gap-8 tablet:p-8"
    :class="{
      'desktop:grid-cols-2': projects.length >= 2, // fewer items than columns looks weird without context
      'desktop:w-7/12': projects.length == 1, // fitting to container is too large for desktop
    }"
  >
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
      :title="project.title"
      :subtitle="project.subtitle"
      :link="project.link"
      :imgSrc="project.imgSrc"
      :imgAlt="project.imgAlt"
      :tags="project.tags"
    />
  </main>
</template>

<script>
export default {
  name: 'MyprojectsPage',
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
          tags: ['Android', 'Kotlin', 'Firebase', 'AR'],
        },
      ],
    };
  },
};
</script>
