import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from 'shared/ui/Stack/Flex/Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Justify = Template.bind({});
Justify.args = {
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
};

export const Align = Template.bind({});
Align.args = {
  children: (
    <div style={{ height: '300px', background: 'red', width: '300px' }}>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </div>
  ),
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
  direction: 'column',
};

export const Gap8 = Template.bind({});
Gap8.args = {
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
  gap: '8',
};

export const Gap32 = Template.bind({});
Gap32.args = {
  children: (
    <>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
      <div>first</div>
    </>
  ),
  gap: '32',
};
