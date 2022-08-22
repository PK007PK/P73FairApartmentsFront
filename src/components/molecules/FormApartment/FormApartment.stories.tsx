import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormApartment } from "./FormApartment"

type Props = React.ComponentProps<typeof FormApartment>;

export default {
  component: FormApartment,
  title: "Components/Molecules/FormApartment",
  argTypes: {
  }
} as ComponentMeta<typeof FormApartment>

const FormApartmentTemplate: ComponentStory<typeof FormApartment> = (args: Props) => 
  <div className="displayStoriesWrapper displayStoriesWrapper--heightAuto">
    <FormApartment {...args} />
  </div>

export const Default = FormApartmentTemplate.bind({})
Default.args = {
};

