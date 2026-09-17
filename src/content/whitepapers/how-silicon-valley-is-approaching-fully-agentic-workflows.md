---
title: How Silicon Valley is approaching fully agentic workflows
description: Leading technology companies are not making entire organisations autonomous. They are making particular workflows agentic — with a defined objective, connected context, bounded authority and deliberate human control.
pubDate: 2026-09-16
kicker: Linear Horizon whitepaper
contents:
  - id: what-fully-agentic-should-mean
    label: What “fully agentic” should mean
  - id: google-agents-become-part-of-the-production-system
    label: Google
  - id: cisco-the-ten-hour-programme-report-becomes-a-fifteen-minute-review
    label: Cisco
  - id: datasite-the-work-becomes-the-report
    label: Datasite
  - id: procore-a-roadmap-that-improves-itself
    label: Procore
  - id: kärcher-four-agents-prepare-one-product-decision
    label: Kärcher
  - id: ftmo-autonomy-with-an-emergency-brake
    label: FTMO
  - id: a-short-operational-example-washmen
    label: Washmen
  - id: block-employees-build-the-tools-they-need
    label: Block
  - id: the-pattern-behind-the-stories
    label: The pattern behind the stories
  - id: a-monday-morning-in-an-agentic-programme-office
    label: A Monday morning
  - id: what-this-means-for-organisations-beginning-now
    label: Organisations beginning now
  - id: conclusion
    label: Conclusion
  - id: sources-and-notes
    label: Sources and notes
  - id: about-linear-horizon
    label: About Linear Horizon
---

The idea of the “fully agentic” company is becoming a new benchmark for AI adoption. In this imagined organisation, artificial intelligence does not wait passively for an employee to type a prompt. Agents monitor work, identify what needs attention, gather evidence, coordinate with other systems and undertake appropriate actions before a person intervenes.

It is an arresting picture. A programme manager opens a portfolio on Monday morning and sees that two programmes are red. The important difference is that the organisation has not merely detected the problems. Evidence has already been assembled, missing updates requested, recovery options prepared and the right people brought together. The programme manager begins with judgement rather than administration.

But is this how leading technology companies actually work?

The published evidence suggests a more interesting answer. Google, Cisco, Datasite, Procore, Kärcher, FTMO, Washmen and Block are not making their entire organisations autonomous in a single transformation. They are making particular workflows agentic: giving AI a defined objective, reliable context, selected tools and bounded permission to advance the work.

The emerging model is not a company without people. It is a company in which people no longer have to initiate, coordinate and document every step themselves.

## What “fully agentic” should mean

The phrase is often used loosely. Sometimes it describes little more than access to a sophisticated chatbot. At other times it evokes a largely autonomous organisation run by artificial intelligence.

A useful practical definition sits between those extremes. An agentic workflow has five characteristics:

- It works towards an **objective**, rather than responding to one isolated instruction.
- It can use **tools and information**, including live organisational systems.
- It can perform **multiple steps**, adapting its plan as new information appears.
- It can take **permitted actions**, rather than only describing what a person should do.
- It knows when to **stop or escalate**, leaving consequential decisions with an accountable human.

“Fully agentic” should therefore not mean that an agent has unlimited autonomy. A mature agentic workflow may have very little discretion over consequential decisions. What makes it agentic is that it can continue advancing the work within clearly defined boundaries.

The leading organisations examined in this paper are converging on that pattern: persistent capability, connected organisational context, limited authority and deliberate human control.

## Google: agents become part of the production system

<figure>
  <img src="/images/whitepapers/agentic-workflows/google.jpg" alt="Stylised illustration of autonomous agents working a software production floor while a person reviews completed work" width="1280" height="720" loading="lazy" decoding="async" />
</figure>

Google provides some of the clearest evidence that agents are becoming operational infrastructure, although its strongest published examples concern software engineering rather than programme management.

Google describes Antigravity as an “agent-first” development platform. Its 2026 iteration extends beyond an individual coding assistant into an environment where a person can orchestrate cohorts of autonomous agents. Those agents can undertake long-running work, use development tools and operate asynchronously rather than requiring the engineer to supervise every step.

At Google I/O in May 2026, Sundar Pichai said that Google’s internal AI development tools were processing more than three trillion tokens a day, up from half a trillion in March. This does not by itself measure business value, but it demonstrates that agentic development is no longer a small experiment inside the company. It has become part of the way Google builds.

The workflow is qualitatively different from code completion. A developer can assign a larger objective, allow an agent to investigate the codebase, change files, run tools and return with completed work. The person moves from producing each unit of output to setting direction, reviewing evidence and accepting or rejecting the result.

Google is also developing the surrounding architecture required for wider agentic work. Its published platforms support:

- agents that continue running in the background
- persistent state and memory
- permission-aware access to enterprise systems
- connections to platforms including Jira, Confluence, SharePoint and ServiceNow
- secure execution environments
- agent-to-agent delegation
- human control over goals and actions

The lesson from Google is not that the whole company is already autonomous. No reliable public evidence supports that claim. The lesson is that agentic work becomes credible when agents are treated as operational participants with environments, tools, permissions and supervision—not as chat windows with impressive language skills.

For programme leaders, Google’s engineering experience offers a useful analogy. The future programme agent will not simply write a better status report. It will be given a continuing responsibility: monitor this programme, compare reality with plan, investigate discrepancies, assemble evidence and escalate when defined conditions are met.

## Cisco: the ten-hour programme report becomes a fifteen-minute review

<figure>
  <img src="/images/whitepapers/agentic-workflows/cisco.jpg" alt="Stylised illustration of scattered programme tools collapsing into a single live briefing" width="1280" height="720" loading="lazy" decoding="async" />
</figure>

Cisco provides the strongest published example of agentic workflow adoption applied directly to programme management.

Cisco Networking had accumulated decades of operational complexity. Its teams worked across more than 70 Jira Data Center instances, nine Aha! environments, a legacy work-management platform and approximately 75 other tools. Programme information also lived in PowerPoint, Excel, Word and SharePoint.

The problem was not simply the number of systems. Different groups lacked a common definition of basic concepts such as a programme, feature or standard workflow state. Leadership could not see one dependable roadmap across the organisation. Programme managers spent significant time assembling information that technically already existed.

Cisco first addressed the foundation. It consolidated work onto an Atlassian cloud platform, established common terminology and connected programme status, health and approvals to live Jira information. Its “commit deck” became a living Confluence document rather than a static PowerPoint assembled separately from the work.

Only then did the agentic layer become powerful.

Cisco built agents and applications that:

- retrieve programme health information
- assemble risks and path-to-green data
- include schedule and customer-impact information
- generate concise executive summaries
- create a standard Confluence commit deck
- place it automatically in the correct programme space
- present live evidence for leadership review

Cisco reports that programme-management reporting became 40 times faster and weekly status updates became 24 times faster. A task that previously required a programme manager to spend ten hours assembling information reportedly fell to approximately fifteen minutes.

That distinction matters. The programme manager has not been removed. The agent has removed the search, reconciliation, transcription and formatting that previously stood between the manager and the decision.

The old workflow was:

> Find the information. Chase the owners. Reconcile the contradictions. Build the deck. Explain the position.

The emerging workflow is:

> Review the evidence. Challenge the assessment. Exercise judgement. Decide what happens next.

Cisco’s story also demonstrates why an agent cannot compensate for a fragmented operating model. If teams disagree about what “red” means, or if health and risk information is not maintained in an authoritative system, an agent will automate ambiguity. Standardisation and connection are what allow the agent to become dependable.

## Datasite: the work becomes the report

<figure>
  <img src="/images/whitepapers/agentic-workflows/datasite.jpg" alt="Stylised illustration of a factory-floor view of live organisational work" width="1280" height="720" loading="lazy" decoding="async" />
</figure>

Datasite supplies perhaps the closest published example to the agentic programme office imagined at the beginning of this paper.

The company had more than 200 objectives and key results, fragmented planning tools and no single view connecting strategy to delivery. Executives lacked current visibility. Teams compensated with static reporting and a dense calendar of coordination meetings.

The request from Datasite’s Chief Product Officer was strikingly concrete: he wanted a “factory-floor view”—not another summary or presentation, but a live view of work from strategy through execution.

Datasite responded with what it calls its “Idea to Impact Framework.” In the resulting workflow:

- proposed initiatives enter through a common intake process
- agents help triage and score them
- approved initiatives move into delivery with their context intact
- execution, knowledge and recorded updates remain connected
- leaders monitor progress against strategy through live dashboards
- executives can ask questions such as which initiatives are affecting customer churn and receive answers grounded in current work

Recorded updates and meeting recaps become part of the organisation’s searchable knowledge. Instead of requesting another bespoke status report, a leader can interrogate the operating system directly.

Datasite reports that it eliminated more than 4,000 meetings in five months, representing more than $500,000 in time savings. It reduced attendance at its monthly business review from 125 people to 15—a 90 per cent reduction—and rationalised 216 OKRs into three company-wide objectives and twelve key results.

The most important phrase in Datasite’s account is simple:

> The work is the report.

This does not mean that narrative, interpretation and leadership communication disappear. It means that the underlying evidence no longer has to be repeatedly copied out of the work and reconstructed for every audience.

For programme managers, this represents a significant shift in professional emphasis. Their value moves away from operating a human information network and towards designing the management system, challenging its conclusions and leading the interventions that follow.

## Procore: a roadmap that improves itself

<figure>
  <img src="/images/whitepapers/agentic-workflows/procore.jpg" alt="Stylised illustration of a construction structure overlaid with a roadmap being improved" width="1280" height="720" loading="lazy" decoding="async" />
</figure>

Procore, the California-based construction software company, faced a related portfolio problem. Its workforce had grown rapidly, but roadmaps were fragmented across spreadsheets, slide decks and text documents. Roadmap items were disconnected from the Jira environments where delivery work happened. Leadership lacked a reliable view of how initiatives connected to execution and strategy.

Procore created a company-wide quarterly roadmap linked to teams’ delivery spaces and software components. It then introduced custom agents into the planning process.

Those agents can:

- create draft quarterly roadmap items
- propose initiatives and sub-initiatives
- review the quality of existing initiatives
- score submissions and suggest improvements
- identify missing stakeholder engagement
- prompt teams to consult affected or dependent groups

This is not autonomous portfolio strategy. People still determine priorities and review the proposed work. But the agents make the portfolio more complete, consistent and decision-ready before it reaches leadership.

Procore reports that Rovo saves participating employees an average of 46 minutes per day, equivalent to 23 hours per month. It also attributes a 17 per cent reduction in rework and a 24 per cent improvement in completion speed to the new system and agent workflows.

The deeper change is visible in planning meetings. Senior leaders can interrogate live organisational information rather than wait for someone to compile another report. Ownership, dependencies, recent initiatives and delivery activity are connected in the same operating environment.

The agent’s role is therefore not merely to generate content. It acts as a portfolio coach and quality gate. It improves the material entering the decision process and directs human attention towards omissions, dependencies and weak reasoning.

For programme managers, this may be one of the most valuable forms of agency. Many programme failures do not begin with a dramatic event. They begin with an assumption nobody challenged, a dependency nobody owned or a risk repeatedly carried forward without an effective response. An agent that persistently checks for those conditions can improve the system without taking control of the decision.

## Kärcher: four agents prepare one product decision

<figure>
  <img src="/images/whitepapers/agentic-workflows/karcher.jpg" alt="Stylised illustration of four agent stations preparing a single product decision" width="1280" height="720" loading="lazy" decoding="async" />
</figure>

Kärcher’s digital-platform team provides a compact example of several agents collaborating around a single piece of work.

The team previously assessed new feature proposals through live meetings and scattered notes. Turning the resulting discussion into a coherent user story required hours of manual consolidation.

Kärcher created a virtual product team in Google Workspace Studio. When someone proposes a feature idea in Chat:

- a brainstorming agent assesses the idea’s merit
- a technical agent performs a feasibility check
- a user-experience agent describes a possible user flow
- a final agent combines the earlier outputs into a complete user story for human review

Kärcher reports that this reduced drafting time by 90 per cent, turning hours of work into a review-ready plan in approximately two minutes.

The important feature is the separation of responsibilities. One general-purpose assistant is not being asked to produce an instant answer with an air of certainty. Distinct agents examine the proposal through different lenses, and the final output remains explicitly subject to team review.

The agents do not decide what Kärcher should build. They ensure that each idea reaches the human decision point more thoroughly examined and consistently expressed.

## FTMO: autonomy with an emergency brake

<figure>
  <img src="/images/whitepapers/agentic-workflows/ftmo.jpg" alt="Stylised illustration of a financial workflow halted at an emergency brake for human review" width="1280" height="720" loading="lazy" decoding="async" />
</figure>

FTMO, a financial technology company, demonstrates how an agentic workflow can combine speed with deliberate human escalation.

Its invoice workflow begins when a PDF is uploaded. Agents extract the vendor, reference and due date; compare the supplier with an internal registry; assign the appropriate roles; and route the invoice through a five-stage approval process. Each approval or rejection is documented with a timestamped audit record.

For routine invoices, the upload can be the only manual act required to begin the process. But the more important behaviour occurs when the evidence does not fit. If the agent identifies a terminated supplier or a registry mismatch, it pauses the workflow and returns the invoice to a person with an explanatory comment.

FTMO describes the intended balance as speed for the straightforward 90 per cent and a clear flag for the 10 per cent requiring judgement. It also uses agents to classify operational incidents, route them to the appropriate engineering team and provide engineers with contextual summaries. Across more than 350 people in eight departments, the company reports a 30 per cent reduction in status meetings and approximately $150,000 in annual savings.

This is an important corrective to the idea that becoming agentic means maximising the number of decisions made without people. A well-designed agent does not merely know how to proceed. It knows what uncertainty should prevent it from proceeding.

For a programme office, the equivalent is an agent that can request overdue evidence, create a draft recovery action and route an issue—but cannot quietly resolve a contradictory status, accept material scope change or make a customer commitment.

## A short operational example: Washmen

<figure>
  <img src="/images/whitepapers/agentic-workflows/washmen.jpg" alt="Stylised illustration of garments on a rail, with a high-value item held at a risk gate" width="1280" height="720" loading="lazy" decoding="async" />
</figure>

Washmen connected its physical garment-care operation to a sequence of specialised agents. The agents establish an item’s value, check its proposed treatment against risk categories and compare it with historical claims. If a high-value item has a risky care plan, the system raises a structured alert and prevents production from starting until a person reviews it.

Washmen reports a 40–50 per cent reduction in manual work, claims resolution falling from two or three days to six hours, and fifteen high-risk damage incidents prevented. The relevance for programme management is not the garment-care setting. It is the operating pattern: detect risk early, assemble the evidence, take a safe reversible action and escalate before harm occurs.

## Block: employees build the tools they need

<figure>
  <img src="/images/whitepapers/agentic-workflows/block.jpg" alt="Stylised illustration of employees assembling their own tools at workshop benches" width="1280" height="720" loading="lazy" decoding="async" />
</figure>

Block, the financial technology company founded by Jack Dorsey, approached agentic adoption by giving employees a general-purpose agent called Goose.

Goose uses Claude by default and can do more than generate text. It can work with local files, run commands and connect to external tools and data through the Model Context Protocol. This allows it to turn a request into real action: investigate information, manipulate data, create a visualisation or prototype a working application.

During a company-wide hackathon, Block employees used Goose to create prototypes including a database debugger, a duplicate-code detector and an application for automating Bitcoin support. The company also encouraged non-engineers to use the agent, enabling people closer to a problem to build a first version of the solution themselves.

For programme and product managers, this changes the relationship between identifying a need and testing a response. A programme manager who repeatedly loses visibility of cross-team dependencies might ask an agent to connect to the relevant data and create a working dependency view. A product manager could turn a proposed workflow into a functioning prototype before requesting a production engineering commitment.

The first version does not need to be production-ready to create value. It allows the person who understands the operational problem to make the idea concrete, test assumptions and show colleagues what is needed.

Block’s experience also supplies an important warning. Goose can make mistakes, including unsafe changes to files. Block therefore runs it in environments where work can be rolled back and subjects its output to human review.

This is a recurring feature of mature agentic adoption: increased capability is accompanied by stronger recovery mechanisms. The organisation does not assume the agent will never fail. It designs the environment so that failure is observable, containable and reversible.

## The pattern behind the stories

These companies use different technologies and operate in different domains, but their approaches reveal five common principles.

### 1. They make a workflow agentic, not the entire company

The phrase “fully agentic organisation” suggests a single destination. In practice, adoption proceeds workflow by workflow.

Google applies persistent agents to software development. Cisco applies them to programme reporting. Datasite applies them across initiative intake and portfolio visibility. Procore applies them to roadmap quality. Kärcher uses a virtual team to prepare product decisions. FTMO and Washmen use agents to move routine work forward while escalating exceptions. Block allows employees to create tools and prototypes around their own problems.

The useful unit of adoption is therefore not the department, licence or model. It is the workflow: a recognisable sequence of work with an outcome, inputs, actions, decision points and an accountable owner.

### 2. They create connected context before granting autonomy

The agent needs an operational picture of the work. Cisco and Procore both demonstrate that connected, standardised information is a prerequisite for trustworthy action.

Without common terminology, reliable ownership and authoritative sources, more autonomy merely produces errors more quickly. Datasite’s live strategy-to-execution view and FTMO’s supplier registry illustrate the same principle in very different settings. The successful sequence is:

> Standardise the work. Connect the evidence. Then allow the agent to act.

### 3. They automate coordination before judgement

The early targets are the activities surrounding a decision:

- finding information
- requesting updates
- reconciling sources
- checking completeness
- formatting reports
- identifying dependencies
- preparing options
- routing work to the right person

These activities consume substantial time but rarely represent the highest value of the programme manager’s role.

### 4. They place humans at consequence boundaries

An agent can create a draft Jira action, prepare a recovery plan or request missing evidence. It should not automatically make every commitment available to it. FTMO’s workflow stops on a vendor discrepancy; Washmen’s stops risky production. In both cases, escalation is a designed capability rather than evidence that automation has failed.

Changes to programme scope, material expenditure, contractual commitments, public communication and strategic priorities require accountable human judgement. The goal is not to keep a person inside every step. It is to bring the person in where authority and consequences justify it.

### 5. They measure operational outcomes

The strongest stories are expressed in time saved, rework avoided, reporting accelerated and decisions improved—not prompts sent or tokens consumed.

Cisco measures the reduction in reporting effort. Procore measures time, completion speed and rework. Datasite counts meetings eliminated and participation no longer required. Kärcher measures the time from idea to review-ready plan. FTMO and Washmen measure operational effort and resolution speed. These measures connect agent activity to the work the organisation is trying to improve.

## A Monday morning in an agentic programme office

These patterns allow us to describe a credible near-future workflow without pretending it is already universal.

At 8:47 on Monday morning, a programme director opens the portfolio view. There are 34 programmes: 26 green, six amber and two red.

The status is not simply a reproduction of what programme owners reported on Friday. During the weekend, a portfolio agent compared milestones, dependencies, risks, decisions and delivery activity with the agreed programme baseline.

One programme has moved from amber to red. Its delivery date has not changed, but three critical milestones have slipped. Meeting records reveal declining confidence, while a dependent team has made an incompatible commitment elsewhere.

The agent has already:

- gathered the supporting evidence
- requested three missing updates
- identified the unowned dependency
- drafted actions for review
- compared possible recovery scenarios
- prepared a sponsor briefing
- provisionally arranged a recovery discussion

It has not changed the committed date, reduced scope, moved budget or made a promise to a customer. Those choices are waiting for the programme director.

The director does not begin by discovering the problem. She begins by understanding it and deciding what the organisation should do.

No single published case examined in this paper implements that complete scenario. But every component is visible in current practice: Google’s asynchronous agents, Cisco’s programme summaries and commit decks, Datasite’s live portfolio questions, Procore’s quality and dependency checks, Kärcher’s multi-agent preparation, FTMO’s exception routing, Washmen’s preventive intervention and Block’s tool-using employee agents.

The future is not arriving as one autonomous system. It is being assembled from bounded capabilities that are already working.

## What this means for organisations beginning now

The stories offer a more encouraging route than attempting to become “fully agentic.”

Choose one recurring workflow that consumes attention without requiring continuous human judgement. Define the outcome and identify the authoritative sources. Agree what good looks like. Decide what the agent may read, propose, change and send. Require approval at the points where mistakes become consequential.

Programme health reporting is a strong candidate because organisations already understand the process, possess much of the information and can compare the agent’s result with existing practice.

A sensible progression might be:

1. The agent drafts a report from information supplied by the programme manager.
2. The team agrees shared definitions, formats and quality criteria.
3. The agent retrieves live information from authorised programme systems.
4. It detects missing or contradictory evidence and requests clarification.
5. It creates draft actions and routes proposed interventions for approval.
6. It monitors whether agreed actions occur and escalates exceptions.

At each step, authority increases only when reliability, value and control justify it.

## Conclusion

Silicon Valley is not becoming fully agentic through a single dramatic act. It is redesigning the boundary between human responsibility and machine action.

Google shows agents becoming persistent participants in production work. Cisco shows programme reporting turning from manual assembly into evidence review. Datasite shows the work itself becoming a live portfolio report. Procore shows agents improving roadmap quality before leadership decisions. Kärcher shows a virtual team preparing a product decision. FTMO and Washmen show why safe autonomy includes the ability to stop and escalate. Block shows employees creating operational tools directly from their understanding of a problem.

The common direction is clear. AI is moving from answering questions to participating in workflows—from generating material to monitoring conditions, using tools and advancing work.

But the most mature examples do not remove human responsibility. They concentrate it. The agent searches, reconciles, drafts, checks, routes and follows up. People set intent, handle ambiguity, make consequential decisions and remain accountable for the result.

The practical ambition is therefore not to make the whole company autonomous. It is to create a growing portfolio of trusted workflows in which useful action no longer has to wait for someone to ask.

The agentic organisation is built one bounded, connected and accountable workflow at a time.

## Sources and notes

- Google, [“I/O 2026: Welcome to the agentic Gemini era”](https://blog.google/innovation-and-ai/sundar-pichai-io-2026/). Google’s account of internal Antigravity usage, autonomous-agent orchestration and long-running background agents.
- Google Cloud, [“Introducing Gemini Enterprise Agent Platform”](https://cloud.google.com/blog/products/ai-machine-learning/introducing-gemini-enterprise-agent-platform). Product architecture for long-running agents, secure execution and agent-to-agent orchestration.
- Atlassian, [“Cisco Networking halved TCO by centralizing teams on one Atlassian cloud platform”](https://www.atlassian.com/customers/cisco). Customer-reported programme-management, reporting and operational metrics.
- Atlassian, [“How Datasite drove $500,000+ in productivity savings in five months”](https://www.atlassian.com/customers/datasite). Customer-reported initiative-triage, portfolio-visibility, meeting and productivity outcomes.
- Atlassian, [“Procore unifies teamwork and roadmaps in one System of Work”](https://www.atlassian.com/customers/procore). Customer-reported roadmap-agent workflows and productivity metrics.
- Google Workspace, [“Introducing Google Workspace Studio to automate everyday work with AI agents”](https://workspace.google.com/blog/product-announcements/introducing-google-workspace-studio-agents-for-everyday-work). Kärcher’s multi-agent feature-intake workflow and customer-reported drafting-time reduction.
- Asana, [“FTMO saves $150K annually with Asana AI-powered workflows”](https://asana.com/case-study/ftmo). Customer-reported incident, invoice, exception-handling and coordination outcomes.
- Asana, [“Washmen achieves 90% faster claim resolution with Asana”](https://asana.com/case-study/washmen). Customer-reported connected-agent workflow, preventive-risk and resolution outcomes.
- WIRED, [“Jack Dorsey’s Block Made an AI Agent to Boost Its Own Productivity”](https://www.wired.com/story/jack-dorseys-block-made-an-ai-agent-to-boost-its-own-productivity/). Reporting on Block’s internal Goose deployment, uses and controls.

Except where otherwise indicated, numerical outcomes in the company stories are drawn from vendor-published customer accounts. They should be understood as customer-reported results rather than independent evaluations.

## About Linear Horizon

Linear Horizon helps organisations move from AI experimentation to practical, governed workflows. We combine training, workflow design and technical implementation to help teams adopt AI with confidence—and turn promising tools into dependable business capabilities.
