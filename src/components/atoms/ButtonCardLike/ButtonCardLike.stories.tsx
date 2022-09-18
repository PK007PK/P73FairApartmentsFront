import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonCardLike as TestedComponent} from "./ButtonCardLike"
import { IoIosContact } from "@react-icons/all-files/io/IoIosContact";
import { BootsColumn, BootsContainer, BootsRow } from "../BootsElements/BootsElements";

type Props = React.ComponentProps<typeof TestedComponent>;

export default {
  component: TestedComponent,
  title: "Components/Atoms/ButtonCardLike",
  argTypes: {
  }
} as ComponentMeta<typeof TestedComponent>

const Template: ComponentStory<typeof TestedComponent> = (args: Props) => 
  <div className="displayStoriesWrapper">
    <TestedComponent {...args} />
  </div>

export const Default = Template.bind({})
Default.args = {
  title: "Component's title",
  iconComponent: ()=><IoIosContact className="icon" />,
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
  title: "Component's title",
  iconComponent: ()=><IoIosContact className="icon" />,
};