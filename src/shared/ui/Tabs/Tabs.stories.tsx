import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';

export default {
  title: 'shared/Tabs',
  component: Tabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    {
      value: 'tab value 1',
      content: 'tab content 1',
    },
    {
      value: 'tab value 2',
      content: 'tab content 2',
    },
    {
      value: 'tab value 3',
      content: 'tab content 3',
    },
  ],
  value: 'tab value 2',
  onTabClick: action('onTabClick'),
};
