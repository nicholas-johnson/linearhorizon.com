export type ProductSlug =
  | "platform"
  | "stack"
  | "solve"
  | "wargame"
  | "funnel"
  | "callcenter"
  | "query"
  | "chat";
export type ProductTier = "foundation" | "application";

export interface ProductLink {
  label: string;
  href: string;
}

export interface ProductCapability {
  id: string;
  title: string;
  body: string;
}

export interface ProductUseCase {
  id: string;
  title: string;
  problem: string;
  approach: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  body?: string;
}

export interface Product {
  slug: ProductSlug;
  name: string;
  fullName: string;
  tier: ProductTier;
  domain: string;
  category: string;
  verb: string;
  intelligence: string;
  framing: string;
  shortDescription: string;
  landingLine: string;
  headline: string;
  support: string;
  overview: string[];
  seoTitle: string;
  seoDescription: string;
  primaryCta: ProductLink;
  secondaryCta: ProductLink;
  closingQuestion: string;
  capabilities: ProductCapability[];
  useCases: ProductUseCase[];
  process: ProcessStep[];
  limits: string[];
}

export const productFamily = {
  kicker: "Linear Horizon Products",
  headline: "Agentic systems for real organisational work.",
  support:
    "Linear Horizon Platform provides the foundation. Specialist products then apply agentic AI to analysis, research, strategy, growth and customer service.",
  model: "Foundation. Applications.",
} as const;

export const comparison = [
  {
    id: "purpose",
    label: "Purpose",
    platform: "Run agentic systems",
    stack: "Investigate your data",
    solve: "Search programmes of attack on a hard claim",
    wargame: "Predict the future",
    funnel: "Find customers",
    callcenter: "Serve customers",
    query: "Measure product usage",
    chat: "Talk to your agents",
  },
  {
    id: "input",
    label: "Input",
    platform: "Events, requests, knowledge and tools",
    stack: "Open-ended questions and organisational data",
    solve: "A conjecture, modelling question or precise statement",
    wargame: "Strategic problem and actor model",
    funnel: "ICP and market signals",
    callcenter: "Voice, messaging, email and customer context",
    query: "Product and website events",
    chat: "A question, an agent and a conversation",
  },
  {
    id: "process",
    label: "Agentic process",
    platform: "Orchestration, tools and workflows",
    stack: "Hypothesis generation and testing",
    solve: "Choose, expand, evaluate",
    wargame: "Actor modelling and simulation",
    funnel: "Discovery, research and qualification",
    callcenter: "Understand, retrieve, act, resolve or hand off",
    query: "Instrument, measure and investigate",
    chat: "Route, retrieve, act and stream",
  },
  {
    id: "output",
    label: "Output",
    platform: "Agentic workflows and actions",
    stack: "Evidence, analysis, visualisations and presentations",
    solve: "A scored tree of attack programmes",
    wargame: "Scenario distributions and strategic options",
    funnel: "Evidence-backed opportunities",
    callcenter: "Resolution, action or context-rich human escalation",
    query: "Metrics, cohorts and investigated findings",
    chat: "A streamed answer with its working shown",
  },
  {
    id: "channels",
    label: "Channels",
    platform: "Events, APIs and operational interfaces",
    stack: "Analytical environments and presentations",
    solve: "Research chat, node agents, run controls",
    wargame: "Strategic briefs and simulation outputs",
    funnel: "Research sources and approved outreach",
    callcenter: "Voice, WhatsApp, SMS, email, Teams, Slack, Salesforce",
    query: "Dashboards, event API and MCP",
    chat: "Web chat, voice and token streaming",
  },
  {
    id: "human",
    label: "Human role",
    platform: "Oversight and escalation",
    stack: "Review and interpretation",
    solve: "Start, pause, stop; review scores and what remains open",
    wargame: "Assumption review and strategic judgement",
    funnel: "Approval and relationship building",
    callcenter: "Judgement, takeover and the work that still needs a person",
    query: "Interpretation and prioritisation",
    chat: "The person asking, and taking over when needed",
  },
] as const;

export const products: Product[] = [
  {
    slug: "platform",
    name: "Platform",
    fullName: "Linear Horizon Platform",
    tier: "foundation",
    domain: "Infrastructure",
    category: "Agentic Infrastructure",
    verb: "Act",
    intelligence: "Operational intelligence",
    framing: "Agents that act",
    shortDescription:
      "An agent harness and runtime for deploying teams of AI agents around the work your organisation already does.",
    landingLine: "Build and run agentic systems.",
    headline: "Agents that can actually do the work.",
    support:
      "Linear Horizon Platform orchestrates teams of agents, tools, RAG pipelines and workflows around the processes you already run — with permission boundaries, escalation and production controls.",
    overview: [
      "Platform is an agent harness and runtime. It provides the reusable infrastructure needed to put specialist agent teams into organisational work: orchestration, tools, workflows, retrieval, memory, routing, integration and the operational controls that decide whether a system can leave a prototype.",
      "A chatbot can be one interface to Platform, but the product is broader than chat. Its function is to let agents operate inside your organisation with access to the appropriate tools, knowledge and workflows — and to stop, ask or escalate when the work exceeds a defined boundary.",
      "You can build customer support, knowledge assistants and operational agents on a common production-ready foundation, adapted to the systems you already run rather than replacing them.",
    ],
    seoTitle: "Platform | Agentic Infrastructure | Linear Horizon",
    seoDescription:
      "Linear Horizon Platform is an agent harness and runtime for deploying teams of AI agents around organisational work — with tools, RAG, workflows, escalation and production controls.",
    primaryCta: {
      label: "Discuss a deployment",
      href: "/contact?interest=platform",
    },
    secondaryCta: { label: "Explore capabilities", href: "#capabilities" },
    closingQuestion:
      "Have a workflow that could benefit from agentic automation?",
    capabilities: [
      {
        id: "01",
        title: "Multi-agent orchestration",
        body: "Route work across specialist agents that share context, hand off tasks and remain inside defined roles.",
      },
      {
        id: "02",
        title: "RAG pipelines",
        body: "Retrieve from approved knowledge sources, construct grounded context, and cite what was used.",
      },
      {
        id: "03",
        title: "Tool integration",
        body: "Give agents constrained access to the tools required to inspect state and take authorised actions.",
      },
      {
        id: "04",
        title: "Workflow execution",
        body: "Run multi-step processes rather than isolated replies: classify, retrieve, act, record and escalate.",
      },
      {
        id: "05",
        title: "Memory and context",
        body: "Keep the context a task actually needs, so the next step does not start from a blank page.",
      },
      {
        id: "06",
        title: "Human-in-the-loop",
        body: "Escalate complex, ambiguous or high-risk cases to people, with a summary of what the system already did.",
      },
      {
        id: "07",
        title: "Permission-aware access",
        body: "Respect your identity and access model. Agents see what the user is allowed to see.",
      },
      {
        id: "08",
        title: "System integrations",
        body: "Connect to the line-of-business systems, APIs and knowledge bases you already use.",
      },
      {
        id: "09",
        title: "Evaluation",
        body: "Measure whether the system is doing the job: groundedness, routing quality, task completion and appropriate refusal.",
      },
      {
        id: "10",
        title: "Observability",
        body: "Trace what an agent retrieved, which tools it called, and why a case was escalated.",
      },
      {
        id: "11",
        title: "Guardrails",
        body: "Constrain tools, topics and actions. The system should refuse when the request is outside policy.",
      },
      {
        id: "12",
        title: "Deployment controls",
        body: "Promote agent systems into production with the same seriousness as any other operational service.",
      },
    ],
    useCases: [
      {
        id: "01",
        title: "Customer support",
        problem:
          "Support desks accumulate the same questions, the same account lookups and the same routing decisions. Knowledge is scattered, context is lost between channels, and experienced agents spend time on work that is repetitive rather than judgement-heavy.",
        approach:
          "Platform can operate a support desk as a governed agent system: answer from approved knowledge, inspect account information through authorised tools, classify issues, route work, recommend or execute defined actions, retain relevant context, and produce summaries for human agents. Complex or high-risk cases escalate. The aim is controlled autonomy, with a person in the path where the work needs judgement. For contact-centre work specifically, Callcenter applies the same agentic principles to voice, messaging and human handoff.",
      },
      {
        id: "02",
        title: "Enterprise assistants",
        problem:
          "Internal and external conversational interfaces often stop at a fluent answer. They cannot retrieve the right document, call the right system, or respect who is asking.",
        approach:
          "Platform can power an internal or external assistant that answers from approved sources, retrieves and cites documentation, accesses tools, performs authorised actions, and orchestrates specialist agents behind a single interface. The conversation is the visible layer; the agent system behind it is what does the work.",
      },
      {
        id: "03",
        title: "Investor intelligence",
        problem:
          "Investor relations and internal performance questions require documents, metrics and narrative to be held together. The work is slow when every question starts a new search across filings, packs and systems.",
        approach:
          "Platform can retrieve company information, analyse documents, compare reported metrics, interpret filings and internal data, and surface supporting evidence in a context-aware response. This is investor information and analytical support — not automated financial advice.",
      },
      {
        id: "04",
        title: "Operational automation",
        problem:
          "Many internal processes are already structured — a request arrives, information is gathered, a decision is prepared, a system is updated — but the work still sits in inboxes.",
        approach:
          "Platform can take those multi-step processes and execute the parts that are well-defined: gather context, call tools, advance a workflow, and stop for a person when the next action needs judgement or authority.",
      },
      {
        id: "05",
        title: "Internal knowledge systems",
        problem:
          "IT, HR, procurement, compliance and research teams maintain large bodies of policy and precedent that people cannot search well, and that a generic chatbot will flatten.",
        approach:
          "Platform can sit in front of those corpora as a permission-aware knowledge system: retrieve the relevant material, keep the answer inside policy, and hand the case to a specialist when retrieval is not enough.",
      },
    ],
    process: [
      { id: "01", title: "User / Event / System" },
      { id: "02", title: "Agent Router" },
      { id: "03", title: "Agent Team" },
      { id: "04", title: "Tools / Workflows / RAG / Memory" },
      { id: "05", title: "Enterprise Systems + Knowledge" },
      { id: "06", title: "Escalation / Observability / Governance" },
    ],
    limits: [
      "Permission boundaries matter. Agents operate inside your organisation’s identity and access model.",
      "Human escalation matters. Ambiguous, high-risk or out-of-policy work should reach a person.",
      "Operational controls matter. Retrieval, tools, evaluation and monitoring are part of the system, not extras you add later.",
    ],
  },
  {
    slug: "stack",
    name: "Stack",
    fullName: "Linear Horizon Stack",
    tier: "application",
    domain: "Analysis",
    category: "Agentic Data Analysis",
    verb: "Understand",
    intelligence: "Analytical intelligence",
    framing: "Agents that analyse",
    shortDescription:
      "An agentic data analysis system that investigates open-ended questions, tests hypotheses and produces a structured analytical deliverable.",
    landingLine: "Ask open-ended questions of your data.",
    headline: "Ask the question. Let Stack investigate.",
    support:
      "Stack connects to your analytical data, forms hypotheses, tests them against the evidence and turns its findings into a structured analysis — including charts, narrative and a finished presentation.",
    overview: [
      "Stack is an agentic data analysis system. You point it at organisational data — a data lake, warehouse or analytical environment — and ask an open-ended question.",
      "It does not simply translate that question into one SQL query. It behaves more like an analytical team: interpret the question, inspect the available data, form hypotheses, test those that can be tested, compare evidence, reject weak explanations, refine the analysis, and decide how the findings should be communicated.",
      "Traditional BI asks what the dashboard shows. Stack asks what might be happening, and what evidence supports that reading. The result is an investigative workflow, not a guaranteed account of the truth.",
    ],
    seoTitle: "Stack | Agentic Data Analysis | Linear Horizon",
    seoDescription:
      "Linear Horizon Stack is an agentic data analysis system. Ask an open-ended question; Stack investigates hypotheses, tests them against the evidence and produces structured analysis and presentations.",
    primaryCta: { label: "Discuss your data", href: "/contact?interest=stack" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    closingQuestion:
      "Have an open-ended question you would like Stack to investigate?",
    capabilities: [
      {
        id: "01",
        title: "Hypothesis generation",
        body: "Turn an open-ended question into a set of candidate explanations that can be investigated.",
      },
      {
        id: "02",
        title: "Hypothesis testing",
        body: "Run analyses that strengthen or weaken those explanations against the available data.",
      },
      {
        id: "03",
        title: "Follow-up analysis",
        body: "Pursue the lines of enquiry that survive the first pass, and drop those that do not.",
      },
      {
        id: "04",
        title: "Comparison",
        body: "Place segments, periods, regions and products next to each other so differences are visible.",
      },
      {
        id: "05",
        title: "Statistical evidence",
        body: "Use quantitative support where the data and the question justify it — without dressing noise as proof.",
      },
      {
        id: "06",
        title: "Anomalies and trends",
        body: "Surface breaks, outliers and movements that a fixed dashboard may never be asked to show.",
      },
      {
        id: "07",
        title: "Segmentation",
        body: "Separate the groups that actually moved from the averages that hide them.",
      },
      {
        id: "08",
        title: "Presentation intelligence",
        body: "Choose findings, charts and sequence so the output is an argument a person can follow, not a pile of slides.",
      },
    ],
    useCases: [
      {
        id: "01",
        title: "Commercial performance",
        problem:
          "Revenue, margin and mix questions are rarely answered by a single chart. The useful question is what changed, where, and what else moved with it.",
        approach:
          "Stack can investigate performance across products, regions, channels and time, then assemble the evidence into a narrative your commercial team can review.",
      },
      {
        id: "02",
        title: "Customer behaviour",
        problem:
          "Retention, churn and conversion shifts often have several plausible causes. Dashboards show the metric; they do not run the investigation.",
        approach:
          "Point Stack at the relevant customer and event data and ask what appears to have changed. You can then review the hypotheses it tested and the ones it discarded.",
      },
      {
        id: "03",
        title: "Operational analysis",
        problem:
          "Inefficiency is easy to feel and hard to locate. The work is finding where time, cost or failure actually concentrates.",
        approach:
          "Stack can look across operational measures, compare units and time periods, and surface the patterns that deserve a closer look from your team.",
      },
      {
        id: "04",
        title: "Marketing effectiveness",
        problem:
          "Campaign, channel and creative questions are usually asked after the fact, against incomplete attribution and too many cuts of the data.",
        approach:
          "Stack investigates the cuts that the question implies, reports what the data can support, and is clear where the evidence is too thin.",
      },
      {
        id: "05",
        title: "Financial analysis",
        problem:
          "A movement in profitability has a list of usual suspects — price, mix, cost, volume — and the work is deciding which of them the data actually supports.",
        approach:
          "Stack can walk that list as an investigation, then produce a reviewable pack rather than a single unexplained variance line.",
      },
      {
        id: "06",
        title: "Product analytics",
        problem:
          "Product teams need to know which behaviours changed, not only which dashboard tile went red.",
        approach:
          "Ask what changed before a drop in activation, engagement or conversion, and review the evidence Stack assembled.",
      },
      {
        id: "07",
        title: "Executive reporting",
        problem:
          "Leadership packs take time because someone has to decide what matters, what to show, and in what order.",
        approach:
          "Stack can draft that argument from the data — findings, charts, sequence — for someone on your team to accept, edit or reject.",
      },
      {
        id: "08",
        title: "Investor reporting",
        problem:
          "Explaining a period to investors or a board requires a coherent account, not a warehouse of charts.",
        approach:
          "Stack can assemble a structured reading of the period. The reading remains a draft for professional review, not a statement of record on its own.",
      },
    ],
    process: [
      { id: "01", title: "Question" },
      { id: "02", title: "Understand data" },
      { id: "03", title: "Form hypotheses" },
      { id: "04", title: "Test hypotheses" },
      { id: "05", title: "Refine analysis" },
      { id: "06", title: "Select evidence" },
      { id: "07", title: "Visualise" },
      { id: "08", title: "Build narrative" },
      { id: "09", title: "Generate presentation" },
    ],
    limits: [
      "Hypotheses can be wrong. The system is designed to test them, not to declare them true.",
      "Data quality matters. Missing fields, biased samples and broken joins will shape the result.",
      "Findings require evidence. Where the data cannot support a claim, the analysis should say so.",
      "Human review remains valuable. Generated analyses are drafts for professional judgement.",
    ],
  },
  {
    slug: "solve",
    name: "Solve",
    fullName: "Linear Horizon Solve",
    tier: "application",
    domain: "Research",
    category: "Agentic Hard-Problem Research",
    verb: "Solve",
    intelligence: "Research intelligence",
    framing: "Agents that reason",
    shortDescription:
      "An unattended problem solver: each tree node is axioms, reasoning and an evaluating agent. A run wakes high-scoring or interesting nodes to ideate, Horn-generate or GA-mix.",
    landingLine: "Start a run. The tree is the ledger.",
    headline: "Open a hard problem. Let node agents search.",
    support:
      "Point Solve at a Millennium statement, a Kaggle-style modelling question, or a precise conjecture. Each node owns an axiom session and a hidden agent. Start / Pause / Stop a run; the service ranks the frontier and wakes one agent per step. The kernel still will not QED an open Millennium conjecture.",
    overview: [
      "Solve is an unattended research product for hard logical problems. A node is axioms, free-text reasoning, and an evaluating agent. Children inherit a forked copy of the axioms. Chat may narrate. Nothing stands unless it is on the tree.",
      "It is not Stack. Stack investigates open-ended questions against organisational data. Solve searches programmes of attack: it gathers scholarly and web evidence, keeps mathematics as first-class markdown and MathML, and uses a logic kernel that will refuse an unearned QED.",
      "A solver run is not a cron. Start, pause or stop it. Each step the service ranks open nodes by score and interest, then wakes that node’s agent to ideate, generate Horn consequences, or mix idea variants with a genetic algorithm the model grades. The next step chooses again.",
    ],
    seoTitle: "Solve | Unattended Hard-Problem Research | Linear Horizon",
    seoDescription:
      "Linear Horizon Solve is an unattended problem solver — per-node agents, axiom sessions, and Start/Pause/Stop runs that expand high-scoring programmes of attack without claiming a Millennium proof.",
    primaryCta: { label: "Discuss Solve", href: "/contact?interest=solve" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    closingQuestion:
      "Have a claim that needs a branching argument rather than a vibes answer?",
    capabilities: [
      {
        id: "01",
        title: "Per-node agents",
        body: "Each tree node owns an axiom session, free-text reasoning, a score, and a hidden agent that may only expand that node.",
      },
      {
        id: "02",
        title: "Start, pause, stop",
        body: "A solver run is a step budget, not a cron. The service ranks the frontier and wakes one node agent per step.",
      },
      {
        id: "03",
        title: "Choose how to expand",
        body: "The woken agent ideates a child, Horn-generates consequences from this node’s axioms, or mixes ideas with a genetic algorithm it grades.",
      },
      {
        id: "04",
        title: "Evaluate, then choose again",
        body: "Every new child is scored for promise and interest. High-scoring or interesting nodes are what the next step wakes.",
      },
      {
        id: "05",
        title: "Logic kernel",
        body: "Classify claims, fork axiom sessions, generate consequences, and refuse a QED the proof-state has not earned.",
      },
      {
        id: "06",
        title: "Scholarly evidence",
        body: "Search the literature and the web — Wikipedia, PubMed, OpenAlex, Crossref, Semantic Scholar and related sources — as evidence, not as theorems.",
      },
    ],
    useCases: [
      {
        id: "01",
        title: "Open conjectures",
        problem:
          "A Millennium-class statement or an open conjecture needs a reviewable argument, not a confident paragraph in a chat.",
        approach:
          "Solve keeps the claim on a tree of node agents: axioms, reasoning and a score. A run expands high-scoring programmes of attack and leaves the prize conjecture open.",
      },
      {
        id: "02",
        title: "Modelling claims",
        problem:
          "A Kaggle-style question is treated as a vibe — a feature seems important — rather than as a falsifiable claim.",
        approach:
          "Record the modelling claim, gather evidence, accept or reject it, and keep the surviving argument on the ledger.",
      },
      {
        id: "03",
        title: "Proof sketching",
        problem:
          "A sketch looks finished in prose while the checker would still refuse the last step.",
        approach:
          "The logic kernel holds proof-state. Unearned certainty is refused; accepted nodes carry a rationale a person can review.",
      },
      {
        id: "04",
        title: "Evolving approaches",
        problem:
          "Candidate lemmas and methods multiply in a transcript, and it is unclear which survived a fair comparison.",
        approach:
          "A genetic algorithm mutates and grades variants against an explicit rubric, then promotes champions onto the tree.",
      },
    ],
    process: [
      { id: "01", title: "Open" },
      { id: "02", title: "Node agents" },
      { id: "03", title: "Start run" },
      { id: "04", title: "Expand" },
      { id: "05", title: "Evaluate" },
      { id: "06", title: "Choose next" },
    ],
    limits: [
      "Solve does not prove open Millennium conjectures. Unattended search is still search; an accepted node is a reasoned verdict, not a theorem.",
      "Literature and web search are evidence, not proofs. A citation can support a claim; it cannot close one on its own.",
      "Genetic-algorithm descendants come from the evolution service. Chat does not invent a population by narrating one.",
      "A human can pause or stop a run. The tree is a ledger a person can challenge, including what the system has left open.",
      "The default Solve agent has no warehouse credentials. Organisational data investigation is Stack.",
    ],
  },
  {
    slug: "wargame",
    name: "Wargame",
    fullName: "Linear Horizon Wargame",
    tier: "application",
    domain: "Strategy",
    category: "Agentic Strategy",
    verb: "Decide",
    intelligence: "Strategic intelligence",
    framing: "Agents that strategise",
    shortDescription:
      "An agentic strategy system that models actors, incentives and possible responses, then simulates how they interact — a machine that can predict the future.",
    landingLine: "A machine that can predict the future.",
    headline: "A machine that can predict the future.",
    support:
      "Wargame builds an explicit model of a strategic environment, simulates possible interactions, and estimates which futures are more likely — and which actions may improve the outcome you want.",
    overview: [
      "Wargame is a machine that can predict the future. It creates a model of the relevant actors in a strategic environment — competitors, customers, regulators, partners, political actors, market participants, internal stakeholders — and the incentives, goals, constraints and relationships that shape what they may do.",
      "Strategy is a system of interacting actors. Wargame models those actors and explores how their decisions may interact. It then runs large numbers of possible scenarios, using Monte Carlo simulation where appropriate, to estimate a distribution of outcomes rather than a single point forecast.",
      "The prediction is a distribution, not an oracle. Wargame makes the assumptions explicit, explores their consequences at scale, and helps you see which futures appear more often, which variables drive them, and which actions may shift the result.",
    ],
    seoTitle: "Wargame | A Machine That Can Predict the Future | Linear Horizon",
    seoDescription:
      "Linear Horizon Wargame is a machine that can predict the future. It models actors, incentives and possible responses, then runs repeated simulations to estimate how a strategy may unfold.",
    primaryCta: {
      label: "Discuss a scenario",
      href: "/contact?interest=wargame",
    },
    secondaryCta: { label: "See the methodology", href: "#methodology" },
    closingQuestion:
      "Have a strategic problem with multiple actors and uncertain outcomes?",
    capabilities: [
      {
        id: "01",
        title: "Actor modelling",
        body: "Make objectives, incentives, capabilities, constraints and relationships explicit enough to inspect.",
      },
      {
        id: "02",
        title: "Assumption review",
        body: "Let human experts examine and refine the model before it is used to explore decisions.",
      },
      {
        id: "03",
        title: "Scenario generation",
        body: "Explore possible actions and responses across the actor model, not a single planned path.",
      },
      {
        id: "04",
        title: "Monte Carlo simulation",
        body: "Run many simulations with variation in uncertain assumptions, and read a distribution of outcomes rather than a single point forecast.",
      },
      {
        id: "05",
        title: "Outcome analysis",
        body: "Estimate which classes of outcome appear more or less often under a given strategy.",
      },
      {
        id: "06",
        title: "Intervention search",
        body: "Ask which actions appear to increase the chance of a desired outcome, or reduce a particular risk.",
      },
      {
        id: "07",
        title: "Sensitivity",
        body: "Show which assumptions and actors drive the result, and where better evidence would matter most.",
      },
      {
        id: "08",
        title: "Decision support",
        body: "Return recommended actions with likely consequences, alternatives, uncertainty and the assumptions they rest on.",
      },
    ],
    useCases: [
      {
        id: "01",
        title: "Competitive response",
        problem:
          "A price, product or channel move is rarely answered by the market as a static equation. Competitors react. Customers migrate. Margins can move more than once.",
        approach:
          "Model the relevant competitors and customers, then simulate responses to a proposed action — for example a price reduction — including follow-on pricing behaviour and share effects. The output is a distribution of outcomes, not a promise.",
      },
      {
        id: "02",
        title: "Market entry",
        problem:
          "Entering a market is a decision under interaction: incumbents, customers, regulators and partners all have a move.",
        approach:
          "Build the actor model for that market, explore alternative entry strategies, and inspect which assumptions most affect the result.",
      },
      {
        id: "03",
        title: "Negotiation",
        problem:
          "Negotiations fail when fallback positions, concessions and reactions stay implicit until they are tested in a live discussion.",
        approach:
          "Represent the stakeholders, their incentives and their likely responses, then explore negotiation paths and the conditions under which an acceptable agreement appears more often.",
      },
      {
        id: "04",
        title: "Strategic policy",
        problem:
          "Programmes that depend on several organisations rarely fail for one reason. They fail because the actors do not move together.",
        approach:
          "Model the organisations and stakeholder responses around a programme, then ask which actions appear to increase the probability that it succeeds — and which assumptions that reading depends on.",
      },
    ],
    process: [
      { id: "01", title: "Environment" },
      { id: "02", title: "Actors" },
      { id: "03", title: "Incentives + constraints" },
      { id: "04", title: "Possible actions" },
      { id: "05", title: "Responses" },
      { id: "06", title: "Scenarios" },
      { id: "07", title: "Simulation" },
      { id: "08", title: "Outcome distribution" },
    ],
    limits: [
      "Simulations depend on model assumptions. A refined actor model is more useful than a precise-looking number.",
      "Probabilities are conditional on the model. A prediction is only as good as the assumptions it rests on.",
      "Actor models need review. Human experts should be able to inspect and correct the incentives and constraints.",
      "Uncertainty should be visible. Sensitivity is part of the result, not a footnote.",
    ],
  },
  {
    slug: "funnel",
    name: "Funnel",
    fullName: "Linear Horizon Funnel",
    tier: "application",
    domain: "Growth",
    category: "Agentic Sales Intelligence",
    verb: "Discover",
    intelligence: "Sales intelligence",
    framing: "Agents that find customers",
    shortDescription:
      "An agentic B2B prospecting system that researches organisations, finds evidence of buying intent and prepares qualified outreach for human approval.",
    landingLine: "Research the market. Sales is an engineering challenge.",
    headline: "Find the companies that need you.",
    support:
      "Funnel continuously researches your market, identifies evidence of buying intent and turns promising organisations into qualified, evidence-backed opportunities.",
    overview: [
      "Funnel turns B2B prospecting into an agentic research workflow. It starts with the organisations you actually want to work with, then investigates whether there is a genuine current need — and only then prepares an approach.",
      "It is not a bulk email tool. Conventional outbound buys a list, filters by job title and sends at volume. Funnel is built against that model. The expensive part of good prospecting is not sending a message. It is understanding who is worth contacting, and why.",
      "The workflow is simple to state: find the right company, understand why they might buy, and know what to say. Someone on your team decides whether to make contact.",
    ],
    seoTitle: "Funnel | Agentic Sales Intelligence | Linear Horizon",
    seoDescription:
      "Linear Horizon Funnel is an agentic B2B prospecting system. It researches organisations, finds evidence of buying intent and prepares qualified, evidence-backed outreach for human approval.",
    primaryCta: { label: "Discuss Funnel", href: "/contact?interest=funnel" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    closingQuestion:
      "Have a market where better research would change who you contact?",
    capabilities: [
      {
        id: "01",
        title: "Ideal customer profile",
        body: "Start from the organisations you actually want — geography, industry, scale, stack and priorities — then investigate.",
      },
      {
        id: "02",
        title: "Continuous discovery",
        body: "Find organisations that match the profile across configured public, licensed and customer-connected sources.",
      },
      {
        id: "03",
        title: "Signal detection",
        body: "Look for evidence that something is happening now that makes a conversation more relevant.",
      },
      {
        id: "04",
        title: "Buyer identification",
        body: "Identify the roles most likely to own the problem, influence the decision or control the budget.",
      },
      {
        id: "05",
        title: "Qualification",
        body: "Combine fit, intent, timing and proposition into a reviewable opportunity score.",
      },
      {
        id: "06",
        title: "Offer matching",
        body: "Choose the proposition that appears most relevant to the observed need, rather than sending one message to everyone.",
      },
      {
        id: "07",
        title: "Evidence-backed briefing",
        body: "Preserve the reasons and sources so a person can verify why the opportunity was recommended.",
      },
      {
        id: "08",
        title: "Drafted approach",
        body: "Prepare a concise, evidence-based outreach draft. Personalisation means understanding the prospect, rather than greeting them by title.",
      },
      {
        id: "09",
        title: "Human approval",
        body: "Automate research up to the relationship. Someone on your team approves, edits or skips before anyone is contacted.",
      },
      {
        id: "10",
        title: "Controlled follow-up",
        body: "Schedule appropriate follow-up, stop on a reply, suppress declines and recognise when the answer is not now.",
      },
      {
        id: "11",
        title: "Response classification",
        body: "Sort outcomes so the next action is clear: take over, wait, find another person, or stop.",
      },
      {
        id: "12",
        title: "Learning from outcomes",
        body: "See which signals, roles and propositions actually create conversations — and use that to refine how Funnel is configured.",
      },
    ],
    useCases: [
      {
        id: "01",
        title: "Specialist technology sales",
        problem:
          "The buyers who need a specialist product are few. A purchased list treats them as a volume problem.",
        approach:
          "Define the organisations that can actually use the product, then let Funnel look for the signals that suggest a current need.",
      },
      {
        id: "02",
        title: "Professional services",
        problem:
          "A useful conversation usually starts from a specific initiative, not from a generic capability brochure.",
        approach:
          "Match observed programmes, hiring and published problems to the service that would actually help — then ask someone on your team whether to make contact.",
      },
      {
        id: "03",
        title: "Training and capability building",
        problem:
          "Teams buy training when they are already building something. Job titles alone do not show that.",
        approach:
          "Recruitment, programme announcements and technical publication can be evidence of a team that needs to learn a particular skill now.",
      },
      {
        id: "04",
        title: "Product deployment",
        problem:
          "A product such as Platform, Stack, Wargame or Callcenter is useful only where the organisational problem already exists.",
        approach:
          "Funnel can look for the conditions that make a product relevant — an agent programme, a large analytical estate, a strategic decision under uncertainty, a contact-centre transformation — and surface those organisations first.",
      },
    ],
    process: [
      { id: "01", title: "ICP" },
      { id: "02", title: "Discover" },
      { id: "03", title: "Research" },
      { id: "04", title: "Detect signals" },
      { id: "05", title: "Identify buyers" },
      { id: "06", title: "Qualify" },
      { id: "07", title: "Match offer" },
      { id: "08", title: "Draft approach" },
      { id: "09", title: "Human approval" },
      { id: "10", title: "Outreach" },
      { id: "11", title: "Follow up" },
      { id: "12", title: "Learn" },
    ],
    limits: [
      "A score is a prioritisation mechanism, not an objective probability that someone will buy.",
      "Recommendations depend on the quality of the ICP, the available sources and the evidence those sources contain.",
      "Your team remains responsible for high-value relationship decisions. Funnel drafts; it does not send on its own as a matter of product principle.",
      "Learning from outcomes is analytics and feedback for configuration. It is not a claim of autonomous self-modification.",
    ],
  },
  {
    slug: "callcenter",
    name: "Callcenter",
    fullName: "Linear Horizon Callcenter",
    tier: "application",
    domain: "Customer Service",
    category: "Agentic Customer Service",
    verb: "Serve",
    intelligence: "Customer-service intelligence",
    framing: "Agents that serve customers",
    shortDescription:
      "Resolve customer needs across voice, messaging and email, with intelligent human handoff when judgement matters.",
    landingLine: "One conversation, across every channel.",
    headline: "One customer. One conversation. Every channel.",
    support:
      "Callcenter connects voice, WhatsApp, SMS, email, Teams, Slack and Salesforce through an agentic service layer that can understand customer needs, retrieve knowledge, take permitted actions and hand complex interactions to people without losing context.",
    overview: [
      "Callcenter is an AI-powered customer-service platform for call deflection, multichannel handling, automated resolution, intelligent routing, human handoff and agent augmentation. It is a specialist product on the same agentic principles as Linear Horizon Platform, applied to contact centres, support desks and service operations.",
      "A customer might start by email, continue over WhatsApp, then phone. Callcenter is designed to retain that context and treat the interactions as one service journey rather than three unrelated conversations.",
      "The aim is to resolve what AI can, route what it cannot, and give people everything they need to finish the job.",
    ],
    seoTitle: "Callcenter | Agentic Customer Service | Linear Horizon",
    seoDescription:
      "Linear Horizon Callcenter unifies voice, WhatsApp, SMS, email, Teams, Slack and Salesforce into an agentic customer-service layer for automated resolution, intelligent routing and human handoff.",
    primaryCta: {
      label: "Discuss Callcenter",
      href: "/contact?interest=callcenter",
    },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    closingQuestion:
      "Have a service operation where customers still have to start again?",
    capabilities: [
      {
        id: "01",
        title: "Universal Conversation",
        body: "Keep one shared conversation state as a customer moves between email, WhatsApp, SMS, voice and a human adviser.",
      },
      {
        id: "02",
        title: "Agentic resolution",
        body: "Use approved knowledge, tools, workflows and Salesforce context to complete suitable work — not only to answer FAQs.",
      },
      {
        id: "03",
        title: "Warm handoff",
        body: "When a person takes over, they receive identity, history, summary, actions attempted and a suggested next step.",
      },
      {
        id: "04",
        title: "Voice handling",
        body: "Answer routine calls, determine intent, retrieve context and resolve or escalate — without pretending to be human.",
      },
      {
        id: "05",
        title: "Call deflection",
        body: "Remove the reason to phone by resolving the problem on a digital channel, rather than by hiding the number.",
      },
      {
        id: "06",
        title: "Channel switching",
        body: "Move a live journey to a more suitable channel — a form, a document, a callback — without restarting the case.",
      },
      {
        id: "07",
        title: "Governed actions",
        body: "Check an order, update a case, schedule an appointment or trigger a workflow inside configured autonomy limits.",
      },
      {
        id: "08",
        title: "Intelligent routing",
        body: "Route on intent, product, urgency, account and skills — not only on a keypad menu.",
      },
      {
        id: "09",
        title: "Human takeover",
        body: "Let an adviser assume control from Teams, Slack or another operational interface you already use.",
      },
      {
        id: "10",
        title: "Agent assist",
        body: "After takeover, surface knowledge, history, suggested next actions and after-call notes. The person remains in control.",
      },
      {
        id: "11",
        title: "Salesforce context",
        body: "Treat Salesforce as the operational system of record: contacts, cases, history and updates, rather than another outbound channel.",
      },
      {
        id: "12",
        title: "Service intelligence",
        body: "Use conversations to find knowledge gaps, contact drivers and recurring operational failures — for people to act on.",
      },
    ],
    useCases: [
      {
        id: "01",
        title: "Fragmented omnichannel service",
        problem:
          "Customers email, message and phone about the same issue. Each channel opens a new interaction. Advisers ask the same questions again.",
        approach:
          "Callcenter holds a shared conversation state so the channel can change without the customer restarting the story.",
      },
      {
        id: "02",
        title: "Routine voice resolution",
        problem:
          "Queues fill with delivery checks, booking changes and account questions that already have a system of record.",
        approach:
          "A voice interaction can identify the customer, retrieve the relevant record, take a permitted action and confirm the result — or escalate with the work already done.",
      },
      {
        id: "03",
        title: "Salesforce-connected service desks",
        problem:
          "The conversation happens in one place and the case lives in another. Context is copied late, or not at all.",
        approach:
          "Callcenter can retrieve and update Salesforce records as part of the same journey, then attach a summary when a person takes over.",
      },
      {
        id: "04",
        title: "Proactive exception handling",
        problem:
          "Customers call because nobody told them about a delay, a failed payment or a changed appointment.",
        approach:
          "A business event can open an SMS, WhatsApp or email conversation and let the customer resolve the exception there.",
      },
      {
        id: "05",
        title: "Knowledge and contact-driver improvement",
        problem:
          "The same questions escalate because the approved answer is missing, contradictory or obsolete.",
        approach:
          "Repeated retrieval failures and escalations become signals for the knowledge base — and, where useful, for Stack to investigate the underlying operation.",
      },
    ],
    process: [
      { id: "01", title: "Channel" },
      { id: "02", title: "Identity" },
      { id: "03", title: "Intent" },
      { id: "04", title: "Retrieve" },
      { id: "05", title: "Act" },
      { id: "06", title: "Resolve" },
      { id: "07", title: "Route" },
      { id: "08", title: "Handoff" },
    ],
    limits: [
      "Not every conversation should be automated. Escalation is a designed outcome, not a failure of the product.",
      "Authentication and organisational policy govern what can be disclosed or done. Recognising a phone number is not enough for sensitive actions.",
      "Sentiment is one signal that may help prioritisation. It is not a diagnosis of a customer’s emotional state.",
      "Conversation memory and retention follow your data policy. The system is not designed as indefinite recall.",
      "Specialist agents describe the operating model. They are not a claim that every deployment exposes these roles as named services.",
      "Resolution depends on approved knowledge, connected systems and the actions you have authorised.",
    ],
  },
  {
    slug: "query",
    name: "Query",
    fullName: "Linear Horizon Query",
    tier: "application",
    domain: "Analytics",
    category: "Agentic Product Analytics",
    verb: "Measure",
    intelligence: "Behavioural intelligence",
    framing: "Agents that investigate usage",
    shortDescription:
      "Privacy-conscious product and website analytics, where agents investigate the numbers rather than leaving you to read another dashboard.",
    landingLine: "Understand what users actually do.",
    headline: "See what users do. Understand what to improve.",
    support:
      "Query is a privacy-conscious analytics system for products and websites. It measures how people actually behave, and lets an agent investigate why the numbers moved — through the same tools and evidence a good analyst would use.",
    overview: [
      "Query is product and website analytics built for investigation, not just reporting. It instruments the events that matter, calculates the metrics you rely on — visitors, sessions, activation, retention — and keeps them in a model an agent can question.",
      "Analytics calculate. Agents investigate. A dashboard can tell you activation fell; it will not tell you where, for whom, or what changed just before. Query exposes its metrics through a query interface and an MCP server, so an agent can pursue that question step by step.",
      "It is designed to be privacy-conscious by default: measure behaviour in aggregate, keep the data you actually need, and avoid the invasive tracking that most analytics quietly assume.",
    ],
    seoTitle: "Query | Agentic Product Analytics | Linear Horizon",
    seoDescription:
      "Linear Horizon Query is privacy-conscious product and website analytics. It measures visitors, activation and retention, and lets an agent investigate what changed through a query interface and MCP server.",
    primaryCta: { label: "Discuss Query", href: "/contact?interest=query" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    closingQuestion:
      "Have a product where the dashboard shows the what, but never the why?",
    capabilities: [
      {
        id: "01",
        title: "Privacy-conscious tracking",
        body: "Measure behaviour in aggregate with a light instrumentation footprint, rather than assuming invasive per-person tracking.",
      },
      {
        id: "02",
        title: "Product and web analytics",
        body: "Visitors, sessions, page views, activation and retention — the core measures teams actually make decisions on.",
      },
      {
        id: "03",
        title: "Event ingestion",
        body: "A write key and ingest pipeline collect product and website events into a single, queryable model.",
      },
      {
        id: "04",
        title: "Funnels and retention",
        body: "Follow how users move from first visit to activation and return, and see where the drop-off actually happens.",
      },
      {
        id: "05",
        title: "Segmentation and cohorts",
        body: "Separate the groups that moved from the averages that hide them — by source, cohort, behaviour or period.",
      },
      {
        id: "06",
        title: "Agentic investigation",
        body: "Expose the metrics through a query interface and MCP server so an agent can test hypotheses about what changed.",
      },
    ],
    useCases: [
      {
        id: "01",
        title: "Product analytics",
        problem:
          "Product teams can see that activation or engagement moved, but the dashboard does not run the follow-up: which step, which cohort, which change.",
        approach:
          "Query measures the funnel and lets an agent investigate the movement — comparing cohorts and periods until there is an explanation worth acting on.",
      },
      {
        id: "02",
        title: "Website analytics",
        problem:
          "Marketing and web teams want to understand traffic and conversion without deploying invasive tracking or exporting visitors to a third party.",
        approach:
          "Query instruments the site with a light footprint, calculates the standard measures, and keeps the data in a model you control.",
      },
      {
        id: "03",
        title: "Activation and retention",
        problem:
          "A drop in activation or retention has several plausible causes, and reading tiles one at a time rarely isolates the one that matters.",
        approach:
          "Ask Query what changed before the decline; review the segments and periods the agent compared and the reading the evidence supports.",
      },
      {
        id: "04",
        title: "Growth experiments",
        problem:
          "Teams ship changes and then argue about whether the numbers moved because of the change or because of everything else.",
        approach:
          "Query holds the before-and-after measures in one place, so the investigation is grounded in the same events rather than competing exports.",
      },
    ],
    process: [
      { id: "01", title: "Instrument" },
      { id: "02", title: "Ingest events" },
      { id: "03", title: "Calculate metrics" },
      { id: "04", title: "Ask a question" },
      { id: "05", title: "Investigate" },
      { id: "06", title: "Explain" },
    ],
    limits: [
      "Query measures behaviour; it does not read intent. A metric tells you what happened, not why someone did it.",
      "Privacy-conscious means deliberate collection. Query is not designed to reconstruct detailed individual profiles.",
      "An investigation is grounded in the events you instrument. Gaps in instrumentation are gaps in the evidence.",
      "Analytics support judgement. Deciding what to build or change remains a human decision.",
    ],
  },
  {
    slug: "chat",
    name: "Chat",
    fullName: "Linear Horizon Chat",
    tier: "application",
    domain: "Interface",
    category: "Agentic Chat Interface",
    verb: "Converse",
    intelligence: "Conversational intelligence",
    framing: "Agents you can talk to",
    shortDescription:
      "A conversational interface to your agents — streaming answers, visible working and voice, on top of the Linear Horizon Platform.",
    landingLine: "A conversation on top of your agents.",
    headline: "A conversation on top of your agents.",
    support:
      "Chat is a full-page conversational interface to Linear Horizon Platform. It streams answers as they are generated, can show the working behind them, and supports hands-free voice — while the agent system does the actual work.",
    overview: [
      "Chat is the visible layer over an agent system. It talks to Platform through a same-origin backend, so the browser only ever speaks to one trusted origin and enterprise sign-in and permissions apply as they should.",
      'It is deliberately more than a reply box. A picker lets people choose the right agent for the task; a "show working" view reveals the tool calls, tool results and sub-agent activity behind an answer; and responses stream token by token so the conversation feels immediate.',
      "A conversation mode adds speech: utterances are transcribed with recent context, and replies are spoken sentence by sentence as they stream — so Chat can act as a hands-free scribe or copilot as well as a text interface.",
    ],
    seoTitle: "Chat | Agentic Chat Interface | Linear Horizon",
    seoDescription:
      "Linear Horizon Chat is a full-page conversational interface to the Linear Horizon Platform — with agent selection, streamed answers, visible working and hands-free voice, behind enterprise sign-in.",
    primaryCta: { label: "Discuss Chat", href: "/contact?interest=chat" },
    secondaryCta: { label: "See how it works", href: "#how-it-works" },
    closingQuestion:
      "Have an agent system that still needs a front door people can talk to?",
    capabilities: [
      {
        id: "01",
        title: "Agent selection",
        body: "Choose the right agent for the task from the catalogue your Platform deployment exposes.",
      },
      {
        id: "02",
        title: "Token streaming",
        body: "Answers stream into the live message as they are generated, so a reply starts before it is finished.",
      },
      {
        id: "03",
        title: "Show working",
        body: "Reveal the tool calls, tool results and sub-agent activity behind an answer when transparency matters.",
      },
      {
        id: "04",
        title: "Conversation mode",
        body: "Speak instead of type: utterances are transcribed with context and replies are spoken as they stream.",
      },
      {
        id: "05",
        title: "Same-origin backend",
        body: "The browser talks only to one trusted origin, which proxies to the private agent service — no cross-origin exposure.",
      },
      {
        id: "06",
        title: "Enterprise sign-in",
        body: "Authenticate through your identity provider so conversations run as the person asking, with their permissions.",
      },
    ],
    useCases: [
      {
        id: "01",
        title: "Internal assistant",
        problem:
          "Teams have agents that can retrieve knowledge and take actions, but no interface a non-technical colleague can actually use.",
        approach:
          "Chat gives them a front door: pick an agent, ask in plain language, and see the working when they need to trust the answer.",
      },
      {
        id: "02",
        title: "Customer-facing chat",
        problem:
          "A public assistant has to stream quickly, stay grounded and run behind proper authentication — not leak a backend to the browser.",
        approach:
          "Chat serves the UI and proxies every call to the private service from the same origin, so streaming, grounding and sign-in are handled in one place.",
      },
      {
        id: "03",
        title: "Hands-free copilot",
        problem:
          "Some work happens away from the keyboard, where typing a request and reading a screen is not practical.",
        approach:
          "Conversation mode lets a person speak requests and hear replies as they stream, using Chat as a scribe or copilot.",
      },
      {
        id: "04",
        title: "Reference implementation",
        problem:
          "Teams building their own frontend need to see how a browser should talk to an agent service, end to end.",
        approach:
          "Chat is a working example of agent selection, streaming, visible working and a same-origin proxy that a product team can learn from.",
      },
    ],
    process: [
      { id: "01", title: "Ask" },
      { id: "02", title: "Route to agent" },
      { id: "03", title: "Tools / RAG" },
      { id: "04", title: "Stream tokens" },
      { id: "05", title: "Show working" },
      { id: "06", title: "Answer" },
    ],
    limits: [
      "Chat is the interface, not the intelligence. Platform and its agents do the work; Chat presents it.",
      "It is not designed to disguise automation as a human. Where appropriate, an automated conversation should be identifiable as one.",
      "What an agent can answer or do depends on the knowledge, tools and permissions configured behind it.",
      "Voice uses the browser’s speech capabilities, so quality and availability vary by device and environment.",
    ],
  },
];

export const stackQuestions = [
  "Why has customer retention fallen this quarter?",
  "What is driving margin erosion?",
  "Which factors appear to predict churn?",
  "Why is one region outperforming another?",
  "Where are the biggest operational inefficiencies?",
  "What explains the change in conversion rate?",
  "Which customer segments are behaving differently?",
  "What changed before the decline in support satisfaction?",
  "What are the most important patterns in this data that management should know about?",
] as const;

export const stackExample = {
  label: "Illustrative example — not a customer result",
  question: "Why did profitability fall in Q2?",
  investigated: [
    "Revenue",
    "Customer mix",
    "Region",
    "Product mix",
    "Acquisition costs",
    "Discounts",
    "Operational expenditure",
    "Retention",
    "Pricing",
    "Seasonality",
  ],
  narrative:
    "Profitability declined primarily due to margin compression in two product segments, compounded by increased acquisition costs in one region.",
} as const;

export const wargameExamples = [
  {
    id: "01",
    title: "Competitive response",
    question: "What happens if we reduce our price by 10%?",
    model: [
      "Competitor response",
      "Customer migration",
      "Margin impact",
      "Market share",
      "Possible follow-on pricing behaviour",
    ],
  },
  {
    id: "02",
    title: "Market entry",
    question: "What is likely to happen if we enter this market?",
    model: [
      "Incumbent reaction",
      "Customer response",
      "Regulatory conditions",
      "Partner incentives",
      "Alternative strategies",
    ],
  },
  {
    id: "03",
    title: "Negotiation",
    question:
      "What strategy is most likely to produce an acceptable agreement?",
    model: [
      "Stakeholder incentives",
      "Fallback positions",
      "Concessions",
      "Reactions",
      "Negotiation paths",
    ],
  },
  {
    id: "04",
    title: "Strategic policy",
    question:
      "What actions increase the probability that this programme succeeds?",
    model: [
      "Multiple organisations",
      "Stakeholder responses",
      "Incentives and constraints",
      "Coordinating actions",
      "Points of failure",
    ],
  },
] as const;

export const wargameDistribution = {
  label: "Illustrative distribution — not a real simulation",
  outcomes: [
    { id: "A", title: "Scenario A", share: 52 },
    { id: "B", title: "Scenario B", share: 31 },
    { id: "C", title: "Scenario C", share: 17 },
  ],
} as const;

export const chatToAction = [
  { id: "01", title: "Chat" },
  { id: "02", title: "Knowledge" },
  { id: "03", title: "Tools" },
  { id: "04", title: "Workflows" },
  { id: "05", title: "Agent teams" },
  { id: "06", title: "Operational system" },
] as const;

export const platformLayers = [
  {
    id: "01",
    title: "User / Event / System",
    items: ["Requests", "Events", "Upstream systems"],
  },
  {
    id: "02",
    title: "Agent Router",
    items: ["Classify", "Route", "Apply policy"],
  },
  {
    id: "03",
    title: "Agent Team",
    items: ["Specialists", "Handoffs", "Shared context"],
  },
  {
    id: "04",
    title: "Tools / Workflows / RAG / Memory",
    items: ["Tools", "Workflows", "RAG", "Memory"],
  },
  {
    id: "05",
    title: "Enterprise Systems + Knowledge Sources",
    items: ["APIs", "Line-of-business systems", "Approved corpora"],
  },
  {
    id: "06",
    title: "Human Escalation / Observability / Governance",
    items: ["Escalation", "Traces", "Controls"],
  },
] as const;

export const funnelIcp = [
  "Geography",
  "Industry",
  "Organisation size",
  "Revenue range",
  "Employee count",
  "Technology environment",
  "Growth stage",
  "Business model",
  "Relevant departments",
  "Strategic priorities",
  "Technologies in use",
  "Current initiatives",
] as const;

export const funnelSignals = [
  "Company growth",
  "Recruitment",
  "New offices",
  "Funding",
  "Acquisitions",
  "Product launches",
  "Technology adoption",
  "Executive appointments",
  "Organisational change",
  "Public strategy",
  "Procurement activity",
  "Published technical material",
] as const;

export const funnelAgents = [
  {
    id: "01",
    title: "Company",
    body: "What the organisation does, its scale, market, structure and current priorities.",
  },
  {
    id: "02",
    title: "Signal",
    body: "Change, investment, recruitment, projects, initiatives, problems and evidence of intent.",
  },
  {
    id: "03",
    title: "Technology",
    body: "Where relevant: engineering activity, cloud and platform choices, public architecture and hiring requirements.",
  },
  {
    id: "04",
    title: "Buyer",
    body: "Which roles are most likely to own the problem, influence the decision or control the budget.",
  },
  {
    id: "05",
    title: "Qualification",
    body: "Combine the available evidence into an opportunity the team can rank and review.",
  },
  {
    id: "06",
    title: "Proposition",
    body: "Which customer offering best matches the observed need.",
  },
  {
    id: "07",
    title: "Research",
    body: "An evidence-backed briefing a person can read before deciding to make contact.",
  },
  {
    id: "08",
    title: "Writer",
    body: "A concise personalised approach that uses the research, rather than a greeting plus a job title.",
  },
] as const;

export const funnelEquation = [
  { id: "01", title: "Company fit" },
  { id: "02", title: "Buying signal" },
  { id: "03", title: "Relevant person" },
  { id: "04", title: "Matched proposition" },
] as const;

export const funnelScoring = [
  {
    id: "01",
    title: "Fit",
    body: "How closely the organisation matches the ICP.",
    share: 86,
  },
  {
    id: "02",
    title: "Intent",
    body: "Whether there is evidence of a current relevant need.",
    share: 78,
  },
  {
    id: "03",
    title: "Timing",
    body: "Whether there is a reason to approach them now.",
    share: 72,
  },
  {
    id: "04",
    title: "Proposition fit",
    body: "Whether you have a strong offering for the detected need.",
    share: 90,
  },
  {
    id: "05",
    title: "Contact confidence",
    body: "Whether an appropriate person or role has been identified.",
    share: 68,
  },
  {
    id: "06",
    title: "Commercial potential",
    body: "Whether the opportunity appears commercially worthwhile.",
    share: 74,
  },
] as const;

export const funnelOffers = [
  { signal: "AI engineering recruitment", offer: "AI Engineering training" },
  { signal: "RAG initiative", offer: "RAG training or architecture" },
  { signal: "Agent project", offer: "Platform" },
  { signal: "Large analytical data estate", offer: "Stack" },
  { signal: "Strategic planning requirement", offer: "Wargame" },
  { signal: "Contact-centre transformation", offer: "Callcenter" },
  {
    signal: "AI programme without clear architecture",
    offer: "AI discovery / consulting",
  },
  { signal: "Custom implementation requirement", offer: "Build" },
] as const;

export const funnelExample = {
  label: "Illustrative example — not a customer result",
  company: "Acme Corp",
  score: 86,
  whyNow:
    "Acme has advertised four AI engineering positions during the last six weeks, including roles referencing retrieval-augmented generation and LLM evaluation.",
  need: "The engineering organisation appears to be developing internal generative AI capability.",
  proposition: "AI Engineering for Software Developers",
  buyer: "VP Engineering / Head of AI",
  evidence: [
    "Four advertised AI engineering roles in six weeks",
    "Job descriptions referencing RAG and LLM evaluation",
    "Public mention of an internal generative AI programme",
  ],
  approach:
    "Offer a private RAG / AI engineering programme for the engineering team.",
  draft:
    "You are hiring several AI engineers with RAG and evaluation in the brief. We run a private programme for engineering teams who have to put that work into production — not a survey of tools. If useful, we can discuss whether that room would help the people you are hiring now.",
} as const;

export const funnelApprovals = [
  { company: "Acme Corporation", score: 87, signal: "RAG programme detected" },
  {
    company: "Northstar Financial",
    score: 82,
    signal: "AI platform recruitment",
  },
  {
    company: "Example Industries",
    score: 78,
    signal: "Data transformation initiative",
  },
] as const;

export const funnelResponses = [
  {
    id: "01",
    title: "Interested",
    body: "A human takes over the conversation.",
  },
  {
    id: "02",
    title: "Not now",
    body: "Return to the pipeline at an appropriate later point.",
  },
  {
    id: "03",
    title: "Wrong person",
    body: "Research an appropriate alternative contact.",
  },
  {
    id: "04",
    title: "Send information",
    body: "Prepare the relevant material for review.",
  },
  {
    id: "05",
    title: "Not interested",
    body: "Suppress further outreach to that contact.",
  },
  {
    id: "06",
    title: "Out of office",
    body: "Resume after the stated return date, where one is given.",
  },
] as const;

export const funnelFollowUp = [
  "Schedule an appropriate follow-up",
  "Stop when a prospect responds",
  "Recognise an out-of-office reply",
  "Suppress contacts who decline",
  "Identify not-now opportunities",
  "Create a later reminder",
  "Classify the response",
  "Update opportunity status",
] as const;

export const funnelLearning = [
  { id: "01", title: "Discovery" },
  { id: "02", title: "Outreach" },
  { id: "03", title: "Response" },
  { id: "04", title: "Opportunity" },
  { id: "05", title: "Outcome" },
  { id: "06", title: "Learning" },
] as const;

export const funnelDashboard = {
  label: "Illustrative dashboard — not live customer metrics",
  metrics: [
    { title: "Companies researched", value: "248" },
    { title: "Signals detected", value: "47" },
    { title: "Qualified opportunities", value: "19" },
    { title: "Awaiting approval", value: "8" },
    { title: "Active conversations", value: "6" },
  ],
  opportunities: [
    {
      company: "Acme Corporation",
      score: 87,
      signal: "RAG programme",
      proposition: "AI Engineering training",
      buyer: "VP Engineering",
      status: "Awaiting approval",
    },
    {
      company: "Northstar Financial",
      score: 82,
      signal: "AI platform hiring",
      proposition: "Platform",
      buyer: "Head of Architecture",
      status: "In review",
    },
    {
      company: "Example Industries",
      score: 78,
      signal: "Data transformation",
      proposition: "Stack",
      buyer: "Director of Analytics",
      status: "Qualified",
    },
  ],
  signalActivity: [
    { title: "Hiring", share: 34 },
    { title: "Technology", share: 22 },
    { title: "Investment", share: 16 },
    { title: "Leadership", share: 12 },
    { title: "Strategy", share: 10 },
    { title: "Growth", share: 6 },
  ],
} as const;

export const funnelFiltration = {
  label: "Illustrative filtration — not a customer result",
  stages: [
    { id: "01", title: "Organisations in view", value: "1,000" },
    { id: "02", title: "ICP matches", value: "240" },
    { id: "03", title: "Signals", value: "48" },
    { id: "04", title: "Qualified", value: "17" },
    { id: "05", title: "High-priority", value: "6" },
  ],
} as const;

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFoundationProducts() {
  return products.filter((product) => product.tier === "foundation");
}

export function getApplicationProducts() {
  return products.filter((product) => product.tier === "application");
}

export function productHref(slug: ProductSlug) {
  return `/products/${slug}`;
}

export function productContactHref(slug: ProductSlug) {
  return `/contact?interest=${slug}`;
}
