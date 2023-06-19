import { Icons } from "@/components/ui/icons";
import React from "react";

export default function PrepareSpaceForUsers() {
  return (
    <>
      <div className="m-2">
        <div
          className={`flex items-center justify-center gap-8 flex-col md:mb-6 md:mt-0 lg:mb-8 mb-0 `}
        >
          <ul className="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
            <li className="flex items-center">
              <Icons.greenCheck />
              Collecting UserData
            </li>
            <li className="flex items-center">
              <Icons.greenCheck />
              Preparing Stream
            </li>
            <li className="flex items-center">
              <Icons.greenCheck />
              Sending Userdata to Stream
            </li>
            <li className="flex items-center">
              <Icons.greenCheck />
              Ready to Join
            </li>
            <li className="flex items-center">
              <Icons.spinner />
              Redirecting
            </li>
          </ul>
          <div className="text-center mb-4"></div>
          <h1 className="text-4xl font-extrabold">
            Please Wait...Setting Up SPACE
          </h1>
        </div>
      </div>
    </>
  );
}
