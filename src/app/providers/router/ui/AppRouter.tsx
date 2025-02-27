import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RouteConfig } from '../../../../shared/config/routeConfig/routeConfig';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import { getUserAuthData } from 'entities/User';

export const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  console.log(isAuth, 'isAuth [pa')

  const routes = useMemo(() => {
    return Object.values(RouteConfig).filter(route => {
      if (route.authOnly && !isAuth) {
        return false;
      }

      return true;
    })
  }, [isAuth]);

  console.log(routes, 'routes [pa')


  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
