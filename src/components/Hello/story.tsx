import { Story, Meta } from '@storybook/react/types-6-0'
import { Hello } from './index'

export default {
  title: 'Hello',
  component: Hello,
} as Meta

export const Default: Story = () => <Hello />
