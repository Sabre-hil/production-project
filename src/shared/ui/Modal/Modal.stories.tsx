import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;
Modal

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit quo neque quis esse maiores nihil sunt at hic aliquid deleniti molestias ipsam eum dolorum, saepe ratione obcaecati velit quisquam delectus!',
};