import type { Course } from './types';

export const leadershipCourses: Course[] = [
  {
    slug: 'ai-for-technical-leaders',
    title: 'AI for Technical Leaders',
    shortDescription:
      'A decision-making course for CTOs, engineering managers, architects and senior technical product leaders. How to choose architectures, vendors and investments that will still make sense in production.',
    overview:
      'Technical leaders are being asked to approve AI work with incomplete information: vendor claims, promising prototypes, and pressure to have an AI strategy. The cost of a poor decision is not a weak demo. It is an architecture that cannot be operated, a team that cannot be hired for, or a use case that never had a production path.\n\nThis course is for people who have to make those decisions. It covers current capabilities and limits, then spends the day on the choices that actually matter: model selection, hosted versus self-hosted, open versus commercial, build versus buy, RAG versus fine-tuning, agents versus workflows, and the production concerns of security, privacy, latency, cost, evaluation and observability.\n\nThe teaching is architectural and commercial, not a coding class. You work through proposed projects, score them, and design a first version of an AI roadmap that is honest about skills, data, risk and operating cost.\n\nBy the end of the day, you can interrogate a proposal, choose a shape that fits your organisation, and explain why a prototype is — or is not — ready to leave the lab.',
    audience:
      'CTOs, heads of engineering, engineering managers, architects, technical product leaders and senior decision-makers who own architecture, budget or delivery for AI work.',
    audienceLabel: 'CTOs, engineering managers, architects and technical leaders',
    prerequisites:
      'You should be comfortable with software delivery and organisational constraints. Direct machine-learning experience is not required. The course assumes responsibility for decisions, not a need to write model code.',
    duration: '1 day',
    durationNote: 'Often run as a private session for a leadership team. Can be extended with an architecture workshop on a live problem.',
    level: 'Leadership',
    category: 'leadership',
    outcomes: [
      'Assess current AI capabilities and limits in terms that survive an engineering review.',
      'Compare hosted and self-hosted models, and open versus commercial options, against control, cost, latency and data boundaries.',
      'Choose between APIs, RAG, agents, fine-tuning and conventional software for a given problem.',
      'Evaluate build versus buy, including the hidden cost of integrating a vendor’s abstraction.',
      'Identify the security, privacy, governance and evaluation work a production system will require.',
      'Estimate the skills, platform and operating model needed to move from prototype to production.',
      'Produce a short, defensible AI roadmap rather than a list of interesting experiments.',
    ],
    outline: [
      {
        title: 'A usable picture of current AI',
        points: [
          'What current models do reliably, and what they still cannot be trusted to do.',
          'The difference between a compelling prototype and a system with owners, interfaces and failure modes.',
          'Where latency, cost, context and evaluation become architectural facts rather than later concerns.',
          'Exercise: interrogate a fluent vendor or internal claim and extract the actual capability.',
        ],
      },
      {
        title: 'Architecture choices that matter',
        points: [
          'Model selection: quality, context, tool use, hosting, data handling and switching cost.',
          'Hosted APIs versus self-hosted inference; open-source versus commercial models.',
          'Build versus buy, including platforms that hide the wrong details.',
          'RAG, fine-tuning and agents as different answers to different problems.',
          'Exercise: choose an architecture for two contrasting proposals and defend the trade-offs.',
        ],
      },
      {
        title: 'Production, risk and operating cost',
        points: [
          'Security, privacy, identity, data boundaries and model-provider risk.',
          'Governance: what must be logged, versioned, approved and refused.',
          'Latency, scaling, observability, evaluation and cost controls.',
          'Team skills: what engineers, platform and product actually need to own.',
          'Exercise: list the production work missing from a successful prototype.',
        ],
      },
      {
        title: 'Use cases, platforms and the path out of the lab',
        points: [
          'Identifying worthwhile use cases: value, feasibility, data, risk and reversibility.',
          'AI platform strategy: what should be shared, and what should stay in product teams.',
          'Moving from prototype to production without freezing a demo architecture.',
          'Exercise: evaluate a set of proposed AI projects and draft a 90-day leadership roadmap.',
        ],
      },
    ],
    practicalWork:
      'You work in small groups on real or representative proposals. You score use cases, choose architectures, identify missing production work, and produce a short roadmap. The emphasis is on decision quality, not on producing a presentation.',
    takeaways: [
      'Decision frameworks for model selection, build versus buy, and RAG versus agents versus fine-tuning',
      'A production-readiness checklist covering security, evaluation, cost and operations',
      'A scored view of proposed use cases',
      'A first-pass AI roadmap for the organisation or product area',
    ],
  },
  {
    slug: 'ai-for-business-leaders',
    title: 'AI for Business Leaders',
    shortDescription:
      'A concise course for senior leaders and directors: where AI creates actual value, where it does not, and how to judge investment, risk and organisational readiness.',
    overview:
      'Business leaders are saturated with claims about AI and short of a method for judging them. Some proposals are genuine operational improvements. Others are vendor hype, impressive-looking automation that does not change the work, or work that would be cheaper as conventional software. This course gives you a way to tell the difference.\n\nThe course covers current capabilities and limits, automation versus augmentation, use-case identification, value, operational impact, risk, governance, privacy, cost and organisational readiness. Vendor claims are treated as claims: they have to survive contact with data quality, process reality and the cost of being wrong.\n\nThe teaching is commercial and operational. You work through a structured way to find, score and sequence opportunities, including workforce implications and the difference between a tool rollout and a change to how work is done.\n\nYou leave able to ask better questions, reject weak proposals quickly, and sponsor a small number of uses that can actually be delivered.',
    audience:
      'Senior leaders, directors and business decision-makers who sponsor AI work, approve spend, or have to set organisational direction without needing to design the system themselves.',
    audienceLabel: 'Senior leaders, directors and business decision-makers',
    prerequisites:
      'No technical background is required. Bring a view of your organisation’s processes, constraints and current AI pressure, even if that view is incomplete.',
    duration: 'Half day or 1 day',
    durationNote: 'The half-day version concentrates on judgement and prioritisation. The full day adds deeper use-case work and a first roadmap.',
    level: 'Leadership',
    category: 'leadership',
    outcomes: [
      'Describe current AI capabilities and limits in operational terms rather than product language.',
      'Distinguish automation from augmentation, and identify which is actually being proposed.',
      'Evaluate vendor and internal claims against data, process, risk and the cost of error.',
      'Compare build versus buy at a business level, including lock-in, operating cost and dependency.',
      'Judge organisational readiness: skills, data, process ownership and governance.',
      'Prioritise a small set of use cases with a clear view of value, risk and complexity.',
      'Commission next steps that a technical team can actually execute.',
    ],
    outline: [
      {
        title: 'What the technology can do in a business',
        points: [
          'A grounded account of current capabilities: language, documents, code, images, and tool use.',
          'Limits that affect operations: hallucination, inconsistency, latency, and the need for a human owner.',
          'Automation versus augmentation, and why “replace the process” is often the wrong first move.',
          'Exercise: rewrite a hyped proposal as an operational description.',
        ],
      },
      {
        title: 'Value, risk and the organisation',
        points: [
          'Where value actually appears: time, quality, coverage, cycle time, and new work that was previously uneconomic.',
          'Operational impact: exceptions, handover, accountability and the work that remains after a model is introduced.',
          'Risk, privacy, governance and the questions a board or executive team should insist on.',
          'Workforce implications: skills, roles, and the difference between a copilot and a headcount plan.',
          'Exercise: identify who is accountable if a generated output is wrong.',
        ],
      },
      {
        title: 'Investment choices',
        points: [
          'Vendor claims, proofs of concept, and the difference between a demo and a production path.',
          'Build versus buy, including the cost of integrating AI platforms into existing systems.',
          'Cost: licences, usage, integration, evaluation, change and ongoing operations.',
          'Organisational readiness: data, process owners, approved tools and the capacity to change work.',
        ],
      },
      {
        title: 'Use-case prioritisation and a first roadmap',
        points: [
          'A scoring method: value, feasibility, data, risk, complexity and reversibility.',
          'Selecting a small number of uses rather than a catalogue of ideas.',
          'What “good” looks like after 90 days: owners, measures, and a decision to continue or stop.',
          'Exercise: rank a set of opportunities and agree the next commissioned piece of work.',
        ],
      },
    ],
    practicalWork:
      'You work through case examples and, where possible, your own pipeline of ideas. You score opportunities, name owners and risks, and leave with a ranked shortlist rather than a brainstorm. The half-day version uses a tighter set of examples; the full day includes a more complete roadmap exercise.',
    takeaways: [
      'A decision lens for capability, value, risk and readiness',
      'A use-case scoring template',
      'Questions to put to vendors and internal teams',
      'A ranked shortlist and recommended next steps',
    ],
  },
  {
    slug: 'ai-native-programme-management-with-claude',
    title: 'AI-Native Programme Management with Claude',
    shortDescription:
      'A 90-minute seminar for programme and project leaders: how to move from individual Claude use to connected, governed workflows across the programme lifecycle.',
    overview:
      'Claude can already summarise documents, draft reports and help programme managers think through difficult problems. The more useful question is what happens when it is connected to live organisational systems and asked to run a defined piece of work.\n\nThis seminar is for teams that have already used generative AI and now need a way to progress from individual assistance to connected, repeatable and governed workflows. It covers custom connectors, the Model Context Protocol, agent design, human approval boundaries, evaluation, and the job of supervising work done by both people and AI.\n\nThe teaching is practical and architectural rather than a tour of prompting. Participants examine where their organisation currently sits, which programme-management workflows are actually suitable for automation, and what would have to be true before an agent is allowed to act.\n\nYou leave with a maturity model, a reference architecture for custom Claude connectors, and a short list of experiments worth running in the next six months.',
    audience:
      'Senior programme and project managers, product and business operations leaders, portfolio and transformation teams, technical programme managers, and AI adoption or enablement leads. The session is also useful for teams already using Claude or a comparable tool who need a shared vocabulary with engineering and governance.',
    audienceLabel: 'Programme, project and operations leaders',
    prerequisites:
      'Some practical experience with generative AI is expected. This is not an introduction to prompting, and it is not a basic tour of Claude.',
    duration: '90 minutes',
    durationNote:
      'Delivered as a live virtual seminar for up to 40 participants. A short discovery conversation beforehand can adapt the session to your organisation’s Claude use, Jira and programme-management workflows, connectors, and governance constraints.',
    level: 'Leadership',
    category: 'leadership',
    outcomes: [
      'Describe how Claude is moving from an individual assistant to a connected work platform.',
      'Distinguish Projects, Skills, connectors, MCP servers and agents, and how they fit together.',
      'Explain how a custom connector can give Claude controlled access to organisational systems.',
      'Identify programme-management workflows that are suitable for AI automation — and those that are not.',
      'Treat context engineering as a first-class design problem, not a prompting afterthought.',
      'Design human approval and escalation points that match the cost of being wrong.',
      'Use evaluations to make agentic workflows measurable rather than merely impressive.',
      'Control permissions, cost and operational risk in a connected Claude deployment.',
      'Sketch an AI-native programme-management operating model and the next practical experiments.',
    ],
    outline: [
      {
        title: 'From AI-assisted to AI-native programme management',
        points: [
          'How most organisations start: summaries, drafts and better written communication.',
          'Four levels of maturity: assistant, participant, operator and control plane.',
          'Where your organisation sits, and what the next level actually requires.',
        ],
      },
      {
        title: 'Claude as an enterprise work platform',
        points: [
          'Projects, persistent programme context and organisational knowledge.',
          'Skills, connectors, the Model Context Protocol, tool use and structured outputs.',
          'Cowork, Claude Code, APIs and bespoke enterprise agents.',
          'How the pieces relate: connectors provide access, skills provide method, agents apply both to a defined outcome.',
        ],
      },
      {
        title: 'Building custom connectors with MCP',
        points: [
          'What an MCP server is, and how it differs from a connector.',
          'Tools, resources and reusable prompts; wrapping existing enterprise APIs.',
          'Bounded tools, local versus hosted servers, identity, permissions, audit and observability.',
          'Separating read, propose and execute operations.',
          'Example programme-management tools: search issues, retrieve decisions, find dependencies, get release evidence, identify stale risks, draft updates, validate changes and apply approved ones.',
          'The point is not merely to connect Claude to Jira. It is to expose useful organisational capabilities with appropriate controls.',
        ],
      },
      {
        title: 'Designing high-value programme workflows',
        points: [
          'Programme risk radar: emerging schedule, dependency and release risks.',
          'Release-readiness assessment from Jira, pipelines, security findings and decisions.',
          'Decision intelligence: extracting decisions, rationale and later invalidating evidence.',
          'Cross-programme dependency monitoring and evidence-backed executive reporting.',
          'Assumption monitoring and programme pre-mortems from several specialist viewpoints.',
        ],
      },
      {
        title: 'From demonstrations to dependable operations',
        points: [
          'Why a successful demonstration is not evidence that a workflow is ready to operate.',
          'Evaluation-driven development: representative scenarios, expected behaviour, tool selection and inputs.',
          'Measuring factual accuracy, evidence quality, and accepted, rejected or corrected recommendations.',
          'Testing incomplete or conflicting information, and detecting repeated or unauthorised actions.',
          'The question changes from whether Claude produced a good answer to whether the workflow holds up across the situations programme teams actually encounter.',
        ],
      },
      {
        title: 'Governed autonomy: people, permissions and cost',
        points: [
          'Actions that can run automatically, recommendations that need review, changes that need named approval, and decisions that should remain human.',
          'Least privilege, per-user versus shared identities, and read/write separation.',
          'Idempotency, duplicate-action protection and audit trails.',
          'Token and infrastructure cost, model routing, and measuring cost per successful outcome.',
        ],
      },
      {
        title: 'The next six months',
        points: [
          'Identify one recurring, evidence-rich workflow and its authoritative data sources.',
          'Define a narrow set of read-only tools and create representative evaluations.',
          'Pilot with experienced users; measure corrections, adoption, time saved and decision quality.',
          'Introduce controlled actions only after the read-and-recommend path is reliable.',
          'Reuse the connector, skills and evaluation set across related workflows.',
        ],
      },
    ],
    practicalWork:
      'The seminar is interactive rather than a lecture. Typical elements include a short AI-maturity poll, analysis of an example programme workflow, a connector and agent architecture walkthrough, a human-approval design exercise, and group identification of one high-value workflow to test. Discovery beforehand can replace the generic examples with your own systems and terminology.',
    takeaways: [
      'An AI-native programme-management maturity model',
      'A framework for identifying suitable agent workflows',
      'A reference architecture for custom Claude connectors',
      'A risk-based human-approval model',
      'An evaluation checklist',
      'A crawl–walk–run adoption roadmap',
      'A shared vocabulary for discussing AI agents with technical, operational and governance teams',
    ],
  },
];
