import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { XCircle } from "lucide-react";
import { Inter } from "next/font/google";
import instance from "@/helpers/instance";
import ToastAlert from "../ui/toast";
const inter = Inter({ subsets: ["latin"] });
const DeleteEvent = ({ spaceID }: { spaceID: string }) => {
  let show = false;
  let text = "";
  const [open, setOpen] = React.useState(false);
  async function handleDeleteSpace() {
    const { data } = await instance.delete(
      `/server/handle-space?spaceID=${spaceID}`
    );
    setOpen(false);

    show = true;
    text = data?.message;

    return;
  }

  return (
    <AlertDialog.Root open={open}>
      <AlertDialog.Trigger asChild>
        <button
          className="items-center text-sm font-medium relative rounded-md transition-colors flex justify-center text-emphasis h-9 px-4 py-2.5 border border-default bg-default hover:bg-muted hover:border-emphasis focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emphasis min-h-[36px] min-w-[36px] !p-2 ltr:radix-state-open:rounded-r-md rtl:radix-state-open:rounded-l-md"
          id="radix-:rh:"
          aria-haspopup="menu"
          data-state="closed"
          data-testid="event-type-options-272238"
          type="button"
          title="Delete Space"
        >
          <XCircle color="#fc4e03" onClick={() => setOpen(true)} />
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
        <AlertDialog.Content
          className={`${inter.className} data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`}
        >
          <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="text-mauve11 mt-4 mb-5 text-[15px] leading-normal">
            This action cannot be undone. This will permanently delete your
            Space and remove your data from our servers.
          </AlertDialog.Description>
          <div className="flex justify-end gap-[25px]">
            <AlertDialog.Cancel asChild>
              <button
                className="text-white bg-slate-500 hover:bg-slate-700 focus:shadow-mauve7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <ToastAlert set={show} title="Deleted" text={text}>
                <span
                  onClick={() => handleDeleteSpace()}
                  className="text-gray-100 bg-red-600 hover:bg-red-500 focus:shadow-red7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]"
                >
                  Yes, This Space
                </span>
              </ToastAlert>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default DeleteEvent;
