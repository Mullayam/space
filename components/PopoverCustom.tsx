import * as Popover from "@radix-ui/react-popover";

const PopoverCustom = ({
  children,
  Trigger,
  className,
}: {
  children: React.ReactNode;
  Trigger: React.ReactNode;
  className?: string;
}) => {
  if (!className) {
    className =
      "rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA7 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black cursor-default outline-none";
  }
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <span className={className}>{Trigger}</span>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          {children}
          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
export default PopoverCustom;
