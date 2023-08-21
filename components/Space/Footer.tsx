import React from "react";

import {
  FlipHorizontal,
  List,
  MessageSquarePlus,
  Mic,
  MicOff,
  PhoneOff,
  SettingsIcon,
  VideoIcon,
  VideoOff,
} from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { RootState, useAppDispatch } from "@/redux/store";
import { setIsCameraOn, setIsMicOn } from "@/redux/slices/SpaceSlice";
export default function Footer() {
  const dispatch = useAppDispatch();
  const { isMicOn, isCameraOn, localStream } = useAppSelector(
    (state: RootState) => state.Space
  );
  const handleLeaveRoom = () => {
    // leaveVideoRoom(inRoom);
  };

  const handleMuteUnmuteChange = () => {
    // localStream.getAudioTracks()[0].enabled =   !localStream.getAudioTracks()[0].enabled;
    dispatch(setIsMicOn(!isMicOn));
  };

  const handleCameraOnOffChange = () => {
    // localStream.getVideoTracks()[0].enabled = !localStream.getVideoTracks()[0].enabled;
    dispatch(setIsCameraOn(!isCameraOn));
  };
  return (
    <footer className="fixed bottom-3  left-0 z-20 w-full">
      <div className="flex justify-between">
        <div></div>
        <div className=" border-gray-800 border-default border-2 rounded-full p-2 sm:justify-items-center">
          <button
            title={isCameraOn ? "Turn Off Video" : "Enable Video"}
            className="rounded-full text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium text-sm p-2 text-center mr-2"
            onClick={handleCameraOnOffChange}
          >
            {isCameraOn ? <VideoIcon /> : <VideoOff />}
          </button>
          <button
            title={isMicOn ? "Turn Off Mic" : "Enable Mic"}
            className="rounded-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium   text-sm p-2 text-center mr-2 "
            onClick={handleMuteUnmuteChange}
          >
            {isMicOn ? <Mic /> : <MicOff />}
          </button>

          <button
            title="Settings"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm p-2 text-center mr-2"
          >
            {isMicOn ? <ScreenShare /> : <ScreenShareOff />}
          </button>
          <button
            title="Settings"
            className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-full text-sm p-2 text-center mr-2"
          >
            <SettingsIcon />
          </button>
          <button
            title="Leave Space"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm p-2 text-center mr-2"
            onClick={handleLeaveRoom}
          >
            <PhoneOff />
          </button>
        </div>
        <div className="mx-2">
          <button
            title="Change Layout"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  font-medium rounded-full text-sm p-2 text-center mr-2 lg:inline-block md:inline-block hidden"
          >
            <FlipHorizontal />
          </button>
          <button
            title="In Chat Message"
            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-full text-sm p-2 text-center mr-2"
          >
            <MessageSquarePlus />
          </button>
          <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-full text-sm px-4 py-2.5 text-center ml-2 lg:inline-block md:block hidden  ">
            <List />
          </button>
        </div>
      </div>
    </footer>
  );
}
