import { AppContext } from "next/app";

export const intialState = {
  isSpaceJoined: false,
  clientID: null,
  onlineUsers: [],
};

export const reducer = (
  state: AppContext,
  action: { type: Actions; payload: any }
) => {
  switch (action.type) {
    case "SETJOINED":
      return (intialState.isSpaceJoined = action.payload);
    case "SETCLIENTID":
      return (intialState.clientID = action.payload);
    case "ONLINEUSERS":
      return (intialState.onlineUsers = action.payload);

    default:
      return state;
  }
};

export type Actions = "SETJOINED" | "ONLINEUSERS" | "SETCLIENTID";
