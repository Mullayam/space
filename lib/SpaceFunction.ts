import { socket } from "@/context/SocketContext";
import React from "react";

export const CreateSpace = async (
  spaceId: string,
  name: string,
  duration: string,
  clientId: string | undefined
) => {
  socket.emit("create-space", { spaceId, name, duration, clientId });
};

export const connectWithSocketIOServer = () => {
  socket.on("all-spaces", (data) => console.log(data));
  socket.on("exist-error", (data) => console.log(data));
  socket.on("online-users", (data) => console.log(data));
  socket.on("recent-spaces", (data) => console.log(data));
  socket.on("join-room", ({ onlineUsers }) => {});
  socket.on("disconnect", () => {});
};
