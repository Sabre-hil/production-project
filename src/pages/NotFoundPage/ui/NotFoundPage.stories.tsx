import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import NotFoundPage from './NotFoundPage';

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage {...args as object} />;

export const NotFoundPageLigth = Template.bind({});
NotFoundPageLigth.args = {
};

export const NotFoundPageDark = Template.bind({});
NotFoundPageDark.args = {
};
NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)];
