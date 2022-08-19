import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormApartment } from "./FormApartment"

type FormApartmentProps = React.ComponentProps<typeof FormApartment>;

export default {
  component: FormApartment,
  title: "Components/Molecules/FormApartment",
  argTypes: {
  }
} as ComponentMeta<typeof FormApartment>

const FormApartmentTemplate: ComponentStory<typeof FormApartment> = (args: FormApartmentProps) => 
  <div className="displayStoriesWrapper displayStoriesWrapper--100vh">
    <FormApartment {...args} />
  </div>

export const Default = FormApartmentTemplate.bind({})
Default.args = {
};

