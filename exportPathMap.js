// importing fails due to ES6 modules

// add page for each person
const personSlugs = [
  'nathan-mcneese',
  'christopher-flathmann',
  'beau-schelble',
  'rui-zhang',
  'geoff-musick',
  'jake-armstrong',
  'nirali-bandaru',
  'bekk-blando',
  'mark-blasko',
  'rafael-dejesus',
  'casey-hird',
  'john-paul-lineberger',
  'qwelian-tanner',
  'steve-russell',
  'aru-bhoop',
  'mari-kilgus',
  'sarah-morrison',
  'jack-carroll',
  'dylan-cathapermal',
  'lorenzo-barberis-canonico',
];

// add page for each publication
const publicationSlugs = [
  'articulating-and-understanding-the-development-of',
  'autonomous-intelligent-agents-for-team-training',
  'classifying-text-messages-for-the-haiti',
  'the-cognitive-science-of-intelligence-analysis',
  'collectively-intelligent-teams',
  'concept-mapping-as-a-methodology-to',
  'developing-human-robot-team-interdependence-in-a',
  'effective-team-interaction-for-adaptive-training',
  'an-empirical-exploration-of-resilience-in',
  'evaluation-of-unmanned-airborne-vehicles-and',
  'the-evolution-of-human-autonomy-teams-in',
  'exploring-indie-game-development',
  'exploring-the-perceptions-and-use-of',
  'the-extreme-environment-of-high-altitude',
  'flash-crashes-in-multi-agent-systems-using',
  'a-human-factors-approach-to-building',
  'human-factors-guidelines-for-developing-collaborative',
  'the-human-factors-of-intelligence-analysis',
  'human-systems-integration',
  'identification-of-the-emplacement-of-improvised',
  'the-impact-of-perceived-autonomous-agents',
  'the-innovation-ecology',
  'an-integrative-simulation-to-study-team',
  'intelligent-and-human-centered-clinical-checklists',
  'intelligent-teamwork',
  'investigating-team-coordination-in-baseball-using',
  'knowledge-elicitation-methods-for-developing-insights',
  'layered-dynamics-and-system-effectiveness-of',
  'machine-learning-as-grounded-theory',
  'the-pursuit-of-transdisciplinary-research',
  'the-role-of-recognition-primed-decision',
  'simulating-team-cognition-in-complex-systems',
  'stable-teamwork-marriages-in-healthcare',
  'a-survey-of-rural-hospitals-perspectives',
  'synthetic-teammate-communication-and-coordination-with',
  'synthetic-teammates-as-team-players',
  'team-cognition-as-a-means-to',
  'team-cognition-as-a-mechanism-for',
  'team-communication-behaviors-of-the-human-automation',
  'team-coordination-and-effectiveness-in-human-autonomy',
  'team-coordination-dynamics-in-human-autonomy-teaming',
  'team-coordination-of-team-situation-awareness',
  'team-performance-in-real-and-virtual',
  'team-situation-awareness-within-the-context',
  'team-synchrony-in-human-autonomy-teaming',
  'teaming-with-a-synthetic-teammate',
  'theoretical-and-methodical-approaches-to-studying',
  'towards-a-team-mental-model-of',
  'understanding-the-role-of-trust-in',
  'using-human-agent-teams-to-purposefully-design',
  'using-the-living-laboratory-framework-as',
  'what-went-wrong-what-can-go',
  'the-wisdom-of-the-market',
];

// https://nextjs.org/docs/api-reference/next.config.js/exportPathMap
const exportPathMap = async (
  defaultPathMap,
  { dev, dir, outDir, distDir, buildId },
) => {
  /**
   * People
   */

  // remove template pages
  const {
    '/people/[personSlug]': personSlug,
    ...filteredPersonPaths
  } = defaultPathMap;

  defaultPathMap = { ...filteredPersonPaths };

  personSlugs.forEach(personSlug => {
    defaultPathMap[`/people/${personSlug}`] = {
      page: '/people/[personSlug]',
      query: {
        personSlug,
      },
    };
  });

  // for default page with query params
  // see usePageRouter
  // pathMap['/people/person'] = {
  //   page: '/people/[personSlug]',
  //   query: {},
  // };

  /**
   * Publications
   */

  // remove template pages
  const {
    '/publications/[publicationSlug]': publicationSlug,
    ...filteredPublicationPaths
  } = defaultPathMap;

  defaultPathMap = { ...filteredPublicationPaths };

  publicationSlugs.forEach(publicationSlug => {
    defaultPathMap[`/publications/${publicationSlug}`] = {
      page: '/publications/[publicationSlug]',
      query: {
        publicationSlug,
      },
    };
  });

  // for default page with query params
  // see usePageRouter
  // pathMap['/people/person'] = {
  //   page: '/people/[personSlug]',
  //   query: {},
  // };

  return defaultPathMap;
};

module.exports = exportPathMap;
