/* eslint-disable i18next/no-literal-string */
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSweather } from 'widgets/LangSweather/LangSweather';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import csl from './Sidebar.module.scss';
import { Button } from '../../../shared/ui/Button/Button';

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
      data-testid="sidebar"
      className={classNames(csl.Sidebar, { [csl.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>toggle</Button>
      <div className={csl.switchers}>
        <ThemeSwitcher />
        <LangSweather className={csl.lang} />
      </div>
    </div>
  );
};
