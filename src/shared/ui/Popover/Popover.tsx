import { Popover as HPopover } from "@headlessui/react";
import { memo, ReactNode } from "react";
import { DropdownDirection } from "shared/types/ui";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Popover.module.scss";
import { mapDirectionClass } from "../DropDown/DropDown";

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger?: ReactNode;
  children: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
  const { className, direction = "bottom right", trigger, children } = props;
  const menuClasses = [mapDirectionClass[direction]];

  return (
    <HPopover className={classNames(cls.Popover, {}, [className])}>
      <HPopover.Button className={cls.Button}>{trigger}</HPopover.Button>

      <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
});
