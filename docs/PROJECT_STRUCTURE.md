# WARCHESS — Project File Structure

Current MVP architecture.

```
warchess/
│
├── apps/
│   ├── web/                    # React + TypeScript + Vite frontend
│   │   ├── src/
│   │   │   ├── components/     # UI components
│   │   │   ├── pages/          # Application screens
│   │   │   ├── hooks/          # React hooks
│   │   │   ├── engine/         # Stockfish abstraction
│   │   │   ├── coach/          # AI Coach interface logic
│   │   │   └── main.tsx
│   │   └── package.json
│   │
│   └── server/                 # Node.js + Express + Socket.IO backend
│       ├── src/
│       │   ├── sockets/         # Multiplayer events
│       │   ├── rooms/          # Temporary game rooms
│       │   ├── game/           # Server game validation
│       │   └── index.ts
│       └── package.json
│
├── packages/
│   ├── chess/                  # Chess business logic wrapper
│   ├── ui/                     # Shared UI primitives
│   ├── shared/                 # Shared utilities/constants
│   └── types/                  # Shared TypeScript types
│
├── assets/                     # Images, icons, sounds
│
├── docs/                       # Project documentation
│   ├── CONTEXT.md
│   ├── ROADMAP.md
│   ├── ARCHITECTURE.md
│   ├── AI_RULES.md
│   ├── IDEAS.md
│   └── PROJECT_STRUCTURE.md
│
├── scripts/                    # Development scripts
│
├── README.md
├── package.json
└── .gitignore
```

## Architecture Rules

- Frontend does not own game truth.
- Server validates multiplayer state.
- Chess logic is isolated from UI.
- Stockfish is accessed through an abstraction layer.
- AI Coach never controls gameplay.
- Modules remain replaceable.

## MVP Priority

1. Working game
2. Beautiful UX
3. Stability
4. Maintainable architecture
5. Future scalability
