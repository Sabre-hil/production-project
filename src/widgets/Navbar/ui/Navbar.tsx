/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import csl from './Navbar.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import { Modal } from '../../../shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setAuthModal((prev) => !prev)
  }, [])

  return (
    <header className={classNames(csl.Navbar, {}, [className])}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={csl.links}
        onClick={onToggleModal}>
        {t('Войти')}
      </Button>
      <Modal isOpen={isAuthModal} onCLose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio cupiditate similique sit voluptas molestiae repellat, necessitatibus corrupti adipisci dolorem at consequatur obcaecati? Laborum odio quae veritatis ullam fuga exercitationem necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit consequatur sint deserunt soluta fugit voluptate non voluptas totam mollitia harum iure ex, hic optio eaque accusamus ipsum blanditiis possimus nesciunt?
      </Modal>
    </header>
  );
};
