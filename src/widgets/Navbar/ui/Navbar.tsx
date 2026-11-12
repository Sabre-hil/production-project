import { MobileView, BrowserView } from "react-device-detect";
import { memo, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { LoginModal } from "features/AuthByUsername";
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from "entities/User";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { DropDown } from "shared/ui/DropDown/DropDown";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { HStack } from "shared/ui/Stack";
import { Icon } from "shared/ui/Icon/Icon";
import NotificationBell from "shared/assets/icons/notification-bell.svg";
import { Popover } from "shared/ui/Popover/Popover";
import { NotificationList } from "entities/Notification";
import cls from "./Navbar.module.scss";
import { Drawer } from "../../../shared/ui/Drawer/Drawer";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const [isDrawer, setDrawer] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const handleOpenDrawer = () => setDrawer(true);
  const handlCloseDrawer = () => setDrawer(false);

  const isAdminPanelAvailable = isAdmin || isManager;

  const trigger = (
    <Button onClick={handleOpenDrawer} theme={ButtonTheme.CLEAR}>
      <Icon Svg={NotificationBell} inverted className={cls.bell} />
    </Button>
  );

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Text
          className={cls.appName}
          title={t("Мир АйТи")}
          theme={TextTheme.INVERTED}
        />
        <AppLink
          to={RoutePath.article_create}
          theme={AppLinkTheme.SECONDARY}
          className={cls.createBtn}
        >
          {t("Создание статьи")}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <>
            <BrowserView>
              <Popover direction="bottom left" trigger={trigger}>
                <NotificationList className={cls.Notifications} />
              </Popover>
            </BrowserView>
            <MobileView>
              {trigger}
              <Drawer isOpen={isDrawer} onClose={handlCloseDrawer}>
                <NotificationList className={cls.Notifications} />
              </Drawer>
            </MobileView>
          </>

          <DropDown
            direction="bottom left"
            className={cls.dropdown}
            items={[
              ...(isAdminPanelAvailable
                ? [
                    {
                      content: t("Админка"),
                      href: RoutePath.admin_panel,
                    },
                  ]
                : []),
              {
                content: t("Профиль"),
                href: RoutePath.profile + authData.id,
              },
              {
                content: t("Выйти"),
                onClick: onLogout,
              },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
          />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t("Войти")}
      </Button>
      {isAuthModal && (
        <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
      )}
    </header>
  );
});
