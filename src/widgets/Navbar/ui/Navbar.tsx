/* eslint-disable i18next/no-literal-string */
import { memo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername/ui/LoginModal/LoginModal';
import { getUserAuthData, userActions } from 'entities/User';
import csl from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const isUserAuth = useSelector(getUserAuthData)
  const [isAuthModal, setAuthModal] = useState(false);
  const dispatch = useDispatch();

  const onCloseModal = useCallback(() => {
    setAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [])

  if (isUserAuth) {
    return (
      <header className={classNames(csl.Navbar, {}, [className])}>
        <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={csl.links}
          onClick={onLogout}
        >
          {t('Выйти')}
        </Button>
      </header>
    )
  }

  return (
    <header className={classNames(csl.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={csl.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </header>
  );
});
