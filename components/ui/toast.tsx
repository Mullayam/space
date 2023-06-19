import * as React from "react";
import * as Toast from "@radix-ui/react-toast";

const ToastAlert = ({
  children,
  title,
  duration = 1500,
  text,
  autoClose,
  buttonText = "Close",
  varient,
  multipleToast = false,
  set = false,
}: {
  children?: React.ReactNode;
  title: string;
  duration?: number;
  multipleToast?: boolean;
  set?: boolean;
  text?: string;
  autoClose?: boolean;
  buttonText?: string;
  varient?: "success" | "warning" | "danger" | "ghost" | "info" | "secondary";
}) => {
  let texture = "";
  let [open, setOpen] = React.useState(false);
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);
  const [savedCount, setSavedCount] = React.useState(0);
  if (set) {
    open = set;
  }
  switch (varient) {
    case "success":
      texture = "bg-green-400 text-black";
      break;
    case "warning":
      texture = "bg-amber-400 text-black";
      break;
    case "danger":
      texture = "bg-red-400 text-red-900";
      break;
    case "ghost":
      texture = "bg-green-400 text-black";
      break;
    case "info":
      texture = "bg-sky-400 text-black";
      break;
    case "secondary":
      texture = "bg-slate-900 text-gray-100";
      break;
    default:
      texture = "bg-white";
      break;
  }

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="left">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSavedCount((count) => count + 1);
        }}
      >
        <button
          onClick={() => {
            setOpen(false);
            window.clearTimeout(timerRef.current);
            timerRef.current = window.setTimeout(() => {
              eventDateRef.current = oneWeekAway();
              setOpen(true);
            }, 100);
          }}
        >
          {children}
        </button>
      </form>
      {multipleToast ? (
        Array.from({ length: savedCount }).map((_, index) => (
          <Toast.Root
            duration={duration}
            className={`${texture} rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut`}
            key={index}
          >
            <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
              {title}
            </Toast.Title>
            <Toast.Description asChild>{text}</Toast.Description>
            <Toast.Action
              className="[grid-area:_action]"
              asChild
              altText={buttonText}
            >
              {autoClose && (
                <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
                  {buttonText}
                </button>
              )}
            </Toast.Action>
          </Toast.Root>
        ))
      ) : (
        <Toast.Root
          duration={duration}
          className={`${texture} rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut`}
          open={open}
          onOpenChange={setOpen}
        >
          <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
            {title}
          </Toast.Title>
          <Toast.Description asChild>{text}</Toast.Description>
          <Toast.Action
            className="[grid-area:_action]"
            asChild
            altText={buttonText}
          >
            {autoClose && (
              <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
                {buttonText}
              </button>
            )}
          </Toast.Action>
        </Toast.Root>
      )}

      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  );
};

function oneWeekAway() {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

export default ToastAlert;
