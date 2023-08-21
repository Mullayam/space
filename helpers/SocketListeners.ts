import {
  SpaceRoom,
  setInRoom,
  setOnlineUsers,
  setSpaceJoined,
} from "@/redux/slices/SpaceSlice";
import { store } from "@/redux/store";

export const HandleJoinRoom = () => {
  store.dispatch(setSpaceJoined(true));
};
export const HandleLeaveRoom = (key: string) => {
  store.dispatch(setSpaceJoined(true));
  store.dispatch(setInRoom(false));
};
export const HandleOnlineUsers = (onlineUsers: SpaceRoom) => {
  store.dispatch(setOnlineUsers(onlineUsers));
};
