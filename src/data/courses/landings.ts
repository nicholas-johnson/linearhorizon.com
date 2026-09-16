export interface AudienceLanding {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  lede: string;
  navLabel: string;
  slugs: string[];
  programmeSlugs: string[];
  pathwayIds: string[];
}

export const audienceLandings: AudienceLanding[] = [
  {
    slug: 'software-engineers',
    title: 'AI training for software engineers.',
    seoTitle: 'AI Training for Software Engineers',
    navLabel: 'Software engineers',
    description:
      'Practitioner-led AI training for software engineers: engineering fundamentals, RAG, agents, evaluation, security and production architecture.',
    lede: 'Most software engineers are now expected to put language models into applications. The gap is not access to an API. It is the engineering around it — interfaces, failure, evaluation, and the difference between a demo and a system you can operate.',
    slugs: [
      'generative-ai-fundamentals',
      'how-large-language-models-work',
      'ai-engineering-for-software-developers',
      'building-applications-with-generative-ai',
      'evaluating-and-testing-llm-applications',
      'securing-generative-ai-applications',
      'rag-from-fundamentals-to-production',
      'building-ai-agents',
      'agentic-rag-systems',
      'production-ai-architecture',
      'building-enterprise-ai-assistants',
      'running-llms-locally',
      'transformers-from-first-principles',
      'rag-in-a-day',
      'build-an-ai-agent-in-a-day',
      'from-chatbot-to-agent',
    ],
    programmeSlugs: ['ai-engineering', 'applied-nlp'],
    pathwayIds: ['developer', 'advanced-ai'],
  },
  {
    slug: 'technical-leaders',
    title: 'AI training for technical leaders.',
    seoTitle: 'AI Training for CTOs and Technical Leaders',
    navLabel: 'Technical leaders',
    description:
      'AI training for CTOs, engineering managers and senior technical leaders: architecture choices, vendors, risk, and a first production path.',
    lede: 'Technical leaders are being asked to approve AI work with incomplete information. These courses are for the decisions that still have to be stood behind: architecture, vendors, operating cost, and whether a use case has a production path at all.',
    slugs: [
      'generative-ai-fundamentals',
      'ai-for-technical-leaders',
      'production-ai-architecture',
      'architecting-enterprise-generative-ai',
      'ai-platform-engineering',
      'securing-generative-ai-applications',
      'ai-architecture-workshop',
    ],
    programmeSlugs: [],
    pathwayIds: ['architect', 'leadership'],
  },
  {
    slug: 'business-leaders',
    title: 'AI training for business leaders.',
    seoTitle: 'AI Training for Business Leaders and Directors',
    navLabel: 'Business leaders',
    description:
      'A concise set of AI courses for senior leaders and directors: where the technology creates value, where it does not, and how to judge a first serious step.',
    lede: 'Business leaders are saturated with claims about AI and short of a method for judging them. These courses give you a way to tell a genuine operational improvement from a demonstration that will not change the work.',
    slugs: [
      'generative-ai-fundamentals',
      'practical-generative-ai-at-work',
      'ai-for-business-leaders',
      'ai-use-case-discovery-workshop',
    ],
    programmeSlugs: [],
    pathwayIds: ['leadership'],
  },
  {
    slug: 'architects',
    title: 'AI training for architects.',
    seoTitle: 'AI Architecture Training for Enterprise Teams',
    navLabel: 'Architects',
    description:
      'AI architecture training for enterprise architects and senior engineers: platforms, assistants, retrieval, cloud implementations and operating constraints.',
    lede: 'Architects set the shape of AI systems and the platform around them. These courses cover the reference architectures, security boundaries, and operational work that turn a promising prototype into something a team can run.',
    slugs: [
      'generative-ai-fundamentals',
      'how-large-language-models-work',
      'ai-for-technical-leaders',
      'production-ai-architecture',
      'architecting-enterprise-generative-ai',
      'building-enterprise-ai-assistants',
      'ai-platform-engineering',
      'rag-from-fundamentals-to-production',
      'ai-systems-on-aws',
      'ai-systems-on-azure',
      'ai-architecture-workshop',
    ],
    programmeSlugs: [],
    pathwayIds: ['architect'],
  },
];

export function getAudienceLanding(slug: string) {
  return audienceLandings.find((landing) => landing.slug === slug);
}
