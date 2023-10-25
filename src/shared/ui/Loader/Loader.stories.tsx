import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Loader } from './Loader';

export default {
  title: 'shared/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args as object} />;

export const LoadeLigth = Template.bind({});
LoadeLigth.args = {
};

export const LoaderDark = Template.bind({});
LoaderDark.args = {
};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)];
