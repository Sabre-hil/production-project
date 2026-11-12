import { memo, ReactNode } from "react";
import clsx from "clsx";
import { useTheme } from "app/providers/ThemeProvider";
import cls from "./Drawer.module.scss";
import { Portal } from "../Portal/Portal";
import { Overlay } from "../Overlay/Overlay";

interface DrawerProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, onClose, isOpen, children } = props;
  const { theme } = useTheme();
  const mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div className={clsx(cls.Drawer, mods, [className, theme, "app_drawer"])}>
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
