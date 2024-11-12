<template>
  <PageHeader text="My Experiences" />
  <div class="flex flex-col px-4 py-8">
    <template
      v-for="(experience, experience_index) in experiences"
      :key="experience"
    >
      <ExperienceCardConnecter v-if="experience_index !== 0" />
      <ExperienceCard
        :company="experience.company"
        :img-src="experience.imgSrc"
        :ec-role="experience.ecRole"
        :start="experience.start"
        :end="experience.end"
        :location="experience.location"
        :show-on-right="experience_index % 2 !== 0"
        :start-expanded="experience_index === 0"
      >
        <template v-if="experience.promotions !== undefined">
          <template
            v-for="(promotion, promotion_index) in experience.promotions"
            :key="promotion"
          >
            <ExperienceCardConnecter v-if="promotion_index !== 0" />
            <PromotionCard
              :ec-role="promotion.ecRole"
              :start="promotion.start"
              :end="promotion.end"
            >
              <p>{{ promotion.body }}</p>
            </PromotionCard>
          </template>
        </template>
        <p v-else>{{ experience.body }}</p>
      </ExperienceCard>
    </template>
  </div>
</template>

<script setup>
useHead({
  title: 'My Experiences | Lucas Steer',
  meta: [
    {
      name: 'description',
      content:
        'Read about my professional experiences as a Full-Stack Software Engineer!',
    },
  ],
});

const experiences = [
  {
    company: 'Avanade',
    imgSrc: '/logos/AvanadeLogo.png',
    ecRole: 'Full-Stack Developer',
    start: 'January 2020',
    location: 'Toronto, Ontario, Canada',
    promotions: [
      {
        ecRole: 'Consultant',
        start: 'December 2021',
        body: `In my role as a full-stack developer at the Consultant level, I've
            worked on two projects as a front-end engineer and a third as a
            technical architect. I used TypeScript and Angular or JavaScript and
            Vue in my frontend projects depending on the client's existing tech
            stack. As a technical architect, I was responsible for the deployment
            and administration of a complex distributed system in Azure that made
            use of serverless components, message queues, and NoSQL databases. I
            was promoted to this level within my first two years at Avanade for my
            achievement on client work and my leadership roles in internal Avanade
            groups.`,
      },
      {
        ecRole: 'Senior Analyst',
        start: 'December 2020',
        end: 'December 2021',
        body: `As a Senior Analyst, I worked as the technical lead on a project where
          we used Vue and Tailwind to develop a framework for building SPAs. I
          was promoted to this role before the end of my first year for
          delivering excellent work and having a deep understanding of the
          product. My ability to define technical priorities, delegate tasks,
          and advocate for my team in business discussions resolved the
          project's timeline issues and delivered the next five releases ahead
          of schedule.`,
      },
      {
        ecRole: 'Analyst',
        start: 'January 2020',
        end: 'December 2020',
        body: `At the Analyst level, I worked as a front-end developer working with
          Vue. I started on this role fresh out of the University of Guelph and
          was excited to be able to apply what I'd learned and to learn from
          talented and experienced developers. In addition to feature
          implementation and bug fixes, I also prototyped scripts where
          developers could select a target brand during builds, such that the
          appropriate Tailwind theme and related stylings would be seen in
          deployments.`,
      },
    ],
  },
  {
    company: 'CAAT Pension Plan',
    imgSrc: '/logos/CAATPensionPlanLogo.png',
    ecRole: 'Software Developer (Summer Student)',
    start: 'May 2019',
    end: 'August 2019',
    location: 'Toronto, Ontario, Canada',
    body: `At CAAT Pension Plan, myself and another summer student created the
      first phase of a refresh of the company's intranet using SharePoint. We
      ensured that CAAT employees were a key part of the design process by
      creating and running ideation and requirements gathering sessions. We
      then refined these requirements with key stakeholders and implemented
      them according to industry best practices.`,
  },
  {
    company: 'CGI',
    imgSrc: '/logos/CGILogo.png',
    ecRole: 'Software Engineer (Co-op)',
    start: 'May 2018',
    end: 'August 2018',
    location: 'Markham, Ontario, Canada',
    body: `As a software engineer at CGI I performed technical analyses, code
      reviews, and onboarding of new team members. Using Angular 1.5 I
      implemented tech and user stories as the only dedicated front-end
      developer on a large, cross-functional, and cross-continental team. I
      also created a tailored migration plan from AngularJS 1.5 to 1.6 and a
      proof of concept for unit testing our application (which, at the time,
      was relying primarily on manual testing).`,
  },
  {
    company: 'Jibestream',
    imgSrc: '/logos/JibestreamLogo.png',
    ecRole: 'Developer (Co-op)',
    start: 'January 2018',
    end: 'March 2018',
    location: 'Toronto, Ontario, Canada',
    body: `Jibestream exposed me to modern front-end web development as a co-op
      developer. Using React, Redux, and ES6 JavaScript, I re-engineered an
      existing application to make use of the latest release of Jibestream's
      proprietary SDK. A fellow co-op and I conducted peer reviews of each
      other's work to ensure that it behaved as expected and employed best
      practices.`,
  },
  {
    company: 'Confederation Freezers',
    imgSrc: '/logos/ConfederationFreezersLogo.png',
    ecRole: 'Application Developer (Co-op)',
    start: 'May 2017',
    end: 'August 2017',
    location: 'Brampton, Ontario, Canada',
    body: `Confederation Freezers allowed me to work as a developer for the first
        time and solve real problems for people using software. I helped them
        digitize their existing paper forms to allow for the efficient storage,
        search, and retrieval of key documents for regulatory and audit
        purposes. I also developed a CRUD app using SQL, PHP, and vanilla
        front-end technologies as a proof of concept for a storage and search
        tool for WHMIS documentation.`,
  },
  {
    company: 'eSentire',
    imgSrc: '/logos/eSentireLogo.png',
    ecRole: 'Technical Writer (Co-op)',
    start: 'May 2016',
    end: 'December 2016',
    location: 'Cambridge, Ontario, Canada',
    body: `As a technical writer at eSentire I was responsible for translating the
        work of developers and other technical resources into clear and tangible
        benefits for end users. I was responsible for constructing, refining,
        and maintaining internal and external documentation for a variety of
        audiences and use cases. This co-op position started my career in the
        technology industry and I was grateful to have gained a broader
        perspective on the software development lifecycle as a non-developer in
        my time at eSentire.`,
  },
];
</script>
