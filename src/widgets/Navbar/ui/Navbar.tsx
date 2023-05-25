import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import csl from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={classNames(csl.Navbar, {}, [className])}>
      <div className={csl.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={csl.mainLink}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>
          О сайте
        </AppLink>
      </div>
    </header>
  );
};
