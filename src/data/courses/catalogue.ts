import type { CourseCategory, CoursePathway } from './types';

export const catalogueIntro =
  'Linear Horizon training is designed and delivered by experienced practitioners. Courses combine technical depth, clear explanation and hands-on work, and can be adapted to your organisation, technology stack and objectives.';

export const courseCategories: CourseCategory[] = [
  {
    id: 'foundations',
    title: 'Foundations',
    summary:
      'Build an accurate picture of how generative AI works, and how to use it with judgement.',
    seoTitle: 'Generative AI Foundations Training',
    lede: 'A shared, accurate picture of how generative AI works. These courses are for mixed rooms and for teams that need a common language before they specialise.',
  },
  {
    id: 'leadership',
    title: 'Leadership',
    summary: 'Architectural, commercial and organisational decisions about AI that you can stand behind.',
    seoTitle: 'AI Training for Technical and Business Leaders',
    lede: 'Decision-making for people who have to approve, sponsor or refuse AI work. The teaching is architectural and commercial, not a coding class.',
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    summary: 'Build, test, secure and operate applications that use large language models.',
    seoTitle: 'AI Engineering Training',
    lede: 'The engineering around large language models: structured outputs, retrieval, tools, evaluation, security, and the production behaviour of a non-deterministic component.',
  },
  {
    id: 'rag-agents',
    title: 'RAG & Agents',
    summary: 'Design retrieval systems, tool-using agents, and the combination of the two.',
    seoTitle: 'RAG and AI Agents Training',
    lede: 'Retrieval systems that can be measured, agents that can be bounded, and the architecture that combines the two without treating the model as a database.',
  },
  {
    id: 'architecture',
    title: 'Architecture',
    summary:
      'Give AI a production shape: platforms, assistants, security boundaries and the operational work that follows.',
    seoTitle: 'Production AI Architecture Training',
    lede: 'Give AI a production shape: platforms, assistants, security boundaries, and the operational work that decides whether a prototype can leave the lab.',
  },
  {
    id: 'models-ml',
    title: 'Models & Machine Learning',
    summary: 'How models work, how they are adapted, and how they are run in practice.',
    seoTitle: 'Language Model and Machine Learning Training',
    lede: 'How language models work, when to adapt them, and how to run them. The aim is understanding you can use in a design conversation, not a research degree.',
  },
  {
    id: 'cloud-platform',
    title: 'Cloud & Platform',
    summary: 'Cloud implementations, and the internal platforms that make AI usable across your teams.',
    seoTitle: 'Cloud AI and Platform Engineering Training',
    lede: 'Cloud implementations and the internal platforms that make AI usable across teams — identity, policy, retrieval, and a developer path that does not reinvent the stack for every project.',
  },
  {
    id: 'workshops',
    title: 'Workshops',
    summary: 'Focused build days and facilitated working sessions around a problem your team actually has.',
    seoTitle: 'AI Workshops for Engineering Teams',
    lede: 'Focused build days and facilitated working sessions. A workshop is for a problem your team already has, not a survey of the field.',
  },
];

export const coursePathways: CoursePathway[] = [
  {
    id: 'developer',
    title: 'Developer pathway',
    summary:
      'For software engineers who need to move from a working understanding of generative AI to systems they can run in production.',
    slugs: [
      'generative-ai-fundamentals',
      'ai-engineering-for-software-developers',
      'rag-from-fundamentals-to-production',
      'building-ai-agents',
      'production-ai-architecture',
    ],
  },
  {
    id: 'architect',
    title: 'Architect pathway',
    summary:
      'For architects and senior technical leaders who set the shape of AI systems and the platform around them.',
    slugs: [
      'generative-ai-fundamentals',
      'ai-for-technical-leaders',
      'production-ai-architecture',
      'architecting-enterprise-generative-ai',
      'ai-platform-engineering',
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership pathway',
    summary:
      'For business and technical leaders who need to judge where AI is useful, and how to take a first serious step.',
    slugs: [
      'generative-ai-fundamentals',
      'ai-for-business-leaders',
      'ai-use-case-discovery-workshop',
      'ai-architecture-workshop',
    ],
  },
  {
    id: 'advanced-ai',
    title: 'Advanced AI pathway',
    summary:
      'For practitioners who need a deeper picture of how language models work, and how they are trained and adapted.',
    slugs: [
      'how-large-language-models-work',
      'transformers-from-first-principles',
      'fine-tuning-language-models',
      'training-your-own-language-model',
    ],
  },
];

export const deliveryOptions = {
  title: 'Delivery',
  body: 'Linear Horizon delivers private corporate training, on-site or as remote live training. Courses can be run as published, or adapted to your organisation’s stack, domain and experience level.',
};

export const bespokeTraining = {
  title: 'Bespoke training',
  lede: 'Most engagements are shaped to your organisation. The published catalogue is a starting point, not a constraint.',
  points: [
    'Tailor an existing course to a particular stack, domain or experience level.',
    'Combine modules from several courses into a single programme.',
    'Build a programme around your organisation’s architecture, data and constraints.',
    'Use organisation-specific case studies, systems and design problems.',
    'Create multi-day or multi-week learning programmes for engineering teams.',
    'Deliver technical enablement alongside consultancy or implementation, so the people who will own the system stay involved.',
  ],
};
