import { connectWithSocketIOServer } from "@/lib/SpaceFunction";
import React, { createContext } from "react";
import { io, Socket } from "socket.io-client";
const URL = process.env.NEXT_PUBLIC_WS_URL;
 
import { store, useAppDispatch } from "@/redux/store";
import { setClientId, setSpaceJoined } from "@/redux/slices/SpaceSlice";

const socket: Socket = io(`${URL}`, {
  transports: ["websocket", "polling"],
});
type SocketContextType = {
  socket?: Socket;
  id?: string;
};
const SocketContext = createContext<SocketContextType>({
  socket,
  id: "",
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [id, setId] = React.useState<string>("");
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    connectWithSocketIOServer();
    const id = (window.localStorage.getItem("clientId") as string) || "";
    dispatch(setClientId(id));
    setId(id);
  }, []);

  return (
    <SocketContext.Provider value={{ socket, id }}>
      {children}
    </SocketContext.Provider>
  );
};
const useSocketContext = () => React.useContext(SocketContext);
export { ContextProvider, useSocketContext, socket };
