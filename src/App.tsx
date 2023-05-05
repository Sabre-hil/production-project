import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import { Suspense } from "react";
import { AboutPageAsync } from "./components/pages/AboutPage/AboutPage.async";
import { useTheme as funcTheme } from "./theme/useTheme";
import { MainPageAsync } from "./components/pages/MainPage/MainPage.async";
import "./styles/index.scss";
import { classnames } from "./helpers/classNames/classNames";

export const App = () => {
  const { theme, toggleTheme } = funcTheme();

  return (
    <div
      className={classnames("app", { hovered: true, selected: true }, [
        theme,
        "dsdas",
        "dsadas",
      ])}
    >
      <Link to={"/"}>Главное</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>change theme</button>
      <Counter />
    </div>
  );
};
