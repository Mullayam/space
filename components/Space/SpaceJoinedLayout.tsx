import React, { useState } from "react";

import { MessageCircleIcon } from "lucide-react";
import Participants from "./Participants";
import VideoElements from "./VideoElements";
import Footer from "./Footer";

const SpaceJoinedLayout = () => {
  const videoSources = [
    "https://source1.com",
    "https://source2.com",
    "https://source3.com",
    "https://source4.com",
    "https://source5.com",
    "https://source6.com",
    "https://source7.com",
    "https://source8.com",
    "https://source9.com",
    "https://source10.com",
    "https://source11.com",
    "https://source12.com",
  ];
  const [tiles, setitles] = useState<number | 4>(12);
  const md = tiles > 10 ? 7 : tiles ? 9 : 8;

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>

              <span className="ml-2 self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Space
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br  font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2">
                    Mullayam
                  </button>

                  <button className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-full text-sm p-2 text-center ml-2">
                    <MessageCircleIcon />
                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-slate-600 border-2 border-white rounded-full top-1.5 right-2 dark:border-gray-900">
                      0
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4  bg-white dark:bg-gray-800">
          <Participants />
          <hr />
          <div className="inline-block">
            Tiles:{tiles}
            <input
              type="range"
              className="p-2"
              min={4}
              max={12}
              defaultValue={tiles}
              onChange={(e) => setitles(parseInt(e.target.value))}
            />
          </div>
        </div>
      </aside>

      <div className="p-4 lg:ml-64">
        <div className="p-4 border-2rounded-lg dark:border-gray-700 mt-14">
          <div
            className={`grid grid-cols-${tiles} lg:grid-cols-${tiles} md:grid-cols-${md} sm:grid-cols-4 xs:grid-cols-4 xxs:grid-cols-3 gap-4 mb-4 mt-4`}
          >
            <VideoElements source={videoSources} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpaceJoinedLayout;
