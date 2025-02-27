import { memo } from "react";
import { useSelector } from "react-redux";
import { t } from "i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { SidebarItemType } from "widgets/Sidebar/model/items";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './SidebarItem.module.scss';
import { getUserAuthData } from "entities/User";

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}


export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

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
