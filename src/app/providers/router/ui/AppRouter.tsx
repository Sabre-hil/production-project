/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import { RouteConfig } from '../../../../shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
  <>
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(RouteConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  </>
);

export default AppRouter;
