import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Accordion } from "./Accordion"

type Props = React.ComponentProps<typeof Accordion>;

export default {
  component: Accordion,
  title: "Components/Atoms/Accordion",
  argTypes: {
  }
} as ComponentMeta<typeof Accordion>

const AccordionData = [
  {
    title: "The first accordion title",
    description: "Quisque quis ex enim. Cras a tortor interdum, tempor magna non, egestas purus. Nunc vestibulum ullamcorper magna. Sed imperdiet urna at pretium porta. ",
  },
  {
    title: "The second accordion title",
    description: "Quisque quis ex enim. Cras a tortor interdum, tempor magna non, egestas purus. Nunc vestibulum ullamcorper magna. Sed imperdiet urna at pretium porta. ",
  },
  {
    title: "The third accordion title",
    description: "Quisque quis ex enim. Cras a tortor interdum, tempor magna non, egestas purus. Nunc vestibulum ullamcorper magna. Sed imperdiet urna at pretium porta. ",
  },
]

const AccordionStoryTemplate: ComponentStory<typeof Accordion> = (props: Props) => {
  const {data, title} = props;
  
  return (
    <div className="displayStoriesWrapper">
      <Accordion 
        title={title}
        data={data} 
      />
    </div>
  )
}

export const Default = AccordionStoryTemplate.bind({})
Default.args = {
  title: "Component title",
  data: AccordionData,
};

