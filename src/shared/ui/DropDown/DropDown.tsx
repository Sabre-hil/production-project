import { Fragment, ReactNode } from 'react';
import {
  Menu,
} from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';
import cls from './DropDown.module.scss';

export interface DropDowmItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

interface DropDownProps {
  className?: string;
  items: DropDowmItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.optionsBottomLeft,
  'bottom right': cls.optionsBottomRight,
  'top left': cls.optionsTopLeft,
  'top right': cls.optionsTopRight,
};

export const DropDown = (props: DropDownProps) => {
  const {
    className,
    items,
    trigger,
    direction = 'bottom left',
  } = props;

  const menuClasses = [mapDirectionClass[direction]];

  return (
    <Menu as="div" className={classNames(cls.DropDown, {}, [className])}>
      <Menu.Button className={cls.Button}>
        {trigger}
      </Menu.Button>

      <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
        {items?.map((item) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              type="button"
              disabled={item.disabled}
              onClick={item.onClick}
              className={classNames(cls.item, { [cls.active]: active }, [])}
              key={item.href}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item
                to={item.href}
                as={AppLink}
                key={item.href}
                disabled={item.disabled}
              >
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} key={item.href} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
