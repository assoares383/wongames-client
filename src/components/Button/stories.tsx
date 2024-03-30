import { Meta, StoryObj } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj<ButtonProps> = (
  args: JSX.IntrinsicAttributes & ButtonProps
) => <Button {...args} />

Default.args = {
  children: 'Buy Now'
}
