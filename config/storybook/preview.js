import { addDecorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import {
  RouterDecorator,
} from 'shared/config/storybook/routerDecorator/routerDecorator';
import {
  StyleDecorator,
} from '../../src/shared/config/storybook/styleDecorator/styleDecorator';
import {
  ThemeDecorator,
} from '../../src/shared/config/storybook/themeDecorator/themeDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
