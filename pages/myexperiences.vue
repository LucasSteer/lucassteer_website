<template>
  <main class="px-4 py-8">
    <ExperienceCard
      link="https://www.avanade.com"
      heading="Avanade"
      img-src="/logos/AvanadeLogo.png"
      img-alt="Avanade Logo"
      ec-role="Analyst, Full-Stack Developer"
      timeline="January 2020 - Present"
      is-odd
    >
      <div class="mt-4 tablet:mx-4 tablet:mb-4 tablet:mt-6">
        <PromotionCard
          ec-role="Consultant, Full-Stack Developer"
          timeline="December 2021 - Present"
        >
          <p>
            I'm currently employed as an analyst-level full-stack developer at
            Avanade. I work with clients across industries and contribute to the
            success of their projects throughout the software stack.
          </p>
        </PromotionCard>
        <ExperienceCardConnecter />
        <PromotionCard
          ec-role="Senior Analyst, Full-Stack Developer"
          timeline="December 2020 - December 2021"
        >
          <p>
            I'm currently employed as an analyst-level full-stack developer at
            Avanade. I work with clients across industries and contribute to the
            success of their projects throughout the software stack.
          </p>
        </PromotionCard>
        <ExperienceCardConnecter />
        <PromotionCard
          ec-role="Analyst, Full-Stack Developer"
          timeline="January 2020 - December 2020"
        >
          <p>
            I'm currently employed as an analyst-level full-stack developer at
            Avanade. I work with clients across industries and contribute to the
            success of their projects throughout the software stack.
          </p>
        </PromotionCard>
      </div>
    </ExperienceCard>
    <ExperienceCardConnecter />
    <ExperienceCard
      link="https://www.caatpension.on.ca"
      heading="CAAT Pension Plan"
      img-src="/logos/CAATPensionPlanLogo.png"
      img-alt="CAAT Pension Plan Logo"
      ec-role="Software Developer (Summer Student)"
      timeline="May 2019 - August 2019"
      :is-odd="false"
    >
      <p>
        At CAAT Pension Plan, myself and another summer student created the
        first phase of a refresh of the company's intranet using SharePoint. We
        ensured that CAAT employeers were a key part in the design process by
        creating and running ideation and requirements gathering sessions. We
        then refined these requirements with key stakeholders and implemented
        them according to industry best practices.
      </p>
    </ExperienceCard>
    <ExperienceCardConnecter />
    <ExperienceCard
      link="https://www.cgi.com"
      heading="CGI"
      img-src="/logos/CGILogo.png"
      img-alt="CGI Logo"
      ec-role="Software Engineer (Co-op)"
      timeline="May 2018 - August 2018"
      is-odd
    >
      <p>
        As a software engineer at CGI I performed technical analyses, code
        reviews, and onboarding of new team members. Using Angular 1.5 I
        implemented tech and user stories as part of a large, cross-functional,
        and cross-continental team.
      </p>
    </ExperienceCard>
    <ExperienceCardConnecter />
    <ExperienceCard
      link="https://www.jibestream.com"
      heading="Jibestream"
      img-src="/logos/JibestreamLogo.png"
      img-alt="Jibestream Logo"
      ec-role="Developer (Co-op)"
      timeline="January 2018 - March 2018"
      :is-odd="false"
    >
      <p>
        Jibestream exposed me to modern front-end web development as a co-op
        developer. Using React, Redux, and ES6 JavaScript, I re-engineered an
        existing application to make use of the latest release of Jibestream's
        proprietary SDK. Myself and a fellow co-op conducted peer reviews of
        each other's work to ensure that it behaved as expected and employed
        best practices.
      </p>
    </ExperienceCard>
    <ExperienceCardConnecter />
    <ExperienceCard
      link="https://www.gocold.ca"
      heading="Confederation Freezers"
      img-src="/logos/ConfederationFreezersLogo.png"
      img-alt="Confederation Freezers Logo"
      ec-role="Application Developer (Co-op)"
      timeline="May 2017 - August 2017"
      is-odd
    >
      <p>
        Confederation Freezers employed me as an application developer to help
        them digitize their existing paper forms to allow for the efficient
        storage, search, and retrieval of key documents for regulatory and audit
        purposes. I also developed a CRUD app using SQL, PHP, and vanilla
        front-end technologies as a proof of concept for a storage and search
        tool for WHMIS documentation.
      </p>
    </ExperienceCard>
    <ExperienceCardConnecter />
    <ExperienceCard
      link="https://www.esentire.com"
      heading="eSentire"
      img-src="/logos/eSentireLogo.png"
      img-alt="eSentire Logo"
      ec-role="Technical Writer (Co-op)"
      timeline="May 2016 - December 2016"
      :is-odd="false"
    >
      <p>
        As a technical writer at eSentire I was responsible for translating the
        work of technical resources, such as developers, into clear and tangible
        benefits for end users. I was responsible for constructing, refining,
        and maintaining internal and exteral documentation for a variety of
        audiences and use cases.
      </p>
    </ExperienceCard>
  </main>
</template>

<script>
import ExperienceCard from '~/components/ExperienceCard.vue';
import ExperienceCardConnecter from '~/components/ExperienceCardConnecter.vue';
import PromotionCard from '~/components/PromotionCard.vue';

export default {
  name: 'MyexperiencesPage',
  components: {
    ExperienceCard,
    ExperienceCardConnecter,
    PromotionCard,
  },
  head() {
    return {
      title: 'My Experiences | Lucas Steer',
    };
  },
};
</script>
