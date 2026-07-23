# WARCHESS Project Structure

Current MVP architecture:

```
WARCHESS/
│
├── apps/
│   ├── web/                    # React frontend
│   │   ├── src/
│   │   │   ├── pages/          # Application screens
│   │   │   ├── components/     # Reusable UI components
│   │   │   ├── hooks/          # React hooks
│   │   │   ├── services/       # API and Socket.IO clients
│   │   │   └── styles/         # UI styles
│   │   └── package.json
│   │
│   └── api-server/             # Backend server
│       ├── src/
│       │   ├── sockets/        # Real-time multiplayer logic
│       │   ├── routes/         # HTTP API routes
│       │   ├── services/       # Business logic
│       │   └── index.ts
│       └── package.json
│
├── packages/
│   ├── chess-engine/           # Shared chess logic
│   ├── types/                  # Shared TypeScript types
│   └── config/                # Shared configuration
│
├── docs/
│   ├── CONTEXT.md             # Project context
│   ├── ROADMAP.md             # Development roadmap
│   └── ARCHITECTURE.md        # Technical decisions
│
├── tests/                     # Automated tests
│
├── .github/
│   └── workflows/              # CI/CD workflows
│
├── README.md
├── package.json
└── .gitignore
```

## MVP Modules

- Learn mode
- Play vs AI (Stockfish WASM)
- Online multiplayer
- Invite links
- Server-side move validation
- Future: accounts, ratings, tournaments, monetization

## Architecture Principles

- Fast MVP delivery
- Minimal infrastructure cost
- Simple maintainable architecture
- Avoid unnecessary complexity until validated
