export interface SitePage {
  path: string;
  title: string;
  description: string;
  kicker?: string;
  headline?: string;
  intro?: string[];
  body?: string[];
  redirect?: string;
}

export const pages: SitePage[] = [
  {
    path: '/',
    title: 'AI Training, Consulting & Production Systems | Linear Horizon',
    description:
      'Linear Horizon is a specialist applied AI company: practitioner-led AI training, strategy and architecture consulting, production engineering, and agentic products — from complexity to outcome.',
  },
  {
    path: '/training',
    title: 'AI Training for Engineering Teams & Technical Leaders | Linear Horizon',
    description:
      'Practitioner-led AI and technology training for engineering teams, technical leaders and organisations. A course catalogue covering foundations, engineering, RAG, agents, architecture and workshops.',
    kicker: '02 / Training',
    headline: 'A practitioner-led course catalogue.',
    intro: [
      'Linear Horizon training is designed and delivered by experienced practitioners. Courses combine technical depth, clear explanation and hands-on work, and can be adapted to your organisation, technology stack and objectives.',
    ],
    body: [
      'These are starting points, not prescriptions. Most organisations mix courses, shorten them, or commission a programme around their own stack and objectives.',
      'Two priced, lab-intensive programmes taught in Python. They sit alongside the catalogue and can be tailored to your team in the same way as the rest of the courses. Each has a public lab handbook — the module notes and exercises from the course repository.',
    ],
  },
  {
    path: '/consulting',
    title: 'AI Strategy & Architecture Consulting | Linear Horizon',
    description:
      'AI strategy, discovery and architecture consulting. Work out where AI is genuinely useful, what to build, and whether to deploy a Linear Horizon product or a bespoke system.',
    kicker: '03 / Consulting',
    headline: 'Work out what to build — and how to build it properly.',
    intro: [
      'We work with organisations before they build. The aim is to identify where AI is genuinely useful, rather than applying it indiscriminately.',
    ],
    body: [
      'Strategy, discovery and architecture from people who understand the underlying technology — and who will still be involved if you decide to build, or to deploy Platform, Stack, Wargame, Funnel or Callcenter.',
    ],
  },
  {
    path: '/approach',
    title: 'AI Strategy & Architecture Consulting | Linear Horizon',
    description:
      'AI strategy, discovery and architecture consulting. Work out where AI is genuinely useful, what to build, and whether to deploy a Linear Horizon product or a bespoke system.',
    redirect: '/consulting',
  },
  {
    path: '/build',
    title: 'Production AI Systems: Agents, RAG & Bespoke Applications | Linear Horizon',
    description:
      'Production AI systems: agents, RAG, copilots and bespoke applications — or deployments of Platform, Stack, Wargame, Funnel and Callcenter, designed around real organisational requirements.',
    kicker: '04 / Build',
    headline: 'Take AI into production.',
    intro: [
      'We design and deliver production systems — agents, RAG, intelligent applications and bespoke AI — around your organisation as it is, including the systems already running.',
    ],
    body: [
      'We already have productised technology: Platform for agentic infrastructure, Stack for analytical investigation, Wargame for strategic simulation, Funnel for sales intelligence, and Callcenter for customer service. Those products can be deployed, adapted and extended. They do not claim that every organisational problem fits into one application.',
      'Build is for the systems that still need to be designed around your particular estate: the interfaces, the data, the ownership and the failure modes that a product does not already cover.',
    ],
  },
  {
    path: '/products',
    title: 'AI Products | Platform, Stack, Wargame, Funnel & Callcenter | Linear Horizon',
    description:
      'Linear Horizon Platform provides the agentic foundation. Stack, Wargame, Funnel and Callcenter apply agentic AI to analysis, strategy, growth and customer service.',
    kicker: '05 / Products',
    body: [
      'You do not have to choose between a product and an engagement. Platform, Stack, Wargame, Funnel and Callcenter can be deployed as they are, adapted to existing systems, extended, or combined with consultancy and training. They exist so that not every piece of work starts from a blank page.',
    ],
  },
  {
    path: '/about',
    title: 'About',
    description:
      'Linear Horizon is a specialist applied AI engineering company: we teach AI, design it, build it and provide the technology to run it.',
    kicker: '06 / About',
    headline: 'A specialist applied AI engineering company.',
    intro: [
      'Linear Horizon helps organisations understand, design and deploy artificial intelligence — through training, consultancy, production engineering and our own agentic products.',
    ],
    body: [
      'The same practice trains your people, designs the system, delivers it into production, and provides reusable technology where the problem already has a product shape. You can engage at any point.',
      'Services — Train, Advise, Build — are how we work closely with you. Products — Platform, Stack, Wargame, Funnel and Callcenter — are technology we have already built, so not every engagement starts from scratch.',
      'We work with senior engineers, architects, and the leaders who have to make decisions they will still own in two years.',
      'Nicholas has a BSc in Artificial Intelligence and over twenty five years active coding, technical workshops and professional technology training. He has delivered hundreds of technical courses for engineering teams worldwide.',
    ],
  },
  {
    path: '/work',
    title: 'Client Projects & Case Studies | Linear Horizon',
    description:
      'Selected client projects designed and built by Linear Horizon — production AI and agentic systems, described by problem and outcome.',
    kicker: '07 / Work',
  },
  {
    path: '/insights',
    title: 'Insights',
    description: 'Notes from Linear Horizon on applied AI, architecture, and putting systems into production.',
    kicker: '07 / Insights',
    headline: 'From the practice.',
    intro: ['Short notes on the gap between learning about AI and putting it into production.'],
  },
  {
    path: '/contact',
    title: 'Contact',
    description:
      'Talk to us about training, consulting, a bespoke system, or a Platform, Stack, Wargame, Funnel or Callcenter deployment.',
    kicker: '08 / Contact',
    headline: 'Talk to us.',
    intro: [
      'Tell us briefly about your organisation and the problem. The form opens a conversation in Callcenter.',
    ],
  },
];
