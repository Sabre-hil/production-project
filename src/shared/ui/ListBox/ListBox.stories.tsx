import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const DropTop = Template.bind({});
DropTop.args = {
  defaultValue: 'Выберите значение',
  items: [
    { value: '1', content: '123' },
    { value: '2', content: 'adsad' },
    { value: '3', content: 'dsadsaccccx', disabled: true },
    { value: '4', content: 'mmcxck' },
  ],
  direction: 'top left',
};

export const DropBottom = Template.bind({});
DropBottom.args = {
  defaultValue: 'Выберите значение',
  items: [
    { value: '1', content: '123' },
    { value: '2', content: 'adsad' },
    { value: '3', content: 'dsadsaccccx', disabled: true },
    { value: '4', content: 'mmcxck' },
  ],
  direction: 'bottom left',
};
