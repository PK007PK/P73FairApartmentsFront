import React from "react"
import { Button } from "./Button"
import {Props} from './Button'

export default {
  component: Button,
  title: "Components/Attoms/Button",
  argTypes: {
    children: {
      defaultValue: "Button",
      control: 'text',
    }
  }
}

const Template = (args: Props) => 
  <div className="displayStoriesWrapper">
    <Button {...args}>
      {args.children}
    </Button>
  </div>

export const Default = Template.bind({})
Default.args = {
  disabled: false,
  secondary: false,
  full: false,
};

export const Diseabled = Template.bind({});
Diseabled.args = {
  disabled: true,
};

export const Secondary = Template.bind({})
Secondary.args = {
  secondary: true,
  disabled: false,
};

export const VeryLongText = Template.bind({});
VeryLongText.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
};