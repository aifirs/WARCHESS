# WARCHESS
# ♟️ WARCHESS

> **AI-first Chess Platform**
>
> Modern web chess platform focused on learning, AI assistance, and beautiful gameplay.

![Status](https://img.shields.io/badge/status-MVP%20Development-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)
![React](https://img.shields.io/badge/React-19-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-22-339933)

---

# Vision

WARCHESS is an AI-first chess platform designed for modern players.

The project prioritizes:

- ♟️ Learning over ratings
- 🤖 AI coaching
- ⚡ Fast gameplay
- 🎨 Beautiful UI
- 📱 Responsive experience

The first objective is to validate the product through a polished public MVP.

---

# Current Status

| Item | Status |
|------|--------|
| Repository | 🟢 Active |
| Development | 🟢 Started |
| Stage | MVP |
| Architecture | Approved |
| Documentation | Complete |
| Production Code | In Progress |

---

# MVP Features

- ✅ Learn Mode
- ✅ Play vs Computer
- ✅ Online Multiplayer
- ✅ AI Coach
- ✅ Responsive Design

---

# Out of Scope (Post-MVP)

The following features are intentionally postponed:

- Authentication
- User Profiles
- Ratings
- Match History
- Friends
- Chat
- Payments
- Marketplace
- Premium Features
- Tournaments
- Analytics

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

## Backend

- Node.js
- Express
- Socket.IO

## Chess

- chess.js

## Engine

- Stockfish WASM

## Database

No database is used during MVP.

Supabase integration will be introduced after MVP validation.

---

# Repository Structure

```text
WARCHESS/

├── apps/
│   ├── web/
│   └── server/
│
├── packages/
│   ├── core/
│   ├── engine/
│   ├── network/
│   ├── ui/
│   ├── shared/
│   └── types/
│
├── docs/
│
├── assets/
│
├── scripts/
│
├── .github/
│
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── tsconfig.base.json
└── biome.json
```

---

# Project Documentation

All project documentation is located in the **docs/** directory.

Documentation order:

1. `CONTEXT.md`
2. `ROADMAP.md`
3. `ARCHITECTURE.md`
4. `AI_RULES.md`
5. `IDEAS.md`

These documents are considered the single source of truth.

---

# Architecture Principles

- Business logic never depends on UI.
- Socket server is authoritative.
- React renders state only.
- Every module has a single responsibility.
- Prefer composition over inheritance.
- Keep modules replaceable.
- Avoid premature optimization.

---

# Development Workflow

Development follows a release-driven workflow.

```text
Release Blocker
        ↓
Design
        ↓
Implement
        ↓
Verify
        ↓
Commit
        ↓
Repeat
```

Every commit must leave the repository in a working state.

---

# Development Rules

Always prioritize:

1. Shipping speed
2. User experience
3. Clean architecture
4. Maintainability
5. Low technical debt

Never:

- rewrite stable code without measurable benefit;
- add unnecessary dependencies;
- expand MVP scope.

---

# Repository Roadmap

```text
Sprint 1
Repository Foundation

↓

Sprint 2
Chess Core

↓

Sprint 3
Play vs Computer

↓

Sprint 4
Online Multiplayer

↓

Sprint 5
AI Coach

↓

Sprint 6
Responsive Polish

↓

Release Candidate

↓

Public MVP
```

---

# Current Development Target

**Public MVP v1.0**

Current priority:

> Build a playable, beautiful, AI-assisted chess platform as quickly as possible.

---

# Contributing

Development is currently focused on rapid MVP delivery.

Architecture decisions should follow the existing documentation.

Please avoid introducing unnecessary complexity or expanding the MVP scope.

---

# License

MIT License

---

Built with ❤️ for modern chess players.
