import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/themeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { error } from 'console';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Error = Template.bind({});
Error.args = {
    title: 'Title lorem',
    text: 'Text lorem lorem',
    theme: TextTheme.PRIMARY
};

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title lorem',
    text: 'Text lorem lorem'
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
    title: 'Title lorem',
};

export const onlyText = Template.bind({});
onlyText.args = {
    text: 'Text lorem lorem'
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem',
    text: 'Text lorem lorem'
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
    title: 'Title lorem',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
    text: 'Text lorem lorem'
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]