import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar } from './Avatar';
// import AvatarImage from './storybook.png'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: 150,
//   src: AvatarImage
};