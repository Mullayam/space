// import { setLocalStream, setRemoteStream } from "./videoRoomsSlice";
import { setLocalStream, setRemoteStream } from "@/redux/slices/SpaceSlice";
import { store } from "../redux/store";
import Peer from "peerjs";

let peer: any;
let peerId: string;
let connection: RTCPeerConnection;
export const getPeerId = () => {
  return peerId;
};

export const createPeerConnection = () => {
  // We create a RTC Peer Connection
  connection = new RTCPeerConnection(ICE_SERVERS);
  connection.onnegotiationneeded = handleCreateOffer;
  // We implement our onicecandidate method for when we received a ICE candidate from the STUN server
  connection.onicecandidate = handleICECandidate;
  // We implement our onTrack method for when we receive tracks
  connection.ontrack = handleTrackEvent;
  return connection;
};

export const connectWithPeerServer = () => {
  peer = new Peer("", {
    host: `${process.env.NEXT_PUBLIC_PEER_URL}`,
    port: 9000,
    path: "/rtc/services",
  });

  peer.on("open", (id: string) => {
    peerId = id;
  });
  peer.on("call", async (call: any) => {
    const localStream = store.getState().Space.localStream;
    call.answer(localStream); // Answer the call with A/V stream
    call.on("stream", (remoteStream: any) => {
      console.log("remote stream came");
      store.dispatch(setRemoteStream(remoteStream));
    });
  });
};

export const getAccessToLocalStream = async () => {
  const localStream = await navigator.mediaDevices.getUserMedia({
    // if you not have camera - just set video to false
    video: true,
    audio: true,
  });

  if (localStream) {
    store.dispatch(setLocalStream(localStream));
  }
  return Boolean(localStream);
};

export const call = (data: any) => {
  const { newParticipantPeerId } = data;

  const localStream = store.getState().Space.localStream;

  const peerCall = peer.call(newParticipantPeerId, localStream);

  peerCall.on("stream", (remoteStream: any) => {
    console.log("remote stream came");
    store.dispatch(setRemoteStream(remoteStream));
  });
};

export const disconnect = () => {
  // close all peer connections

  for (let conns in peer.connections) {
    peer.connections[conns].forEach((c: any) => {
      console.log("closing connections");
      c.peerConnection.close();

      if (c.close) c.close();
    });
  }

  store.dispatch(setRemoteStream(null));
};

const ICE_SERVERS = {
  iceServers: [
    {
      urls: "stun:openrelay.metered.ca:80",
    },
    {
      urls: "stun:stun.l.google.com:19302",
    },
  ],
};
// create a offer
export const handleCreateOffer = async () => {
  const offer = await connection.createOffer();
  await connection.setLocalDescription(offer);
};
export const handleICECandidate = (event: RTCPeerConnectionIceEvent) => {
  if (event.candidate !== null) {
    return { iceCandidate: event.candidate, peerId };
  }
};

const handleTrackEvent = async () => {};
