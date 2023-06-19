import React from "react";

export default function Participants() {
  const OnlineUIsers = Array.from(Array(38).keys());

  return (
    <div
      role="status"
      className="max-w-md p-4 mb-4 space-y-4 max-h-[600px] overflow-y-auto border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
    >
      {OnlineUIsers.map((i) => {
        return (
          <div className="flex items-center justify-between" key={i}>
            <div className="mt-2">
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 ">
              <span className="flex w-3 h-3 bg-yellow-300 rounded-full animate-ping  -translate-y-1/2 translate-x-1/2 right-1/2"></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
