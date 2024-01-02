<template>
  <PageHeader text="My Projects" />
  <div
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
  </div>
</template>

<script setup>
useHead({
  title: 'My Projects | Lucas Steer',
  meta: [
    {
      name: 'description',
      content:
        'Learn more about my past and ongoing projects as a Full-Stack Software Engineer!',
    },
  ],
});

const projects = [
  {
    title: 'GeocARching',
    subtitle: 'Geocaching implemented in AR for Android devices',
    link: 'https://github.com/LucasSteer/CIS4250_GeocARching',
    imgSrc: '/thumbnails/GeocARching.jpg',
    imgAlt: '',
    tags: ['Android', 'Kotlin', 'Firebase', 'AR'],
  },
];
</script>
