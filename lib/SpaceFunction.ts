import { socket } from "@/context/SocketContext";
import {
  HandleJoinRoom,
  HandleLeaveRoom,
  HandleOnlineUsers,
} from "@/helpers/SocketListeners";
import {
  handleCreateOffer,
  disconnect,
  handleICECandidate,
} from "@/services/webRTCHandler";

export const CreateSpace = async (
  spaceId: string,
  name: string,
  duration: string,
  clientId: string
) => {
  socket.emit("create-space", { spaceId, name, duration, clientId });
};

export const leaveVideoRoom = (roomId: string) => {
  socket.emit("leave-space", HandleLeaveRoom);
};
// Signaling: Send offer to server
export const sendOffer = () => {
  socket.emit("offer", handleCreateOffer, handleICECandidate);
};

// Signaling: Send answer to server
export const sendAnswer = (answer: string) => {
  socket.emit("answer", answer);
};

// Cleanup on component unmount
export const connectWithSocketIOServer = () => {
  socket.on("all-spaces", (data) => console.log(data));
  socket.on("exist-error", (data) => console.log(data));
  socket.on("online-users", ({ onlineUsers }) =>
    HandleOnlineUsers(onlineUsers)
  );
  socket.on("recent-spaces", (data) => console.log(data));
  socket.on("join-room", HandleJoinRoom);
  socket.on("disconnect", () => {
    disconnect();
  });
  // Handle incoming offer from server
  socket.on("offer", (offer) => {
    // Process the offer and create answer
    // const answer = createAnswer(offer);
    // Send the answer to the server
    // sendAnswer(answer);
  });

  // Handle incoming answer from server
  socket.on("answer", (answer) => {
    // Process the answer
    // processAnswer(answer);
  });

  // Handle incoming ICE candidate from server
  socket.on("iceCandidate", (candidate: RTCIceCandidate) => {
    // Add the ICE candidate to the peer connection
    // addICECandidate(candidate);
  });
};
