# WARCHESS — Project File Tree

Current MVP architecture structure.

```
warchess/
│
├── apps/
│   ├── web/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   ├── AICoach.tsx
│   │   │   │   ├── PlayAI.tsx
│   │   │   │   └── Online.tsx
│   │   │   ├── game/
│   │   │   ├── engine/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   └── main.tsx
│   │   ├── public/
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   └── server/
│       ├── src/
│       │   ├── sockets/
│       │   │   └── game.ts
│       │   ├── rooms/
│       │   ├── game/
│       │   └── index.ts
│       └── package.json
│
├── packages/
│   ├── chess/
│   │   ├── src/
│   │   │   ├── rules/
│   │   │   ├── validation/
│   │   │   └── helpers/
│   │   └── package.json
│   │
│   ├── ui/
│   │   ├── src/
│   │   │   ├── Button.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── Card.tsx
│   │   └── package.json
│   │
│   ├── shared/
│   │   └── src/
│   │
│   └── types/
│       └── src/
│
├── assets/
│   ├── pieces/
│   ├── sounds/
│   └── images/
│
├── docs/
│   ├── CONTEXT.md
│   ├── ROADMAP.md
│   ├── ARCHITECTURE.md
│   ├── AI_RULES.md
│   ├── IDEAS.md
│   └── PROJECT_TREE.md
│
├── scripts/
│
├── package.json
├── README.md
└── .gitignore
```

## Architecture Rules

- Frontend and backend logic are separated.
- UI does not own chess rules.
- Server is authoritative for multiplayer.
- Stockfish is accessed through an abstraction layer.
- MVP avoids database dependencies.
- Future Supabase integration should not require rewriting core architecture.

Created for WARCHESS MVP documentation.