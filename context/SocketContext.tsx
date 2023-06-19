import { connectWithSocketIOServer } from "@/lib/SpaceFunction";
import React, { createContext } from "react";
import { io, Socket } from "socket.io-client";
const URL = process.env.NEXT_PUBLIC_WS_URL;
import { intialState, reducer } from "@/hooks/SpaceReducer";

const socket: Socket = io(`${URL}`, {
  transports: ["websocket", "polling"],
});
type SocketContextType = {
  socket?: Socket;
  clientId?: null | string;
};
const SocketContext = createContext<SocketContextType>({
  socket,
  clientId: undefined,
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [clientId, setclientId] = React.useState<string | null>(null);
  const [state, dispatch] = React.useReducer(reducer, intialState);
  console.log(state);

  React.useEffect(() => {
    connectWithSocketIOServer();
    const id = window.localStorage.getItem("clientId") || null;
    setclientId(id);
  }, []);

  return (
    <SocketContext.Provider value={{ socket, clientId }}>
      {children}
    </SocketContext.Provider>
  );
};
const useSocketContext = () => React.useContext(SocketContext);
export { ContextProvider, useSocketContext, socket };
