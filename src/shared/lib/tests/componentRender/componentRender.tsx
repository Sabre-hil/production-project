import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTesting from '../../../config/i18n/i18nForTesting';

export interface componentRenderOptions {
    route?: string
}

const componentRender = (component: ReactNode, options: componentRenderOptions = {}) => {
  const {
    route = '/',
  } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTesting}>
        {component}
      </I18nextProvider>,
    </MemoryRouter>,

  );
};

export default componentRender;
