import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/MainPage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage { ...args as object } />;

export const MainPageLigth = Template.bind({});
MainPageLigth.args = {
};

export const MainPageDark = Template.bind({});
MainPageDark.args = {
};
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
