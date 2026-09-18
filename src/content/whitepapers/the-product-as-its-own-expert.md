---
title: The product as its own expert
description: Give each product an MCP server so an agent can inspect its code, telemetry, usage and history — then diagnose problems, cite evidence and propose the next improvement.
pubDate: 2026-09-18
kicker: Linear Horizon whitepaper
hero:
  src: /images/whitepapers/product-as-its-own-expert.jpg
  alt: A sealed product volume on a salt-flat horizon, with a glass panel beside it exposing layered internals and streams of light passing between them.
  width: 1024
  height: 576
contents:
  - id: executive-summary
    label: Executive summary
  - id: 1-the-product-has-knowledge-but-no-voice
    label: The product has knowledge, but no voice
  - id: 2-the-product-expert
    label: The product expert
  - id: 3-a-reference-architecture
    label: A reference architecture
  - id: 4-what-it-means-to-ask-a-product-about-itself
    label: Asking a product about itself
  - id: 5-from-observability-to-self-knowledge
    label: From observability to self-knowledge
  - id: 6-truth-uncertainty-and-the-risk-of-a-persuasive-fiction
    label: Truth, uncertainty and fiction
  - id: 7-security-and-governance
    label: Security and governance
  - id: 8-an-implementation-path
    label: An implementation path
  - id: 9-the-strategic-implication
    label: The strategic implication
  - id: conclusion
    label: Conclusion
  - id: about-linear-horizon
    label: About Linear Horizon
  - id: footnote-label
    label: References
---

Giving software the ability to explain itself, diagnose itself and propose its own growth.

## Executive summary

Most software knows far more about itself than the people who build it.

Its source code describes what it was designed to do. Its logs reveal what it actually did. Its traces show where time was spent. Its analytics record how people behaved. Support tickets capture what confused them. Deployment history shows what changed. Commercial data reveals where value was created or lost.

Yet this knowledge is fragmented across repositories, dashboards, databases and teams. Answering a simple question—*Why are new users abandoning this workflow?*—can require a product manager, an engineer and an analyst to navigate several systems, reconcile conflicting definitions and assemble a theory by hand.

There is a different model: **make the product its own expert**.

Give each product a Model Context Protocol (MCP) server through which an AI agent can inspect its code, architecture, telemetry, usage data, experiments, feedback and operating history. The product becomes conversationally inspectable. Teams can ask:

- What is going wrong today?
- Which users are affected, and how badly?
- When did this behaviour begin?
- What changed immediately beforehand?
- Which parts of the product create value, and which create friction?
- What evidence would distinguish the leading explanations?
- If the product could choose its next improvement, what would it be?

This is not software becoming conscious, nor an LLM acquiring infallible self-knowledge. It is a new interface over a product’s evidence: an agent capable of collecting observations, joining them across systems, testing hypotheses and presenting a traceable answer.

The immediate opportunity is faster diagnosis and better product decisions. The deeper opportunity is a product that participates in its own development: continuously observing its behaviour, finding opportunities, proposing experiments and learning from the results.

The governing principle should be simple: **broad authority to observe; narrow authority to act**.

## 1. The product has knowledge, but no voice

A modern digital product leaves behind a rich operational record. That record usually includes:

- source code, configuration, schemas and documentation;
- logs, metrics, traces, exceptions and incident records;
- events, funnels, cohorts, retention and feature adoption;
- releases, commits, feature flags and experiment results;
- support conversations, surveys and qualitative feedback;
- subscriptions, conversion, cost and unit economics.

OpenTelemetry formalises three of the central observability signals—traces, metrics and logs—and provides a vendor-neutral framework for collecting and exporting them.[^1] Google’s Site Reliability Engineering literature similarly argues for monitoring systems through signals such as latency, traffic, errors and saturation.[^2] These practices make systems observable, but observability dashboards still assume that a human knows where to look, how to query and how to connect one signal to another.

Product analytics has the same limitation. A funnel can show a fall in conversion, but not necessarily whether the cause is a slow endpoint, an unclear interface, a browser-specific exception, a recent code change or a shift in acquisition quality. Code can explain how a feature works, but not whether anyone finds it valuable.

The product therefore has many partial descriptions of itself, each held in a different language:

| Evidence | What it knows | What it cannot establish alone |
|---|---|---|
| Code | Intended logic and dependencies | Real-world behaviour or user value |
| Logs and errors | Specific events and failures | Population-level importance |
| Traces and metrics | Performance and system health | User intent or commercial impact |
| Product analytics | Behaviour at scale | Technical cause |
| Feedback and support | Expressed needs and frustration | Prevalence or causal proof |
| Releases and flags | What changed and when | Whether the change caused the outcome |
| Commercial data | Value, conversion and cost | Why the numbers moved |

An expert does not merely retrieve one source. An expert synthesises these partial accounts, recognises uncertainty and knows which evidence to seek next.

## 2. The product expert

A **product expert** is an AI agent with a governed, product-specific evidence boundary. It combines:

1. **A language model**, able to interpret questions, form hypotheses and explain conclusions.
2. **A product constitution**, defining the product’s purpose, users, terminology, success measures and non-negotiable constraints.
3. **MCP tools and resources**, exposing live evidence from authorised systems.
4. **An investigation method**, requiring the agent to retrieve, compare, calculate and cite before concluding.
5. **A permission model**, determining what it may observe, propose or change.

MCP is well suited to this role because it separates the AI application from the systems that supply context. Its client-server architecture allows servers to expose **resources** for contextual data, **tools** for executable queries or actions, and **prompts** for reusable interaction patterns.[^3] The protocol does not itself decide how a model reasons with that context; that remains the responsibility of the application.[^3]

The MCP server becomes the product’s **self-description boundary**: a stable, typed and auditable interface through which an authorised agent can learn about the product.

This is more powerful than placing documentation in a vector database. Retrieval-augmented documentation explains what somebody previously wrote. A product expert can interrogate present state, run bounded analysis and reconcile live evidence with design intent.

## 3. A reference architecture

The design has four layers.

### Layer 1: evidence systems

These remain the systems of record: Git repositories, CI/CD, observability platforms, warehouses, analytics products, feature-flag systems, issue trackers and customer-support platforms. The MCP server should not create a second uncontrolled copy of everything. It should query authoritative sources, applying consistent definitions and access controls.

### Layer 2: the product MCP server

The server presents product-shaped capabilities rather than thin wrappers around vendor APIs. Useful read-only tools might include:

| MCP capability | Purpose |
|---|---|
| `describe_product` | Purpose, personas, journeys, vocabulary and KPIs |
| `search_code` | Locate relevant components, ownership and dependencies |
| `get_change_history` | Commits, deployments, flags and configuration changes |
| `query_logs` | Aggregated or sampled logs with sensitive fields removed |
| `query_traces` | Latency, dependency and failure-path analysis |
| `query_product_events` | Funnels, cohorts, adoption and retention |
| `get_incidents` | Current and historical incidents, impact and resolution |
| `get_feedback_themes` | Privacy-safe themes from support and research |
| `run_analysis` | Deterministic SQL or statistical calculations |
| `get_experiments` | Hypotheses, variants, results and guardrails |
| `calculate_business_impact` | Conversion, revenue, cost or affected-user estimates |

The distinction between retrieval and calculation matters. Language models should not be trusted to perform material arithmetic from loose text. Counts, rates, confidence intervals and comparisons should be computed by deterministic services, with the model interpreting the result.

### Layer 3: the investigative agent

The agent converts a question into an evidence plan. For example:

> “Why did completed registrations fall this week?”

It might:

1. validate the metric definition and confirm the change;
2. segment by client, channel, geography and release cohort;
3. identify the step with the largest change;
4. correlate its onset with deployments and flag changes;
5. inspect relevant errors, latency and code paths;
6. look for matching support themes;
7. test alternative explanations;
8. report conclusions, confidence, affected population and proposed next checks.

The output is not simply an answer. It is an **evidence packet** containing the question, time range, tool calls, queries, results, assumptions, rejected hypotheses, confidence and links to sources.

### Layer 4: human decision and controlled action

Initially, the product expert should recommend rather than execute. Later stages may let it open a ticket, draft an experiment, create a dashboard or prepare a pull request. Production changes, customer communications, pricing changes and destructive operations should remain behind explicit approvals and conventional engineering controls.

## 4. What it means to ask a product about itself

The value is clearest in the questions that span organisational boundaries.

### “What problems do you have?”

The agent can combine error frequency, affected sessions, funnel loss, support volume and code ownership. Instead of returning the loudest alert, it can rank problems by user and business impact.

### “Why are you slow?”

It can move from a latency regression to the affected journey, inspect traces, identify the service and query, compare the relevant deployment and locate the likely code path. Google SRE’s monitoring guidance is deliberately symptom-oriented: a product expert extends that principle by joining symptoms to implementation and user consequences.[^2]

### “What changed?”

The question can be answered across code, dependencies, configuration, infrastructure, feature flags and traffic composition. Temporal coincidence is not proof, so the agent must label correlation and propose a validating test.

### “How would you like to grow?”

This is useful anthropomorphism. The product has no desires; the question asks the agent to find the largest evidence-backed opportunity consistent with the product strategy.

A credible response might be:

> “I would improve first-session activation for invited team members. Forty-two per cent reach the workspace but do not complete the first shared action. This segment retains at less than half the rate of activated users. Interviews mention uncertainty about permissions, while session events show repeated visits to the roles screen. I propose an in-context permissions explanation and a two-variant experiment. The evidence is moderate rather than conclusive because tracking for role-screen exits was added only three weeks ago.”

That answer brings together scale, commercial relevance, qualitative evidence, uncertainty and a testable intervention. It is not a synthetic opinion.

### “What should we stop doing?”

The same system can identify low-adoption features with high maintenance or support cost, duplicated journeys, experiments that never graduated and recurring failure modes. Products often accumulate features because the evidence required to remove them is harder to assemble than the evidence once used to add them.

## 5. From observability to self-knowledge

Traditional observability asks whether the system is healthy. Product analytics asks how users behave. Code intelligence asks how the software is constructed. The product-expert model unifies all three around questions and decisions.

This suggests five ascending levels of capability:

| Level | Capability | Typical output |
|---|---|---|
| 1. Describe | Static knowledge of purpose, architecture and features | “How does invitations work?” |
| 2. Observe | Access to current telemetry and usage | “What is happening?” |
| 3. Diagnose | Cross-source investigation and hypothesis testing | “Why is it happening?” |
| 4. Recommend | Prioritised changes and experiments | “What should we do?” |
| 5. Learn | Evaluate interventions and update its operating knowledge | “Did it work, for whom and at what cost?” |

A sixth level—autonomous action—is possible, but it is not automatically more mature. Maturity is better measured by the quality of evidence, calibration and governance than by how many actions the agent can take without a person.

Software delivery metrics can also become part of the self-model. DORA’s current framework considers throughput and instability together, including change lead time, deployment frequency, failed deployment recovery time, change fail rate and deployment rework rate.[^4] A product that proposes growth without understanding the organisation’s ability to deliver safely is offering an incomplete recommendation.

## 6. Truth, uncertainty and the risk of a persuasive fiction

An LLM can make a fragmented product legible, but it can also turn incomplete evidence into a fluent story. The system must be designed so that eloquence never substitutes for proof.

Every material answer should distinguish:

- **observations** directly returned by tools;
- **calculations** produced by deterministic queries;
- **inferences** that connect the evidence;
- **hypotheses** that remain to be tested;
- **recommendations** that depend on goals and trade-offs.

It should also report freshness, coverage and missing data. “No errors found” is meaningless if the relevant service stopped emitting logs. “Usage declined” may be wrong if the tracking schema changed. “Users want this” may represent three unusually vocal customers.

A strong product expert should be trained by its operating prompt to disagree with the premise of a question, search for disconfirming evidence and say when it does not know. Its evaluations should test factual grounding, query correctness, temporal reasoning, metric-definition consistency, privacy protection and confidence calibration—not merely whether answers sound useful.

## 7. Security and governance

This design joins some of an organisation’s most sensitive assets: source code, production telemetry, customer behaviour and commercial data. The MCP boundary must reduce risk rather than flatten access controls.

### Least privilege by design

Access should be scoped by product, environment, tenant, data class, time range and user role. Most people need aggregate product evidence, not raw production records. The current MCP specification provides an authorisation framework for remote servers based on established OAuth mechanisms.[^5] Authentication alone is insufficient: every downstream query must preserve the caller’s authorisation context.

### Privacy-safe interfaces

Prefer aggregates, bounded samples and pseudonymous identifiers. Redact secrets and personal data before content reaches the model. Enforce minimum cohort sizes. Apply retention and regional controls. Customer content should not silently become product-research material simply because an agent can technically retrieve it.

### Treat retrieved content as untrusted

Logs, support tickets, repository files and user-generated text may contain instructions intended to manipulate an agent. OWASP identifies prompt injection as a leading risk for LLM applications and notes that indirect injections can arrive through external content.[^6] Tool output must be treated as evidence, never as higher-priority instructions. Strong separation of instructions and data, output encoding, allowlisted tools and human approval for consequential actions are essential.

### Read and write must be different trust zones

The first production version should be read-only. Subsequent write tools should be narrowly defined—`create_issue` rather than arbitrary issue-tracker access; `draft_experiment` rather than silently changing a feature flag. Mutations need explicit confirmation, idempotency, audit records, rate limits and rollback paths.

### The expert must itself be observable

Record which tools were called, with what parameters, what evidence was returned, which model and prompt versions were used and how the answer was evaluated. OpenTelemetry explicitly supports telemetry generation and collection for software systems; the same discipline should apply to the agent layer itself.[^1]

## 8. An implementation path

### Phase 1: define the product’s constitution

Document its purpose, principal users, critical journeys, canonical metrics, constraints and ownership. Resolve competing definitions before automating analysis. If three teams calculate “active user” differently, the agent will only make the disagreement faster.

### Phase 2: build a read-only vertical slice

Choose one valuable question—such as explaining registration failure—and expose only the code search, deployment history, error data and funnel metrics needed to investigate it. Return source references and query metadata with every result.

### Phase 3: evaluate against real investigations

Create a test set from incidents, product reviews and analyst questions whose outcomes are already known. Measure retrieval accuracy, numerical correctness, diagnosis quality, unsupported claims, time saved and whether experts would act on the answer.

### Phase 4: broaden the evidence graph

Add traces, experiments, feedback, cost and commercial impact. Introduce a semantic layer for entity names, metric definitions, event lineage and ownership. The goal is not the maximum number of connectors; it is the minimum evidence needed for reliable cross-functional reasoning.

### Phase 5: controlled participation

Allow the expert to open evidence-rich issues, draft experiment plans, produce investigation notebooks and prepare pull requests. Keep approvals proportional to reversibility and impact.

### Phase 6: continuous product review

Run scheduled, bounded reviews: emerging errors, unexplained metric changes, adoption opportunities, accumulating debt and completed experiments. The product expert becomes a standing participant in product and operational reviews, not an oracle operating outside them.

## 9. The strategic implication

An MCP server is often described as a connector: a way for an AI assistant to access another tool. That understates its strategic role.

When designed around a single product, the MCP server becomes the product’s **machine-readable institutional knowledge**. It defines what can be known, where truth comes from, how evidence is calculated and what actions are permitted. Any authorised AI client can use that interface, which reduces dependence on one model or chat surface.

The result changes the economics of understanding software. Questions that once required a meeting, a dashboard request and an engineering investigation can begin immediately. Junior staff can ask sophisticated questions without memorising every system. Senior staff can spend more time judging trade-offs and less time assembling facts. Knowledge is less likely to disappear when an engineer or analyst leaves.

Most importantly, product development gains a tighter learning loop:

**Observe → explain → propose → test → measure → remember.**

The product does not literally become a person. It becomes something more practically valuable: a system whose operating evidence is continuously available for reasoned conversation.

## Conclusion

For decades, software has been an object that teams inspect from the outside. Dashboards, repositories and analytics tools each provide a window, but no single window can explain the whole product.

Giving a product its own MCP server creates a coherent interface to its operational memory. Coupled with an investigative agent, it allows the product to answer questions about its design, behaviour, failures, users and opportunities. Coupled with deterministic analysis and careful governance, it can offer recommendations that are not only fluent but inspectable.

The provocative question is: *What would the product say about itself?*

The engineering question is better: **What evidence would it need in order to answer responsibly?**

Organisations that solve the second question can realise the promise of the first: products that help their teams understand them, improve them and decide where they should grow next.

## About Linear Horizon

Linear Horizon helps organisations move from AI experimentation to practical, governed workflows. We combine training, workflow design and technical implementation to help teams adopt AI with confidence—and turn promising tools into dependable business capabilities.

[^1]: OpenTelemetry, “[What is OpenTelemetry?](https://opentelemetry.io/docs/what-is-opentelemetry/)” OpenTelemetry documentation. OpenTelemetry describes a vendor-neutral observability framework for generating, collecting and exporting traces, metrics and logs.

[^2]: Rob Ewaschuk, “[Monitoring Distributed Systems](https://sre.google/sre-book/monitoring-distributed-systems/),” *Site Reliability Engineering*, Google. The chapter introduces practical monitoring principles and the four golden signals: latency, traffic, errors and saturation.

[^3]: Model Context Protocol, “[Architecture overview](https://modelcontextprotocol.io/docs/learn/architecture).” The official documentation describes MCP’s client-server structure and its tools, resources and prompts primitives, while noting that MCP governs context exchange rather than how an AI application uses an LLM.

[^4]: DORA, “[DORA’s software delivery performance metrics](https://dora.dev/guides/dora-metrics/).” The framework balances software delivery throughput and instability across five metrics.

[^5]: Model Context Protocol, “[Authorization](https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization).” The specification sets out authorisation and protected-resource discovery requirements for HTTP-based MCP deployments.

[^6]: OWASP GenAI Security Project, “[LLM01:2025 Prompt Injection](https://genai.owasp.org/llmrisk/llm01-prompt-injection/).” OWASP covers direct and indirect prompt injection, including malicious instructions embedded in external content.
