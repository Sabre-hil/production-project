import { ComponentMeta, ComponentStory } from '@storybook/react';
import { DropDown } from './DropDown';
import { Button } from '../Button/Button';

export default {
  title: 'shared/DropDown',
  component: DropDown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />;

export const DropDownExample = Template.bind({});
DropDownExample.args = {
  trigger: <Button>Open</Button>,
  items: [
    { content: 'first' },
    { content: 'second' },
    { content: 'third' },
    { content: 'fourth' },
  ],
};
