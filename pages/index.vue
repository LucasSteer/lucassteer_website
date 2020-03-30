<template>
  <div class="p-4">
    <section class="flex flex-col items-center">
      <img
        src="headshot.jpg"
        alt="A picture of me, Lucas Steer, smiling in a field while wearing a navy-blue suit"
        class="rounded-full h-32 w-32 m-2 tablet:h-40 tablet:w-40 tablet:m-4 desktop:h-64 desktop:w-64"
      />
      <h2
        class="text-2xl text-green-500 tracking-widest font-semibold tablet:text-3xl desktop:text-4xl"
      >
        Lucas Steer
      </h2>
      <h3
        class="text-lg text-green-700 tracking-widest mb-4 tablet:mb-8 tablet:text-2xl desktop:text-3xl"
      >
        He/Him
      </h3>
    </section>
    <section>
      <p class="mb-4">
        Hey, thanks for dropping by my site! I'm a full-stack software engineer
        who's always looking for new and exciting challenges. I believe in
        experiencing and supporting a diverse set of perspectives as it helps
        strengthen the impact that everyone can have. I'm a people person who
        enjoys working collaboratively in cross-disciplinary teams and I excel
        at translating problems and solutions clearly from clients to developers
        and everywhere in between.
      </p>
      <p>
        If you want to learn about the work that I have done, am doing, or hope
        to do, please check out
        <InternalLink url="myexperiences" text="my experiences" /> and
        <InternalLink url="myprojects" text="my projects" />. If you want to get
        in touch, please connect with me on
        <ExternalLink
          url="https://www.linkedin.com/in/lucassteer/"
          text="LinkedIn"
        />
        or email me at
        <ExternalLink
          url="mailto:lucassteer@gmail.com"
          text="lucassteer@gmail.com"
        />.
      </p>
    </section>
    <section>
      <h2 class="text-lg text-green-700 tracking-widest font-semibold my-4">
        A note about this site
      </h2>
      <p class="mb-2 text-sm">
        My website was designed mobile and accessible first. It should be
        accessible using assistive technologies and intends to support the most
        recent versions of modern browsers (such as Firefox, Chrome, and Edge)
        on both low and high resolution devices. This site should be usable in
        older browsers (such as IE11), but no special care has been made to
        support them.
      </p>
      <p class="text-sm">
        If you notice any accessiblity issues or have other concerns regarding
        this website or its content, please reach out to me at
        <ExternalLink
          url="mailto:lucassteer@gmail.com"
          text="lucassteer@gmail.com"
          class="text-sm"
        />
        or create an issue on this projects
        <ExternalLink
          url="https://github.com/LucasSteer/lucassteer_website"
          text="GitHub repository"
          class="text-sm"
        />.
      </p>
    </section>
  </div>
</template>

<script>
import ExternalLink from '~/components/ExternalLink.vue';
import InternalLink from '~/components/InternalLink.vue';

export default {
  components: {
    ExternalLink,
    InternalLink,
  },
  head() {
    return {
      title: 'About Me | Lucas Steer',
    };
  },
};
</script>
