"use client";
import { Mic, MicOff, Video, VideoOff } from "lucide-react";
/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import React from "react";
import ToolTip from "../ui/tooltip";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { CreateSpace } from "@/lib/SpaceFunction";
import { useQuery } from "@tanstack/react-query";
import { GetSpaceDetails } from "@/lib/GetSpaceRoomDetails";
import { useSocketContext } from "@/context/SocketContext";

export default function Join() {
  const { clientId } = useSocketContext();
  const [video, setVideo] = React.useState(true);
  const [mic, setMic] = React.useState(true);
  const [name, setName] = React.useState("");
  const router = useRouter();
  const { spaceId } = router.query;
  const handleBeforeJoin = async () => {
    if (name === "") {
      return toast.error("Please Enter Name");
    }

    await CreateSpace(
      spaceId as string,
      name,
      // data.Spaces[0].spaceDurations,
      "10:min",
      clientId as string
    );
  };

  const { data, isSuccess } = useQuery({
    queryKey: ["SpaceDetails"],
    staleTime: 3000,
    queryFn: () => GetSpaceDetails(spaceId as string),
  });

  return (
    <div className="bg-slate-900">
      <header className="relative top-0 z-20 flex flex-none items-center space-x-4 py-3 pl-5 pr-3 antialiased sm:pl-6 sm:pr-4 md:pr-3.5 lg:px-6">
        <div className="flex min-w-0 flex-auto items-center space-x-6">
          <Image
            width={74}
            height={30}
            className="w-auto h-8"
            title="Space Logo"
            src="https://learn-manifest-files-enjoys.b-cdn.net/assets/spcae-logo.png"
            alt="space"
          />
          <div className="hidden min-w-0 items-center space-x-4 sm:flex"></div>
        </div>
        <div className="flex items-center">
          <div className="text-orange-500 dark:shadow-highlight/4 ml-6 hidden items-center rounded-md shadow-sm ring-1 ring-gray-900/5 dark:bg-gray-800 dark:ring-0 lg:flex">
            <button
              type="button"
              className="group rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400"
            >
              {new Date().toString()}
            </button>
          </div>
          <div className="mx-6 hidden h-6 w-px bg-gray-200 dark:bg-gray-700 sm:block lg:mx-4"></div>
          <button
            type="button"
            className="dark:shadow-highlight/4 group ml-4 rounded-md shadow-sm ring-1 ring-gray-900/5 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:bg-gray-800 dark:ring-0 dark:hover:bg-gray-700 dark:focus-visible:ring-2 dark:focus-visible:ring-gray-400 sm:ml-0"
          >
            <span className="sr-only">
              <span className="dark:hidden">Switch to dark theme</span>
              <span className="hidden dark:inline">Switch to light theme</span>
            </span>
            <svg
              width="36"
              height="36"
              viewBox="-6 -6 36 36"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="fill-sky-100 stroke-sky-500 group-hover:stroke-sky-600 dark:fill-gray-400/20 dark:stroke-gray-400 dark:group-hover:stroke-gray-300"
            >
              <g className="dark:opacity-0">
                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                <path
                  d="M12 4v.01M17.66 6.345l-.007.007M20.005 12.005h-.01M17.66 17.665l-.007-.007M12 20.01V20M6.34 17.665l.007-.007M3.995 12.005h.01M6.34 6.344l.007.007"
                  fill="none"
                ></path>
              </g>
              <g className="opacity-0 dark:opacity-100">
                <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
                <path
                  d="M12 3v1M18.66 5.345l-.828.828M21.005 12.005h-1M18.66 18.665l-.828-.828M12 21.01V20M5.34 18.666l.835-.836M2.995 12.005h1.01M5.34 5.344l.835.836"
                  fill="none"
                ></path>
              </g>
            </svg>
          </button>
        </div>
      </header>
      <div className="flex min-h-[821px] flex-row">
        <div className="relative mx-auto flex h-[500px] w-[250px] flex-col items-center justify-center px-6">
          <div className="mb-5 h-[250px] w-[250px]  ">
            <video
              className="mb-5 h-[250px] w-[250px] overflow-hidden rounded-full border-[#ccc] border-4 bg-black text-white shadow-sm"
              playsInline
              autoPlay
              // ref={myVideo}
            />
          </div>
          <div className="flex flex-row text-white gap-5 m-2 mb-4">
            {/* <ToolTip>
              <Camera color="black" />
            </ToolTip> */}
            <span onClick={() => setVideo(!video)}>
              <ToolTip text={video ? "Turn Off Video" : "Turn On Video"}>
                {video ? <Video color="black" /> : <VideoOff color="black" />}
              </ToolTip>
            </span>
            <span onClick={() => setMic(!mic)}>
              <ToolTip text={mic ? "Turn Off Mic" : "Turn On Mic"}>
                {mic ? <Mic color="black" /> : <MicOff color="black" />}
              </ToolTip>
            </span>
          </div>
          <input
            className="my-2 h-9 w-full p-2 px-3text-sm placeholder:px-3 placeholder:py-2 placeholder:text-slate-400"
            placeholder="Enter Your Name"
            defaultValue={""}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="cursor-not-allowed my-2 h-9 w-full p-2 bg-gray-400 text-black  placeholder:px-3 placeholder:py-2"
            placeholder="Enter Space ID"
            defaultValue={spaceId}
            readOnly={spaceId ? true : false}
          />
          <button
            type="button"
            className="disabled:bg-slate-700 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 mr-2 mb-2"
            disabled={!isSuccess}
            onClick={handleBeforeJoin}
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
