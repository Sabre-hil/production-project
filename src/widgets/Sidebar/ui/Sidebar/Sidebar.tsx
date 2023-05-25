import { useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { LangSweather } from "widgets/LangSweather/LangSweather";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import csl from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(csl.Sidebar, { [csl.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={csl.switchers}>
        <ThemeSwitcher />
        <LangSweather className={csl.lang}/>
      </div>
    </div>
  );
};
