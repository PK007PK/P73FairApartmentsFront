import React from "react"
import { CardMapSmall } from "./CardMapSmall";


export default {
  component: CardMapSmall,
  title: "Components/Molecules/CardMapSmall",
  argTypes: {
  }
}

// label: string;
// maxLength?: number;
// max?: string;
// min?: string;
// name: string;
// onChange: (event: ChangeEvent<HTMLInputElement>) => void;
// required?: boolean;
// tag?: React.ElementType,
// type?: string;
// value: number | string;

const Template = (args) => 
  <div className="displayStoriesWrapper">
    <CardMapSmall {...args}>aaa</CardMapSmall>
  </div>

export const DefaultTextInput = Template.bind({})
DefaultTextInput.args = {
  label: "Abc",
  name: "Abc",
  tag: "input",
  type: "text",
  placeholder: "Enter value",
};
