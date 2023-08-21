import {
  ConverTimeStringIntoSeconds,
  DeleteClient,
  GetPeopleArrayFromSpaceKey,
  HandleRecentSpaces,
  SplitString,
} from "../lib.js";
import Spaces, { People, RecentSpaces } from "../store.js";

export default async function CreateSpace(socket, io) {
  socket.on("create-space", ({ spaceId, name, duration, clientId }) => {
    const socketId = socket.id;
    //create recent space list
    EmitRecentSpace(socket, RecentSpaces, clientId, spaceId);

    //join space

    if (GetPeopleArrayFromSpaceKey(Spaces, spaceId, socketId)) {
      const [value, unit] = SplitString(duration, ":");
      const destroyIn = ConverTimeStringIntoSeconds(value, unit);
      People.push({ name, key: socketId, peerId: 1 });
      Spaces[spaceId] = {
        people: People,
        createdBy: clientId,
        autoDelete: false,
        destroyIn,
      };
      socket.join(spaceId);
      socket.emit("join-room", { space: Spaces[spaceId] });
      EmitOnlineUsers(io, Spaces, spaceId); //emite all users connected to room
      // socket.emit("all-spaces", { Spaces });
      return;
    }
    socket.emit("exist-error", { error: "User already exists" });
    return;
  });
}
export async function RemoveClientFromSpace(socket) {
  const socketId = socket.id;
  // await DeleteClient(Space);
}

function EmitRecentSpace(socket, RecentSpaces, clientId, spaceId) {
  if (HandleRecentSpaces(RecentSpaces, clientId, spaceId).Result) {
    socket.emit("recent-spaces", {
      recents: HandleRecentSpaces(RecentSpaces, clientId, spaceId).SpaceRooms,
    });
  }
}

function EmitOnlineUsers(io, Spaces, spaceId) {
  io.in(spaceId).emit("online-users", {
    onlineUsers: Spaces[spaceId]?.people,
  });
}
const broadcastVideoRooms = (io) => {
  io.to("logged-users").emit("video-rooms", videoRooms);
};
const broadcastDisconnectedUserDetails = (io, disconnectedUserSocketId) => {
  io.to("logged-users").emit("user-disconnected", disconnectedUserSocketId);
};
const removeUserFromTheVideoRoom = (socketId, roomId) => {
  videoRooms[roomId].participants = videoRooms[roomId].participants.filter(
    (p) => p.socketId !== socketId
  );

  // remove room if no participants left in the room
  if (videoRooms[roomId].participants.length < 1) {
    delete videoRooms[roomId];
  } else {
    // if still there is a user in the room - inform him to clear his peer connection

    io.to(videoRooms[roomId].participants[0].socketId).emit(
      "video-call-disconnect"
    );
  }

  broadcastVideoRooms();
};