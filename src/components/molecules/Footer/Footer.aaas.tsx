import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer as TestedComponent} from "./Footer"
import { BootsColumn, BootsContainer, BootsRow } from "src/components/atoms/BootsElements/BootsElements";

type Props = React.ComponentProps<typeof TestedComponent>;

export default {
  component: TestedComponent,
  title: "Components/Molecules/Footer",
} as ComponentMeta<typeof TestedComponent>

const Template: ComponentStory<typeof TestedComponent> = (args: Props) => 
  <div className="displayStoriesWrapper">
    <TestedComponent {...args} />
  </div>

// export const Default = Template.bind({})
// Default.args = {
// };
