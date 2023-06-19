import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { XCircle } from "lucide-react";
import { Inter } from "next/font/google";

import { generateSpaceId } from "@/utils/generateSpaceId";

import instance from "@/helpers/instance";
const inter = Inter({ subsets: ["latin"] });

const AddNewEvent = ({ children }: { children: React.ReactNode }) => {
  const SpaceID = generateSpaceId();
  const [createdBy, setCreatedBy] = React.useState("");
  const [showBanner, setBanner] = React.useState(false);
  var date = new Date();
  date.setHours(date.getHours() + 5);
  let [today] = new Date(date.getTime() + 30 * 60000).toISOString().split(".");
  const [spaceInfo, setSpaceInfo] = React.useState({
    spaceID: SpaceID,
    spaceName: "My Space",
    spaceDurations: "10:min",
    scheduledOn: today,
    isProtected: false,
    createdBy,
  });
  const handleSpaceDetailForSubmission = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSpaceInfo({ ...spaceInfo, [e.target.name]: e.target.value });
  };

  async function SubmitNewSpace() {
    const response = await instance.post("/server/handle-space", {
      spaceInfo,
    });
  }
  React.useEffect(() => {
    const IsUserEsixt = window.localStorage.getItem("client") as string;
    if (IsUserEsixt === null || IsUserEsixt === undefined) {
      setBanner(true);
    }
    setCreatedBy(IsUserEsixt);
  }, []);
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-slate-700 opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className={`${inter.className} data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-full max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`}
        >
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Add New Space
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal"></Dialog.Description>
          {showBanner && (
            <div
              className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">Note!</span> Please Add a Username
              first so other people can see you name,
            </div>
          )}
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-amber-600 w-[90px] text-right text-[15px]"
              htmlFor="username"
            >
              Space ID
            </label>
            <input
              className="cursor-not-allowed text-amber-700 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              id="spacdID"
              defaultValue={SpaceID}
              readOnly
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-violet-700 w-fit text-right text-[15px]"
              htmlFor="name"
            >
              Space Name
            </label>
            <input
              className="text-violet-700   inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              name="spaceName"
              onChange={handleSpaceDetailForSubmission}
              defaultValue={spaceInfo.spaceName}
            />
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-sky-600 w-fit text-right text-[15px]"
              htmlFor="duration"
            >
              Space Duration
            </label>
            <select
              className="text-sky-700 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              defaultValue={spaceInfo.spaceDurations}
              name="spaceDurations"
              onChange={(e: any) =>
                setSpaceInfo({ ...spaceInfo, [e.target.name]: e.target.value })
              }
            >
              <option value="10:min">10 minutes</option>
              <option value="30:min">30 minutes</option>
              <option value="1:hr">1 Hour</option>
              <option value="2:hr">2 Hour</option>
              <option value="3:hr">3 Hour</option>
              <option value="4:hr">4 Hour</option>
              <option value="5:hr">5 Hour</option>
              <option value="noLimit">No Limit</option>
            </select>
          </fieldset>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-sky-600 w-[90px] text-right text-[15px]"
              htmlFor="duration"
            >
              Date/Time
            </label>
            <input
              name="scheduledOn"
              className="text-sky-700 inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
              onChange={handleSpaceDetailForSubmission}
              type="datetime-local"
              defaultValue={today}
              min={today}
            />
          </fieldset>
          {/* <fieldset className="mb-[15px] flex items-center gap-5">
            <label
              className="text-amber-600 w-fit  text-right text-[15px]"
              htmlFor="password"
            >
              Password Protected
            </label>
            <Switch
              name="isProtected"
              defaultValue="true"
              onChange={(e: any) => setSpaceInfo(e.target.value)}
              className="bg-slate-100"
            />
          </fieldset> */}
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                className="bg-green-400 text-green-100 hover:bg-green-500 focus:shadow-green-700 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none disabled:bg-slate-700 disabled:cursor-none"
                disabled={showBanner}
                onClick={SubmitNewSpace}
              >
                Create
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <XCircle />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default AddNewEvent;
