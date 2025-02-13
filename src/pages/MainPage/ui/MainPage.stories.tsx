import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import MainPage from './MainPage';

export default {
  title: 'pages/MainPage',
  component: MainPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const MainPageLigth = Template.bind({});
MainPageLigth.args = {
};

export const MainPageDark = Template.bind({});
MainPageDark.args = {
};
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
