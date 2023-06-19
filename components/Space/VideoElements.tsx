/* eslint-disable @next/next/no-img-element */
import React from "react";

const VideoElements = ({ source }: { source: any }) => {
  const clientID = 4;
  const HostOrNot = () => (
    <div className="absolute inline-flex items-center justify-center w-fit px-2 py-0.5 text-xs font-bold text-white bg-purple-500   rounded-full top-2 left-1 -right-2 dark:border-gray-900">
      Host
    </div>
  );

  return source.map((src: any, i: number) => {
    return (
      <div
        className="flex flex-wrap  items-center justify-center h-fit rounded"
        key={src}
      >
        <div className="w-fit">
          <a className="block relative h-fit rounded overflow-hidden">
            {clientID === i + 1 ? <HostOrNot /> : null}
            <img
              alt="ecommerce"
              className="object-cover object-center w-full h-full block animate-pulse"
              src="https://dummyimage.com/420x260"
            />
          </a>
          <div className="mt-1">
            <h2 className="text-gray-900 title-font text-lg font-medium">
              Participant Name
            </h2>
          </div>
        </div>
      </div>
    );
  });
};

export default VideoElements;
