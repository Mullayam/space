import { createServer } from "http";
import { Server } from "socket.io";

import CreateSpace, {
  RemoveClientFromSpace,
} from "./handlers/eventHandlers.js";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
  },
});

io.on("connection", async (socket) => {
  await CreateSpace(socket, io);

  socket.on("disconnect", async () => {
    await RemoveClientFromSpace(socket);
  });
});

// Start the server
httpServer.listen(5124, () => {
  console.log("Socket.IO server is running.");
});
