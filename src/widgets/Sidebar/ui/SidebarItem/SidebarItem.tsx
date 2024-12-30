import { memo } from "react";
import { t } from "i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import cls from './SidebarItem.module.scss';
import { classNames } from "shared/lib/classNames/classNames";

interface SidebarItemProps {
    item?: SidebarItemType;
    collapsed: boolean;
}


export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    )
});
