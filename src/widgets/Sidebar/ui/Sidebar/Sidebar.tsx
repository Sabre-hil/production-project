/* eslint-disable i18next/no-literal-string */
import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSweather } from 'widgets/LangSweather/LangSweather';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '../../../../shared/ui/Button/Button';
import cls from './Sidebar.module.scss';
import { SidebarItemList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [state, setState] = useState(0);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={() => setState(state + 1)}>test {state}</button>
      <Button
        size={ButtonSize.L}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        className={cls.collapsedBtn}
        data-testid="sidebar-toggle"
        type="button"
        square
        onClick={onToggle}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {SidebarItemList.map((item) => (
          <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
          />
        ))}
      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSweather short={collapsed} className={cls.lang} />
      </div>
    </div>
  );
});
