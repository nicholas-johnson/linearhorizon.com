export const site = {
  name: 'Linear Horizon',
  legalName: 'Linear Horizon',
  descriptor: 'Applied intelligence',
  line: 'From complexity to outcome.',
  email: 'hello@linearhorizon.com',
  url: 'https://linearhorizon.com',
  description:
    'Linear Horizon helps organisations understand, design and deploy artificial intelligence — through training, consultancy, production engineering and our own agentic products.',
  eyebrow: 'Applied intelligence for real organisations',
  hero: 'From complexity to outcome.',
  support:
    'Linear Horizon understands how work actually happens, identifies the points of friction, and builds intelligent systems that turn insight into action.',
  sub: 'We work with organisations that need AI to do real work, not sit in a demonstration. That means training your people, designing the system properly, and taking it into production.',
  spine: 'We teach AI, design it, build it, and provide the technology to run it.',
  why: 'Linear Horizon closes the gap between understanding AI and using it — to do real work, analyse real evidence, and make better decisions.',
} as const;

export const founder = {
  name: 'Nicholas Johnson',
  role: 'AI architect and software engineer',
  linkedin: 'https://www.linkedin.com/in/nicholashowardjohnson/',
} as const;

export const nav = [
  { href: '/training', label: 'Training' },
  { href: '/consulting', label: 'Consulting' },
  { href: '/build', label: 'Build' },
  { href: '/products', label: 'Products' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
] as const;

export const pillars = [
  {
    id: '01',
    href: '/training',
    title: 'Train',
    kicker: 'TRAIN',
    lede: 'Build AI capability inside your organisation.',
    body: 'Technical training led by practitioners, grounded in real engineering experience.',
  },
  {
    id: '02',
    href: '/consulting',
    title: 'Advise',
    kicker: 'ADVISE',
    lede: 'Work out what to build — and how to build it properly.',
    body: 'Strategy, discovery and architecture from people who still work with the underlying technology.',
  },
  {
    id: '03',
    href: '/build',
    title: 'Build',
    kicker: 'BUILD',
    lede: 'Take AI into production.',
    body: 'Agents, RAG, intelligent applications and bespoke AI systems designed around real organisational requirements.',
  },
] as const;

export const credibility = [
  {
    id: '01',
    title: 'Training',
    body: 'More than twenty years of professional technology training — experience in the work, not the age of the company.',
  },
  {
    id: '02',
    title: 'Courses',
    body: 'Hundreds of technical courses delivered for engineering teams and large organisations.',
  },
  {
    id: '03',
    title: 'Engineering',
    body: 'Deep software engineering and architecture experience, including senior and principal work.',
  },
  {
    id: '04',
    title: 'AI',
    body: 'A formal academic background in Artificial Intelligence.',
  },
  {
    id: '05',
    title: 'Production',
    body: 'Hands-on delivery of production systems, including applied AI.',
  },
] as const;

export const journey = [
  {
    id: '01',
    title: 'Learn',
    body: 'Build shared language and judgement — training that holds up in an engineering room, not just a product demonstration.',
  },
  {
    id: '02',
    title: 'Discover',
    body: 'Establish where AI is genuinely useful, what the constraints are, and what a good outcome would look like.',
  },
  {
    id: '03',
    title: 'Prototype',
    body: 'Prove the shape of the system against real data, interfaces and failure modes — before committing the organisation.',
  },
  {
    id: '04',
    title: 'Production',
    body: 'Design, integrate and ship — with the people who will own the system staying involved throughout.',
  },
] as const;

export const capabilities = [
  { id: '01', title: 'Generative AI and LLMs' },
  { id: '02', title: 'Applied AI for engineers' },
  { id: '03', title: 'RAG and agentic RAG' },
  { id: '04', title: 'AI agents and workflows' },
  { id: '05', title: 'AI architecture' },
  { id: '06', title: 'Workshops and discovery' },
  { id: '07', title: 'Model integration' },
  { id: '08', title: 'Production systems' },
] as const;

export const trainingAudiences = [
  {
    id: '01',
    slug: 'engineers',
    title: 'Engineering teams',
    body: 'Software engineers who need to design, evaluate and integrate AI into real systems — as part of the stack, not a side project.',
  },
  {
    id: '02',
    slug: 'leaders',
    title: 'Technical leaders',
    body: 'Architects, principals and engineering managers who have to set the conditions and still own the result.',
  },
  {
    id: '03',
    slug: 'organisations',
    title: 'Organisations',
    body: 'Executive and mixed rooms: a clear picture of what AI can and cannot do in your organisation, without the hype.',
  },
] as const;

export const trainingTopics = [
  { id: '01', title: 'Generative AI and LLMs' },
  { id: '02', title: 'Applied AI' },
  { id: '03', title: 'AI for software engineers' },
  { id: '04', title: 'Building with LLMs' },
  { id: '05', title: 'RAG and agentic RAG' },
  { id: '06', title: 'AI agents and agentic systems' },
  { id: '07', title: 'AI architecture' },
  { id: '08', title: 'Model training and adaptation' },
  { id: '09', title: 'Bespoke technical training' },
  { id: '10', title: 'Executive and technical workshops' },
] as const;

export const consultingServices = [
  {
    id: '01',
    title: 'AI strategy',
    body: 'Where AI belongs in the organisation, and where it does not.',
  },
  {
    id: '02',
    title: 'Discovery workshops',
    body: 'Opportunity and constraint, discussed with the people who will have to live with the outcome.',
  },
  {
    id: '03',
    title: 'Technical architecture',
    body: 'System shape: data, models, interfaces, ownership and failure modes.',
  },
  {
    id: '04',
    title: 'AI readiness',
    body: 'Whether the organisation, the data and the engineering practice can actually support the work.',
  },
  {
    id: '05',
    title: 'Solution design',
    body: 'A design that can actually be built — not a presentation that cannot.',
  },
  {
    id: '06',
    title: 'Model selection',
    body: 'LLM and model choices against the actual constraints: cost, latency, control and data.',
  },
  {
    id: '07',
    title: 'RAG architecture',
    body: 'Retrieval that is honest about what the corpus is, and what the system should refuse.',
  },
  {
    id: '08',
    title: 'Agentic system design',
    body: 'Agents as software: tools, boundaries, evaluation, and the places they should not act.',
  },
  {
    id: '09',
    title: 'Security and production',
    body: 'The considerations that decide whether a prototype can leave the lab.',
  },
  {
    id: '10',
    title: 'Proof-of-concept planning',
    body: 'A bounded experiment with a pass/fail that the organisation will actually accept.',
  },
] as const;

export const buildOfferings = [
  { id: '01', title: 'AI agents' },
  { id: '02', title: 'Agentic workflows' },
  { id: '03', title: 'Agentic RAG' },
  { id: '04', title: 'Enterprise RAG' },
  { id: '05', title: 'Knowledge assistants' },
  { id: '06', title: 'Chatbots and copilots' },
  { id: '07', title: 'AI-powered applications' },
  { id: '08', title: 'Model integration' },
  { id: '09', title: 'Model training and adaptation' },
  { id: '10', title: 'Enterprise integration' },
] as const;

export const interests = [
  { value: 'train', label: 'Training' },
  { value: 'ai-engineering', label: 'AI Engineering with Python' },
  { value: 'applied-nlp', label: 'Applied NLP with Python' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'build', label: 'Bespoke build' },
  { value: 'platform', label: 'Platform' },
  { value: 'stack', label: 'Stack' },
  { value: 'wargame', label: 'Wargame' },
  { value: 'funnel', label: 'Funnel' },
  { value: 'callcenter', label: 'Callcenter' },
  { value: 'query', label: 'Query' },
  { value: 'chat', label: 'Chat' },
  { value: 'other', label: 'Something else' },
] as const;

export const interestAliases: Record<string, string> = {
  advise: 'consulting',
  unsure: 'other',
};

export const layers = [
  {
    id: '01',
    title: 'Understand AI',
    body: 'Build the language and judgement your team needs before it designs a system.',
  },
  {
    id: '02',
    title: 'Decide what to build',
    body: 'Identify where AI is useful, what the architecture should be, and what good looks like.',
  },
  {
    id: '03',
    title: 'Deploy working systems',
    body: 'Take a design into production against real data, interfaces and ownership.',
  },
  {
    id: '04',
    title: 'Accelerate with products',
    body: 'Use existing Linear Horizon technology where the problem already has a product shape.',
  },
] as const;

export const reinforcement = [
  {
    id: '01',
    kicker: 'TRAIN',
    title: 'Teams understand the technology',
    href: '/training',
  },
  {
    id: '02',
    kicker: 'ADVISE',
    title: 'Identify opportunities and architecture',
    href: '/consulting',
  },
  {
    id: '03',
    kicker: 'BUILD',
    title: 'Implement bespoke systems',
    href: '/build',
  },
  {
    id: '04',
    kicker: 'PRODUCTS',
    title: 'Accelerate using reusable Linear Horizon technology',
    href: '/products',
  },
] as const;

export const engagementStarts = [
  { title: 'Book a training programme', href: '/training' },
  { title: 'Bring Linear Horizon in for AI architecture', href: '/consulting' },
  { title: 'Read the Claude adoption whitepaper', href: '/whitepapers/four-stages-of-claude-adoption' },
  { title: 'Commission a bespoke application', href: '/build' },
  { title: 'Deploy a Linear Horizon product', href: '/products' },
  { title: 'Customise Platform around a specific workflow', href: '/products/platform' },
  { title: 'Connect Stack to an analytical environment', href: '/products/stack' },
  { title: 'Use Wargame for a strategic decision process', href: '/products/wargame' },
  { title: 'Use Funnel to research and qualify a market', href: '/products/funnel' },
  { title: 'Use Callcenter for agentic customer service', href: '/products/callcenter' },
  { title: 'Compare Claude, Grok Bot and Linear Horizon', href: '/compare' },
] as const;

export function currentPath(pathname: string) {
  return pathname.replace(/\/$/, '') || '/';
}

export function isActivePath(path: string, href: string) {
  if (href === '/') return path === '/';
  return path === href || path.startsWith(`${href}/`);
}
