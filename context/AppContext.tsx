import React from "react";
import { intialState } from "@/hooks/SpaceReducer";

export type SpaceRoom = {
  name: string;
  socketId: string;
};
export type AppContext = {
  isSpaceJoined: boolean;
  clientID: number | null;
  onlineUsers: SpaceRoom[];
};

const AppContext = React.createContext<AppContext>(intialState);
export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AppContext.Provider value={intialState}>{children}</AppContext.Provider>
  );
}
export const useApp = () => React.useContext(AppContext);
export default AppContext;
