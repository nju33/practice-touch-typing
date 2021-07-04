import { ComponentMeta, ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { Keyboard } from './Keyboard';

export default {
  title: 'Keyboard',
  component: Keyboard,
} as unknown as ComponentMeta<typeof Keyboard>

const Template: ComponentStory<typeof Keyboard> = (args) => <Keyboard {...args} />;

export const normal = Template.bind({});