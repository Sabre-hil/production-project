import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTesting from '../../../config/i18n/i18nForTesting';

const renderWithTranslation = (component: ReactNode) => (
  render(
    <I18nextProvider i18n={i18nForTesting}>
      {component}
    </I18nextProvider>,
  )
);

export default renderWithTranslation;
