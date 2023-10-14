import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Ligth = Template.bind({});
Ligth.args = {
};
Ligth.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
