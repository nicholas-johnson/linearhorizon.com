export type CompareSubjectId = 'claude' | 'grok' | 'lh';

export interface CompareSubject {
  id: CompareSubjectId;
  name: string;
  vendor: string;
  verb: string;
  category: string;
  oneLiner: string;
  body: string;
  href?: string;
}

export interface CompareRow {
  id: string;
  label: string;
  claude: string;
  grok: string;
  lh: string;
}

export const comparePage = {
  kicker: '05 / Products',
  label: 'Compare',
  headline: 'A general agent is not an organisational system.',
  support:
    'Claude Cowork and Grok Bot are excellent at letting a person hand off work. Linear Horizon is for when that work has to become a system other people can operate.',
  seoTitle: 'Claude Cowork vs Grok Bot vs Linear Horizon',
  seoDescription:
    'How Claude Cowork, Grok Bot and Linear Horizon differ. Claude and Grok Bot are general-purpose agents. Linear Horizon is a set of organisational systems — with specialist products, inspectable state and human gates.',
  asOf: 'September 2026',
  note: 'Claude here means Claude Cowork, Anthropic’s agentic workspace — not Claude Chat. Grok Bot is xAI’s persistent-agent product, not Grok chat. Linear Horizon can use Claude or Grok as models. This page compares the agent products, not the models.',
} as const;

export const subjects: CompareSubject[] = [
  {
    id: 'claude',
    name: 'Claude Cowork',
    vendor: 'Anthropic',
    verb: 'Hand off',
    category: 'Agentic workspace',
    oneLiner:
      'You give Claude a goal. It works across files, a browser and connectors, and comes back with work for review.',
    body: 'Cowork is where you hand Claude knowledge work: research, analysis, documents, spreadsheets and decks. It uses the same agentic approach as Claude Code, aimed at work that is not primarily writing software. You define the outcome. Claude figures out how to get there.',
  },
  {
    id: 'grok',
    name: 'Grok Bot',
    vendor: 'xAI',
    verb: 'Delegate',
    category: 'Persistent teammates',
    oneLiner:
      'Named teammates with a computer of their own. They sign into the tools you already use, keep working when you close the laptop, and coordinate with each other.',
    body: 'A Bot is a persistent, named agent. It runs on a cloud computer with a browser, filesystem and terminal. It can use connectors where they exist, and computer use where they do not. Context compounds. Routines start work without a new prompt.',
  },
  {
    id: 'lh',
    name: 'Linear Horizon',
    vendor: 'Linear Horizon',
    verb: 'Operate',
    category: 'Organisational systems',
    oneLiner:
      'Platform plus specialist applications. The workflow is encoded. State is inspectable. High-value actions remain a human decision.',
    body: 'Linear Horizon is not a personal agent you prompt. It is a foundation for agentic systems, and a set of products that apply that foundation to analysis, strategy, growth and customer service — with training, architecture and delivery as the same practice.',
    href: '/products',
  },
];

export const compareRows: CompareRow[] = [
  {
    id: 'purpose',
    label: 'Purpose',
    claude: 'Hand Claude knowledge work',
    grok: 'Give persistent teammates real work',
    lh: 'Run agentic systems around organisational work',
  },
  {
    id: 'starts',
    label: 'How work starts',
    claude: 'A goal',
    grok: 'A message to a named Bot, or a routine',
    lh: 'A defined process, an event, an ICP, a case',
  },
  {
    id: 'runs',
    label: 'Where it runs',
    claude: 'Folders you choose, a built-in browser, connectors, optional computer use',
    grok: 'A persistent cloud computer — browser, filesystem, terminal, your existing apps',
    lh: 'Your organisation’s systems, as a deployed service',
  },
  {
    id: 'returns',
    label: 'What you get back',
    claude: 'Documents, spreadsheets, research, decks',
    grok: 'Finished work in the tools you already use',
    lh: 'Inspectable records, queues and governed actions',
  },
  {
    id: 'persists',
    label: 'What persists',
    claude: 'Projects, skills, plugins and scheduled tasks',
    grok: 'Named Bots, memory, files, logins and a shared computer',
    lh: 'Domain objects: opportunities, cases, scenarios, conversations',
  },
  {
    id: 'human',
    label: 'Human role',
    claude: 'Review and redirect the task',
    grok: 'Approve when the Bot asks',
    lh: 'Encoded gates — approve, escalate, take over',
  },
  {
    id: 'team',
    label: 'Team',
    claude: 'You, or your Claude organisation',
    grok: 'A roster of Bots; enterprise admin around that roster',
    lh: 'Shared workspaces, roles and an activity log',
  },
  {
    id: 'models',
    label: 'Models',
    claude: 'Claude — or Claude via Bedrock, Vertex or Foundry',
    grok: 'Grok',
    lh: 'The models you choose, including Claude or Grok',
  },
  {
    id: 'obtained',
    label: 'How you get it',
    claude: 'Self-serve: Pro, Max, Team, Enterprise',
    grok: 'Included with paid Cursor plans, or SuperGrok',
    lh: 'An engagement: deploy, adapt, or combine with services',
  },
];

export const operatingModels = [
  {
    id: 'claude',
    name: 'Claude Cowork',
    steps: [
      { id: '01', title: 'Goal' },
      { id: '02', title: 'Files, browser, tools' },
      { id: '03', title: 'Deliverable for review' },
    ],
  },
  {
    id: 'grok',
    name: 'Grok Bot',
    steps: [
      { id: '01', title: 'Named teammate' },
      { id: '02', title: 'Cloud computer' },
      { id: '03', title: 'Work in your apps' },
    ],
  },
  {
    id: 'lh',
    name: 'Linear Horizon',
    steps: [
      { id: '01', title: 'Encoded process' },
      { id: '02', title: 'Specialist agents' },
      { id: '03', title: 'Inspectable record' },
      { id: '04', title: 'Human gate' },
    ],
    result: true,
  },
] as const;

export const overlap = [
  {
    id: '01',
    title: 'Research',
    body: 'All three can investigate a company, a document set or a question that spans several sources.',
  },
  {
    id: '02',
    title: 'Drafting',
    body: 'All three can prepare outreach, a briefing or a first-pass analysis for a person to edit.',
  },
  {
    id: '03',
    title: 'Scheduled work',
    body: 'Cowork has scheduled tasks. Grok Bot has routines. Linear Horizon runs discovery, research and follow-up as services.',
  },
  {
    id: '04',
    title: 'Action in tools',
    body: 'Cowork and Grok Bot can work in a browser and in connected apps. Linear Horizon acts through integrations and constrained tools around systems you already run.',
  },
  {
    id: '05',
    title: 'Specialisation',
    body: 'Cowork has skills, plugins and sub-agents. Grok Bot learns paths and coordinates a roster. Linear Horizon ships specialist products with a domain model already in place.',
  },
  {
    id: '06',
    title: 'Human review',
    body: 'None of these products is a reason to remove judgement from high-value work. The difference is whether review is a task you remember to do, or a gate the system will not pass.',
  },
] as const;

export const distinctions = [
  {
    id: '01',
    title: 'A system of record',
    body: 'Cowork and Grok Bot leave files, chats and artifacts. Linear Horizon leaves objects a team can query: an opportunity with evidence, a case with a conversation, a scenario with an actor model.',
  },
  {
    id: '02',
    title: 'The workflow is encoded',
    body: 'A general agent improvises a path each time, or follows a skill you wrote. Funnel, Stack, Wargame and Callcenter have a closed process, typed outputs and state transitions. That is the difference between a capable run and a system you can operate.',
  },
  {
    id: '03',
    title: 'Shared work, not a personal roster',
    body: 'A reviewer can open the same opportunity queue as a colleague. Roles, isolation and an activity log are part of the product, not a side-effect of who owns the laptop.',
  },
  {
    id: '04',
    title: 'Gates in the domain',
    body: 'Funnel drafts; it does not send as a matter of product principle. Callcenter hands off with context. Suppression, escalation and approval are rules, not a prompt you hope the agent follows.',
  },
  {
    id: '05',
    title: 'Specialist products for specific work',
    body: 'Prospecting, analysis, strategy under uncertainty, and customer service are not the same job. Linear Horizon has products for those jobs, rather than one general teammate asked to pretend it has a pipeline.',
  },
  {
    id: '06',
    title: 'The same practice trains, designs and ships',
    body: 'Claude and Grok Bot are software you adopt. Linear Horizon is also training, architecture and production engineering. You can deploy a product, adapt it, or build beside it. You should not be forced into a single path.',
  },
] as const;

export const whenToUse = [
  {
    id: '01',
    subject: 'Claude Cowork',
    title: 'When the work is knowledge work for a person.',
    body: 'Research a pack of contracts. Build Monday’s readout. Organise a folder. Draft a memo from call notes. You want a capable general agent, a clear review loop, and files you already have.',
  },
  {
    id: '02',
    subject: 'Grok Bot',
    title: 'When the work should live in the apps you already use.',
    body: 'A teammate that keeps going overnight, signs into tools that have no clean API, coordinates with other Bots, and comes back when a decision is required. Especially useful when the computer, not the chat, is the point.',
  },
  {
    id: '03',
    subject: 'Linear Horizon',
    title: 'When the work has to become a system.',
    body: 'A team needs a queue, not a transcript. The process has a product shape — Funnel, Stack, Wargame, Callcenter — or needs Platform underneath. Contact, escalation and send cannot be left to whoever remembered to check. You also need people who can teach, design and ship it.',
  },
] as const;

export const together = {
  caption: 'They are not mutually exclusive',
  title: 'Use a general agent for knowledge work. Use Linear Horizon for the operational pipeline.',
  body: 'A skilled operator can approximate some Linear Horizon research with Cowork or Grok Bot. What they will not get, without building a product, is a durable, multi-user, governed workflow. Many organisations will use both: Claude or Grok Bot on the desk, Linear Horizon on the process.',
} as const;

export const limits = [
  'This is a comparison of product shape, not a model benchmark. We do not claim that Linear Horizon out-reasons Claude or Grok on a single task.',
  'On one-off research, drafting and work inside existing SaaS interfaces, Cowork and Grok Bot are often faster to start. That is their job.',
  'Linear Horizon is not a consumer desktop agent. It is not a substitute for Claude Chat, Claude Code, or a personal Grok Bot roster.',
  'Linear Horizon products are delivered as engagements rather than self-serve seats. That is a genuine difference, not a slogan for exclusivity.',
  'Public agent products move quickly. The descriptions above follow how Anthropic and xAI describe Cowork and Grok Bot. They are not a complete catalogue of either product.',
] as const;

export const faqs = [
  {
    question: 'Is Linear Horizon more capable than Claude or Grok Bot?',
    answer:
      'Not as a general agent. On a single research or drafting job, Cowork and Grok Bot are often the faster way to start. Linear Horizon is for when the work has to become an inspectable, multi-user system with encoded gates — not for winning a one-off prompt.',
  },
  {
    question: 'Can Claude or Grok Bot do sales prospecting?',
    answer:
      'They can research accounts and draft outreach. They do not give you a shared pipeline with an ideal customer profile, evidence records, scoring, suppression and approval as a system of record. That is what Funnel is.',
  },
  {
    question: 'Can Linear Horizon use Claude or Grok models?',
    answer:
      'Yes. Platform is model-agnostic. Claude and Grok are also models. This page compares Claude Cowork and Grok Bot as agent products with Linear Horizon as a system.',
  },
  {
    question: 'Do we have to pick one?',
    answer:
      'No. Use a general agent for personal and team knowledge work. Use Linear Horizon where the organisation needs a governed process — or training and architecture before that process exists.',
  },
] as const;
