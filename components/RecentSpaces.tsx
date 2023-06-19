import React from "react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Event from "@/components/Events/Event";
import { Icons } from "@/components/ui/icons";
import AddNewEvent from "@/components/Events/AddNewEvent";

const inter = Inter({ subsets: ["latin"] });

export default function RecentSpaces() {
  let AllRecentSpaces: any[] = [];
  return (
    <>
      <div
        className={`${inter.className} flex items-center md:mb-6 md:mt-0 lg:mb-8 mb-0`}
      >
        <header className="flex w-full max-w-full items-center truncate">
          <div className="w-full truncate ltr:mr-4 rtl:ml-4 md:block">
            <h3 className="font-cal max-w-28 sm:max-w-72 md:max-w-80 text-emphasis truncate font-semibold sm:text-xl md:block xl:max-w-full tracking-normal hidden">
              Your Recent Spaces
            </h3>
            <p className="text-default hidden text-sm md:block">
              Create Invite Link to share for people to join your Space.
            </p>
          </div>
          <AddNewEvent>
            <Button className="inline-flex items-center text-sm font-medium relative rounded-full justify-center md:rounded-md transition-transform !shadow-none px-4 py-2.5 hover:bg-[#696969] bg-[#292929] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-default text-brand h-14 md:h-9 md:w-auto md:px-4 md:py-2.5">
              <div className="max-h-fit items-center flex flex-row justify-center ">
                <Icons.add />
                <span className="font-medium items-center justify-center text-inverted relative hidden md:inline">
                  New
                </span>
              </div>
            </Button>
          </AddNewEvent>
        </header>
      </div>
      <div className="">
        <div className="bg-default border-subtle mb-16 flex overflow-hidden rounded-md border">
          {AllRecentSpaces.length > 0 && (
            <ul className="divide-subtle !static w-full divide-y">
              {AllRecentSpaces.map((space: any, i: any) => {
                return <Event space={space} key={i || space?.spaceID} />;
              })}
            </ul>
          )}
        </div>
        {!AllRecentSpaces.length &&
          (AllRecentSpaces ? (
            <div className="flex items-center justify-center text-2xl font-cal font-bold">
              Recently you haven&apos;t joined any Space
            </div>
          ) : (
            <div className="flex items-center justify-center text-4xl font-cal font-extrabold">
              <div role="status">
                <svg
                  className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
