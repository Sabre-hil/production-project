/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RouteConfig } from '../../../../shared/config/routeConfig/routeConfig';

export const AppRouter = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
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
  </div>
);

export default AppRouter;
