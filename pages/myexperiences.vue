<template>
  <main class="px-4 py-8">
    <ExperienceCard
      link="https://www.avanade.com"
      heading="Avanade"
      img-src="/logos/AvanadeLogo.png"
      img-alt="Avanade Logo"
      timeline="January 2020 - Present"
      location="Toronto, Ontario, Canada"
      is-odd
    >
      <div class="mt-4 tablet:mx-4 tablet:mb-4 tablet:mt-6">
        <PromotionCard
          ec-role="Consultant, Full-Stack Developer"
          timeline="December 2021 - Present"
        >
          <p>
            Near the end of my second year, I was promoted to the Consultant
            level for my client work and my leadership roles in internal Avanade
            groups, like our analyst community. These days I'm a technical
            architect for a large public services client. I'm responsible for
            the deployment and administration of a highly integrated system that
            uses Dynamics 365 for CRM and ERP alongside Azure objects for API
            management, cloud storage, messaging, and serverless code.
          </p>
        </PromotionCard>
        <ExperienceCardConnecter />
        <PromotionCard
          ec-role="Senior Analyst, Full-Stack Developer"
          timeline="December 2020 - December 2021"
        >
          <p>
            I was promoted to Senior Analyst before the end of my first year for
            being able to hit the ground running and deliver excellent work for
            our client. While there, I was also given a role promotion and
            became the development team lead for the project. My ability to
            define technical priorities, delegate tasks, and advocate for my
            team in business discussions resolved the project's timeline issues
            and delivered the next five releases ahead of schedule.
          </p>
        </PromotionCard>
        <ExperienceCardConnecter />
        <PromotionCard
          ec-role="Analyst, Full-Stack Developer"
          timeline="January 2020 - December 2020"
        >
          <p>
            When I was hired on by Avanade as an analyst-level full-stack
            developer I was quickly placed on my first project with a large
            banking client. There I worked as a front-end web developer and used
            Vue and Tailwind to develop a framework for building SPAs. I also
            implemented mobile-first, accessibility-focused, responsive web
            designs that helped set the standard for the team that uses our
            framework.
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
      location="Toronto, Ontario, Canada"
      :is-odd="false"
    >
      <p>
        At CAAT Pension Plan, myself and another summer student created the
        first phase of a refresh of the company's intranet using SharePoint. We
        ensured that CAAT employees were a key part in the design process by
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
      location="Markham, Ontario, Canada"
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
      location="Toronto, Ontario, Canada"
      :is-odd="false"
    >
      <p>
        Jibestream exposed me to modern front-end web development as a co-op
        developer. Using React, Redux, and ES6 JavaScript, I re-engineered an
        existing application to make use of the latest release of Jibestream's
        proprietary SDK. A fellow co-op and I conducted peer reviews of each
        other's work to ensure that it behaved as expected and employed best
        practices.
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
      location="Brampton, Ontario, Canada"
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
      location="Cambridge, Ontario, Canada"
      :is-odd="false"
    >
      <p>
        As a technical writer at eSentire I was responsible for translating the
        work of technical resources, such as developers, into clear and tangible
        benefits for end users. I was responsible for constructing, refining,
        and maintaining internal and external documentation for a variety of
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
