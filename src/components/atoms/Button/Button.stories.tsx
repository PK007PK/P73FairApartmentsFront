import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button"

type ButtonProps = React.ComponentProps<typeof Button>;

export default {
  component: Button,
  title: "Components/Attoms/Button",
  argTypes: {
    children: {
      defaultValue: "Button",
      control: 'text',
    }
  }
} as ComponentMeta<typeof Button>

const ButtonStoryTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => 
  <div className="displayStoriesWrapper">
    <Button {...args}>
      {args.children}
    </Button>
  </div>

export const Default = ButtonStoryTemplate.bind({})
Default.args = {
  disabled: false,
  secondary: false,
  full: false,
};

export const Diseabled = ButtonStoryTemplate.bind({});
Diseabled.args = {
  disabled: true,
};

export const Secondary = ButtonStoryTemplate.bind({})
Secondary.args = {
  secondary: true,
  disabled: false,
};

export const VeryLongText = ButtonStoryTemplate.bind({});
VeryLongText.args = {
  children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
};
