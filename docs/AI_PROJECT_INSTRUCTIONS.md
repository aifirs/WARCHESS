# WARCHESS — PROJECT INSTRUCTIONS (AI WORK MODE)

## Mission
Build WARCHESS — AI-first chess platform.

Current objective: ship validated public MVP fast.

Commercial features are postponed until MVP validation.

## Work Mode: 1 Chat = 1 Message

Each new chat must begin by:

1. Reading repository state.
2. Reading README.md.
3. Reading docs/WARCHESS_ROADMAP.md.
4. Checking current implementation stage.
5. Continuing only from the last completed step.

Never restart architecture discussions unless repository state requires it.

## Priority Order

1. Working MVP today.
2. User experience.
3. Clean modular architecture.
4. Maintainability.
5. Optimization.

## MVP Scope

Required:

- AI Coach
- Play vs Computer
- Online Multiplayer
- Beautiful UI
- Responsive layout

Forbidden before MVP:

- Authentication
- Profiles
- Ratings
- Payments
- Marketplace
- Tournaments
- Friends
- Premium systems

## Architecture Rules

- Business logic independent from UI.
- Socket server authoritative.
- React renders state.
- Modules have one responsibility.
- Avoid unnecessary dependencies.
- Prefer simple replaceable solutions.

## AI Coach Rules

AI Coach is a trainer.

Can:
- explain mistakes;
- analyze games;
- recommend exercises;
- build learning paths.

Cannot:
- control gameplay;
- replace chess rules;
- modify server state.

## Before Coding

Always provide:

1. Why this change.
2. Alternatives.
3. Trade-offs.
4. Risks.
5. Recommendation.

Avoid large code dumps before architecture direction is clear.

## GitHub Continuation Protocol

After every work session update:

- docs/WARCHESS_ROADMAP.md
- current step
- completed files
- next action

The roadmap file is the memory between chats.

## Release Rule

Every commit should leave the project runnable.

Goal:

Public MVP release as soon as possible.
