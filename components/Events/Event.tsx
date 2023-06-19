import React from "react";
import Link from "next/link";
// import { Switch } from '../ui/switch'
import { Icons } from "../ui/icons";
import DeleteEvent from "./DeleteEvent";
import { Users } from "lucide-react";
import * as Switch from "@radix-ui/react-switch";
import ToastAlert from "../ui/toast";
const Event = ({ space }: { space: any }) => {
  let People;
  const [value, unit] = space?.spaceDurations?.split(":");
  if (typeof space?.Chat?.people === "undefined") {
    People = 0;
  } else {
    People = space?.Chat?.people.length;
  }
  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  return (
    <li>
      <div className="hover:bg-muted flex w-full items-center justify-between">
        <div className="group flex w-full max-w-full items-center justify-between overflow-hidden px-4 py-4 sm:px-6">
          <button className="bg-default text-muted border-default hover:text-emphasis hover:border-emphasis invisible absolute left-[5px] mt-8 -ml-4 hidden h-6 w-6  scale-0 items-center justify-center rounded-md border p-1 transition-all  group-hover:visible group-hover:scale-100 sm:ml-0 sm:flex lg:left-[36px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
          <span
            className="flex-1 overflow-hidden pr-4 text-sm"
            title={`${value} Min Meeting`}
          >
            <div>
              <span
                className="text-default font-semibold ltr:mr-1 rtl:ml-1"
                data-testid="event-type-title-272238"
              >
                {space?.spaceName}
              </span>
              <small
                className="text-subtle hidden font-normal leading-4 sm:inline"
                data-testid="event-type-slug-272238"
              >
                /{space?.spaceID}/{space?.createdBy}
              </small>
            </div>
            <div className="text-subtle">
              <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1">
                <li>
                  <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-subtle text-emphasis py-1 px-1.5 text-xs leading-3">
                    <Icons.clock />
                    {value} {unit}
                  </div>
                </li>
                <li>
                  <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-subtle text-emphasis py-1 px-1.5 text-xs leading-3">
                    <Users size={13} strokeWidth={2.5} />
                    {People} People Joined
                  </div>
                </li>
              </ul>
            </div>
          </span>
          <div className="mt-4 hidden sm:mt-0 sm:flex">
            <div className="flex justify-between space-x-2 rtl:space-x-reverse">
              <div className="flex items-center justify-between space-x-2 rtl:space-x-reverse">
                <div
                  className={`${
                    space?.isProtected ? "bg-red-400" : "bg-amber-500"
                  } font-medium  inline-flex items-center justify-center rounded gap-x-1 bg-subtle text-emphasis py-1 px-1.5 text-xs leading-`}
                >
                  {space?.isProtected ? "Locked Space" : "Unlocked"}
                </div>
                <Switch.Root
                  title={space?.isProtected ? "Locked Space" : "Unlocked"}
                  checked={space?.isProtected}
                  className="w-[42px] h-[25px] bg-pink-400 rounded-full relative data-[state=checked]:bg-orange-400 outline-none cursor-default"
                >
                  <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
                </Switch.Root>

                <div className="flex [&amp;_a]:rounded-none ltr:[&amp;>*:first-child]:ml-0 ltr:[&amp;>*:first-child]:rounded-l-md ltr:[&amp;>*:first-child]:border-l rtl:[&amp;>*:first-child]:rounded-r-md rtl:[&amp;>*:first-child]:border-r ltr:[&amp;>*:last-child]:rounded-r-md rtl:[&amp;>*:last-child]:rounded-l-md [&amp;_button]:rounded-none [&amp;>a]:-ml-[1px] hover:[&amp;>a]:z-[1] [&amp;>button]:-ml-[1px] hover:[&amp;>button]:z-[1]">
                  <Link
                    title="Open Space"
                    data-testid="preview-link-button"
                    target="_blank"
                    href={`/join-space/${space.spaceID}`}
                    data-state="closed"
                    className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emphasis min-h-[36px] min-w-[36px] !p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </Link>

                  <ToastAlert
                    duration={1500}
                    title="Space Link Is Copied"
                    autoClose={false}
                    text="test"
                    varient="secondary"
                  >
                    <span
                      title="Copy Link/Space ID"
                      data-state="closed"
                      onClick={() => copyTextToClipboard(space?.spaceID)}
                      className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emphasis min-h-[36px] min-w-[36px] !p-2"
                    >
                      <Icons.link />
                    </span>
                  </ToastAlert>

                  <DeleteEvent spaceID={space?.spaceID} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-9 mx-5 flex sm:hidden">
          <button
            id="radix-:rj:"
            aria-haspopup="menu"
            data-state="closed"
            data-testid="event-type-options-272238"
            className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-empthasis min-h-[36px] min-w-[36px] !p-2"
            type="button"
          >
            <Icons.more />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Event;
