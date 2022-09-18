import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button as TestedComponent} from "./Button"
import { BootsColumn, BootsContainer, BootsRow } from "../BootsElements/BootsElements";

type Props = React.ComponentProps<typeof TestedComponent>;

export default {
  component: TestedComponent,
  title: "Components/Atoms/Button",
  argTypes: {
    children: {
      defaultValue: "Button",
      control: 'text',
    }
  }
} as ComponentMeta<typeof TestedComponent>


const Template: ComponentStory<typeof TestedComponent> = (args: Props) => 
  <div className="displayStoriesWrapper">
    <TestedComponent {...args}>{args.children}</TestedComponent>
  </div>

export const Default = Template.bind({})
Default.args = {
  children: "Click me!"
};

const WrappedTemplate: ComponentStory<typeof TestedComponent> = (args: Props) =>
<div className="displayStoriesWrapper">
  <BootsContainer>
    <BootsRow>
      <BootsColumn sm={6} md={4} lg={3} >
        <TestedComponent {...args} />
      </BootsColumn>
    </BootsRow>
  </BootsContainer>
</div>

export const WrappedDefault = WrappedTemplate.bind({})
WrappedDefault.args = {
  children: "Click me!"
};