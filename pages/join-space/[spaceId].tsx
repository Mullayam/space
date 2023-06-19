"use client";
import React from "react";
import Join from "@/components/AskForJoin/Join";
import SpaceRoom from "@/components/SpaceRoom";
import { useApp } from "@/context/AppContext";

const JoinSpace = () => {
  const { isSpaceJoined } = useApp();
  return isSpaceJoined ? <SpaceRoom /> : <Join />;
};

export default JoinSpace;
