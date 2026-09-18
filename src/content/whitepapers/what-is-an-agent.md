---
title: What is an agent? What does it mean to be agentic?
description: An agent is an LLM, plus a prompt, plus tools — placed inside a loop that lets it pursue a goal. To be agentic is to give a system limited discretion over how that goal is achieved.
pubDate: 2026-09-18
kicker: Linear Horizon whitepaper
contents:
  - id: from-answers-to-actions
    label: From answers to actions
  - id: the-three-essential-parts
    label: The three essential parts
  - id: what-makes-a-system-agentic
    label: What makes a system agentic
  - id: agentic-workflows-are-not-the-same-as-automation
    label: Agency and automation
  - id: an-example-a-programme-management-agent
    label: A programme-management agent
  - id: autonomy-is-not-the-absence-of-control
    label: Autonomy and control
  - id: agents-can-work-together
    label: Agents can work together
  - id: the-real-test
    label: The real test
  - id: a-compact-definition
    label: A compact definition
  - id: about-linear-horizon
    label: About Linear Horizon
---

An agent is an LLM, plus a prompt, plus tools.

That is the simplest useful definition.

The large language model provides the reasoning engine. The prompt gives it a role, a goal and some rules. The tools allow it to do things beyond generating text: search for information, read a document, query a database, write code, send a message, update a system or call another service.

Put those three parts together and you have the basis of an agent.

But the word agentic describes something slightly more important. It describes how the system behaves.

An agentic system does not merely answer a question. It works towards an outcome.

## From answers to actions

A conventional chatbot follows a simple pattern:

1. A person sends a message.
2. The model generates a response.
3. The interaction stops.

An agent can operate differently:

1. It receives a goal.
2. It decides what information or action is needed.
3. It chooses an appropriate tool.
4. It examines the result.
5. It decides what to do next.
6. It continues until it has completed the task, reached a limit or needs human help.

The difference is the loop.

Instead of producing one plausible answer, the system can take a series of steps, use the real results of those steps and adapt its behaviour as it goes.

Ask a chatbot to prepare a weekly project report and it may tell you how to write one. Ask an agent with the right access and it might read the project board, inspect recent messages, identify delayed work, draft the report and place it in the correct document for approval.

The intelligence may come from the same kind of language model. What changes is the system built around it.

## The three essential parts

### 1. The LLM: the reasoning engine

The LLM interprets language, considers the available information and decides what to do next. It can break a task into smaller steps, compare alternatives, interpret tool results and produce a final response.

It is not a database, a calculator or a source of guaranteed facts. It is better understood as a flexible reasoning and language layer that can coordinate those other capabilities.

### 2. The prompt: the role and rules

The prompt defines what the agent is there to do and how it should behave.

It might tell the agent:

- what outcome it is responsible for;
- which decisions it may make;
- which actions require approval;
- which sources it should trust;
- how it should respond when information is missing;
- when it must stop and ask a human.

A good agent prompt is not simply a personality description. It is closer to an operating brief: purpose, scope, policies, boundaries and measures of success.

### 3. The tools: the ability to affect the world

Without tools, an LLM can only work with the information in its context and return generated content. Tools connect it to systems where work actually happens.

Tools might include:

- web search;
- databases and data warehouses;
- email, calendars and messaging platforms;
- CRM, finance and support systems;
- code execution;
- document creation;
- internal APIs;
- specialist models for vision, speech or forecasting.

A tool does not have to be dramatic. Reading a file is a tool call. Running a calculation is a tool call. Looking up the current status of a project is a tool call. What matters is that the model can choose a capability, supply the right inputs and use the result.

## What makes a system agentic?

Agency is not an on/off switch. Systems can be more or less agentic.

At the least agentic end, an LLM generates text inside a fixed process. Every step has been designed in advance by a human. The model may summarise a document or classify an enquiry, but it does not decide what happens next.

Further along, the model can select from several tools and determine the order in which to use them. It may decide that it needs more information, retry a failed step or change its approach when the evidence contradicts its first assumption.

At the more autonomous end, an agent can manage a longer-running objective, maintain state, monitor progress and escalate exceptions. Even then, sensible limits remain essential.

A useful way to think about agentic behaviour is:

> The system has discretion over the next step, within defined boundaries.

That discretion is what separates an agentic workflow from a conventional workflow.

## Agentic workflows are not the same as automation

Traditional automation is deterministic. If this happens, do that. The route is defined in advance.

For example:

> When an invoice arrives, extract these five fields and place them in these five database columns.

An agentic workflow is useful when the route cannot be completely specified beforehand:

> Review the invoice, compare it with the purchase order, investigate any discrepancy, decide whether it can be resolved from the available records and ask the appropriate person if it cannot.

The first process follows instructions. The second interprets a situation.

This does not mean agentic systems should replace ordinary automation. If a task can be expressed reliably as fixed rules, conventional software is usually cheaper, faster and easier to test. Agency is valuable where the work involves ambiguity, changing information, unstructured material or judgement about what to do next.

The best systems often combine both approaches: the agent handles interpretation and exceptions, while deterministic software handles calculations, validation, permissions and transactions.

## An example: a programme-management agent

Imagine an agent asked to prepare for a weekly programme review.

Its prompt defines the programmes it covers, the organisation’s reporting standards and the risks it must escalate. Its tools connect it to the project tracker, meeting notes, budgets and team messages.

The agent might:

1. retrieve the latest status for every workstream;
2. compare current milestones with last week’s plan;
3. identify conflicting or missing information;
4. inspect the relevant messages and documents;
5. calculate which deadlines are at risk;
6. draft a concise status report;
7. propose actions and owners;
8. ask a manager to approve the report before distribution.

Nobody needs to prescribe every search or every comparison. The agent selects those steps in pursuit of the goal. But it does not have unlimited authority: it may draft recommendations without being allowed to change a budget, commit a delivery date or send the final report without approval.

That combination—freedom over method, limits over authority—is at the heart of good agent design.

## Autonomy is not the absence of control

The most useful agent is not necessarily the one with the most freedom. It is the one trusted with the right amount of freedom for the task.

An agent should operate inside a clear envelope:

- defined goals;
- limited tool access;
- appropriate permissions;
- reliable data sources;
- spending, time and iteration limits;
- logs of its actions;
- checkpoints for consequential decisions;
- a clear route to human escalation.

The level of oversight should reflect the consequences of being wrong. An agent can usually search, summarise and draft with relatively little risk. Sending money, deleting records, making employment decisions or communicating externally calls for stronger controls and often explicit human approval.

Human involvement is not evidence that a system has failed to become agentic. A well-designed agent knows when it can proceed and when it should stop.

## Agents can work together

A complex system may use several specialised agents rather than one general agent.

One agent might gather evidence, another analyse it and another review the result. A coordinating agent can delegate tasks and combine the outputs. This resembles a team, but the analogy should not be taken too literally: unless the architecture genuinely requires separate contexts, tools or responsibilities, adding more agents may simply add cost and complexity.

One capable agent with good tools is often better than an elaborate cast of synthetic colleagues.

## The real test

The word agent is now applied to almost any product containing an LLM. A more useful test is to ask:

- Does it have a goal, rather than merely a question to answer?
- Can it choose what action to take next?
- Can it use tools and interpret their results?
- Can it change its plan when the situation changes?
- Can it recognise completion, failure or the need for help?

If the answer is mostly no, it may be an LLM feature or a conventional workflow rather than an agent.

If the answer is yes, it is behaving agentically.

## A compact definition

An agent is an LLM, plus a prompt, plus tools—placed inside a loop that lets it pursue a goal.

The LLM reasons. The prompt gives it purpose and boundaries. The tools allow it to observe and act. The loop allows it to learn from the result and decide what happens next.

To be agentic is not simply to use AI. It is to give an AI system limited discretion over how a goal is achieved.

That is the shift now taking place in software: from systems that wait for every instruction to systems that can take the next sensible step.

## About Linear Horizon

Linear Horizon helps organisations move from AI experimentation to practical, governed workflows. We combine training, workflow design and technical implementation to help teams adopt AI with confidence—and turn promising tools into dependable business capabilities.
