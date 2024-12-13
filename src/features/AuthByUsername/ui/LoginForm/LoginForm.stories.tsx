import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoginForm } from './LoginForm';
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';

export default {
    title: 'feauture/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};