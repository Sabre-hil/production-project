module.exports = (layer, storyName) => `import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ${storyName} } from './${storyName}';

export default {
  title: '${layer}/${storyName}',
  component: ${storyName},
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ${storyName}>;

const Template: ComponentStory<typeof ${storyName}> = (args) => <${storyName} {...args} />;

export const Normal = Template.bind({});
Normal.args = {};`;
