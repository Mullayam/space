import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { PayloadAction } from "@reduxjs/toolkit";
export type SpaceRoom = {
  name: string;
  key: string;
  pool?: string;
};
// Define a type for the slice state
export type AppState = {
  isSpaceJoined: boolean;
  clientID: string;
  onlineUsers: SpaceRoom[];
  inRoom: null | string; // if user will be in room - here we will be saving room Id
  rooms: [];
  localStream: null | any;
  remoteStream: null | any;
  isMicOn: boolean;
  isCameraOn: boolean;
  isScreenShared: boolean;
};

// Define the initial state using sthat type
const initialState: AppState = {
  isSpaceJoined: false,
  clientID: "",
  onlineUsers: [],
  inRoom: null, // if user will be in room - here we will be saving room Id
  rooms: [],
  localStream: null,
  remoteStream: null,
  isMicOn: true,
  isCameraOn: true,
  isScreenShared: false,
};

export const Space = createSlice({
  name: "Space",
  initialState,
  reducers: {
    setSpaceJoined: (state: AppState, action) => {
      state.isSpaceJoined = action.payload;
    },
    setClientId: (state, action: PayloadAction<string>) => {
      state.clientID = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    setInRoom: (state, action) => {
      state.inRoom = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },
    setRemoteStream: (state, action) => {
      state.remoteStream = action.payload;
    },
    setIsMicOn: (state, action) => {
      state.isMicOn = action.payload;
    },
    setIsCameraOn: (state, action) => {
      state.isCameraOn = action.payload;
    },
    setisScreenShared: (state, action) => {
      state.isScreenShared = action.payload;
    },
  },
});

export const {
  setSpaceJoined,
  setClientId,
  setOnlineUsers,
  setInRoom,
  setRooms,
  setLocalStream,
  setRemoteStream,
  setIsMicOn,
  setIsCameraOn,
  setisScreenShared,
} = Space.actions;

// Other code such as selectors can use the imported `RootState` type
export const state = (state: RootState) => state;

export default Space.reducer;
