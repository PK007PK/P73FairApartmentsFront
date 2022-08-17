import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FormField } from "./FormField"

type FormFieldProps = React.ComponentProps<typeof FormField>;

export default {
  component: FormField,
  title: "Components/Attoms/FormField",
  argTypes: {
    label: {
      defaultValue: "Label",
      control: 'text',
    }
  }
} as ComponentMeta<typeof FormField>

const FormFieldStoryTemplate: ComponentStory<typeof FormField> = (args: FormFieldProps) => 
  <div className="displayStoriesWrapper">
    <FormField {...args} />
  </div>

export const DefaultTextInput = FormFieldStoryTemplate.bind({})
DefaultTextInput.args = {
  as: "input",
  type: "text",
  placeholder: "Enter name",
  disabled: false,
};

export const DefaultTextInputLongLabel = FormFieldStoryTemplate.bind({})
DefaultTextInputLongLabel.args = {
  label: "It is a very long label",
  as: "input",
  type: "text",
  placeholder: "It is a very long placeholder",
  disabled: false,
};

export const DefaultNumberInput = FormFieldStoryTemplate.bind({})
DefaultNumberInput.args = {
  as: "input",
  type: "number",
  placeholder: "Enter value",
  disabled: false,
};

export const TextArea = FormFieldStoryTemplate.bind({});
TextArea.args = {
  as: "textarea",
  placeholder: "Enter text here",
  disabled: false,
};