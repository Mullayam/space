/* eslint-disable @next/next/no-img-element */
import React, { type ReactNode } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SettingNav = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <nav
      className={`${inter.className} transition-transform scrollbar-thin min-w-56 px-2 overflow-y-scroll pb-3 max-lg:z-10 lg:flex -translate-x-full opacity-0 lg:translate-x-0 lg:opacity-100 max-h-screen left-0 top-0 text-emphasis bg-muted overflow-x-hidden sticky`}
    >
      <div className="w-full flex flex-col">
        <button
          onClick={(e) => {
            e.preventDefault();
            router.back();
          }}
          className="hover:bg-subtle max-w-full [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default text-emphasis group my-6 flex h-6 max-h-6 w-64 flex-row items-center rounded-md py-2 px-3 text-sm font-medium leading-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#374151"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 stroke-[2px] mr-[10px] rtl:ml-[10px] md:mt-0"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <p title="back" className="max-w-36 min-h-4 truncate">
            Back
          </p>
        </button>
        <div className="">
          {/* <Image
                    alt={name}
                    height={25}
                    width={25}
                    src={icon}
                    className="rounded-full w-[17px] h-[17px] ml-[14px] my-auto"
                />
                <span
                    className="my-auto mx-[10px] leading-5 text-emphasis text-sm font-medium"
                >
                    {name}
                </span> */}
          <div className="mt-">
            <div className="[&amp;[aria-current='page']]:bg-emphasis [&amp;[aria-current='page']]:text-emphasis text-default group flex h-9 w-64 flex-row items-center rounded-md px-2 text-sm font-medium leading-none">
              <img
                className="h-4 w-4 rounded-full mr-3 ltr:mr-3 rtl:ml-3"
                src="https://www.gravatar.com/avatar/fallback?s=160&d=mp&r=PG"
                alt="User Avatar"
              />
              <p className="text-sm font-medium leading-5">AMit Parmar</p>
            </div>
          </div>

          <div className="my-2 space-y-1">
            <Link
              href={"/settings/my-account/profile"}
              className={`text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter ${
                router.pathname === "/settings/my-account/profile"
                  ? "bg-emphasis"
                  : ""
              }`}
            >
              Profile
            </Link>
            <Link
              href={"/settings/my-account/profile"}
              className={`text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter ${
                router.pathname === "/settings/my-account/general"
                  ? "bg-emphasis"
                  : ""
              }`}
            >
              General
            </Link>
            <Link
              href={"/settings/my-account/profile"}
              className={`text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default  group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter ${
                router.pathname === "/settings/my-account/calender"
                  ? "bg-emphasis"
                  : ""
              }`}
            >
              Calendars
            </Link>
            <Link
              href={"/settings/my-account/profile"}
              className={`text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter ${
                router.pathname === "/settings/my-account/conferencing"
                  ? "bg-emphasis"
                  : ""
              }`}
            >
              Conferencing
            </Link>
            <Link
              href={"/settings/my-account/profile"}
              className={`text-emphasis font-medium text-sm min-h-8 hover:bg-subtle [&[aria-current='page']]:bg-emphasis [&[aria-current='page']]:text-emphasis group-hover:text-default max-w-[156px] group flex flex-row items-center rounded-md px-3 py-[10px] ml-7 max-w-6 mr-5 rtl:ml-5 my-0.5 h-7 false font-inter ${
                router.pathname === "/settings/my-account/appearance"
                  ? "bg-emphasis"
                  : ""
              }`}
            >
              Appearance
            </Link>
          </div>
        </div>
        {children}
      </div>
    </nav>
  );
};

export default SettingNav;
