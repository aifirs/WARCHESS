import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: '*' }
});

app.get('/health', (_req, res) => res.json({ ok: true, app: 'warchess-server' }));

io.on('connection', (socket) => {
  socket.emit('connected', { id: socket.id });
});

const port = Number(process.env.PORT ?? 3001);
httpServer.listen(port, () => {
  console.log(`WARCHESS server running on ${port}`);
});
