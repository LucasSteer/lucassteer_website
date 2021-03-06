<template>
  <div class="p-4">
    <section class="flex flex-col items-center">
      <img
        src="headshot.jpg"
        alt="A picture of me, Lucas Steer, smiling in a field while wearing a navy-blue suit"
        height="128"
        width="128"
        class="rounded-full h-32 w-32 m-2 tablet:h-40 tablet:w-40 tablet:m-4 desktop:h-64 desktop:w-64"
      />
      <h2
        class="text-2xl text-green-baseLarge tracking-widest font-semibold tablet:text-3xl "
      >
        Lucas Steer
      </h2>
      <h3
        class="text-lg text-green-baseLarge tracking-widest mb-4 tablet:mb-8 tablet:text-2xl "
      >
        He/Him
      </h3>
    </section>
    <section>
      <p class="mb-4 tablet:text-lg ">
        Hey, thanks for dropping by my site! I'm a full-stack software engineer
        who's always looking for new and exciting challenges. I believe in
        experiencing and supporting a diverse set of perspectives as it helps
        strengthen the impact that everyone can have. I'm a people person who
        enjoys working collaboratively in cross-disciplinary teams and I excel
        at translating problems and solutions clearly from clients to developers
        and everywhere in between.
      </p>
      <p class="tablet:text-lg ">
        If you want to learn about the work that I have done, am doing, or hope
        to do, please check out
        <InternalLink
          url="myexperiences"
          text="my experiences"
          class="tablet:text-lg "
        />
        and
        <InternalLink
          url="myprojects"
          text="my projects"
          class="tablet:text-lg "
        />. If you want to get in touch, please connect with me on
        <ExternalLink
          url="https://www.linkedin.com/in/lucassteer/"
          text="LinkedIn"
          class="tablet:text-lg "
          >LinkedIn</ExternalLink
        >
        or email me at
        <ExternalLink
          url="mailto:lucassteer@gmail.com"
          text="lucassteer@gmail.com"
          class="tablet:text-lg "
          >lucassteer@gmail.com</ExternalLink
        >.
      </p>
    </section>
    <section>
      <h2
        class="text-lg text-green-base tracking-widest font-semibold my-4 tablet:text-xl "
      >
        A note about this site
      </h2>
      <p class="mb-2 text-sm tablet:text-base ">
        My website was designed mobile and accessible first and does not require
        JavaScript to be enabled. It should be accessible using assistive
        technologies and intends to support the most recent versions of modern
        browsers (such as Firefox, Chrome, and Edge) on both low and high
        resolution devices. This site should be usable in older browsers (such
        as IE11), but no special care has been made to support them.
      </p>
      <p class="text-sm tablet:text-base ">
        If you notice any accessiblity issues or have other concerns regarding
        this website or its content, please reach out to me at
        <ExternalLink
          url="mailto:lucassteer@gmail.com"
          class="text-sm tablet:text-base "
          >lucassteer@gmail.com</ExternalLink
        >
        or create an issue on this projects
        <ExternalLink
          url="https://github.com/LucasSteer/lucassteer_website"
          class="text-sm tablet:text-base "
          >GitHub repository</ExternalLink
        >.
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
