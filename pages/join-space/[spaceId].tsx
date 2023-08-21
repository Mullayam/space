"use client";
import React from "react";
import Join from "@/components/AskForJoin/Join";
import SpaceRoom from "@/components/SpaceRoom";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const JoinSpace = () => {
  const { isSpaceJoined } = useAppSelector((state: RootState) => state.Space);
  return isSpaceJoined ? <SpaceRoom /> : <Join />;
};

export default JoinSpace;
