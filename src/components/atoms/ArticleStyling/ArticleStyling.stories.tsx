import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ArticleStyling } from "./ArticleStyling"

type ButtonProps = React.ComponentProps<typeof ArticleStyling>;

export default {
  component: ArticleStyling,
  title: "Components/Atoms/ArticleStyling",
} as ComponentMeta<typeof ArticleStyling>

const ArticleStylingTemplate: ComponentStory<typeof ArticleStyling> = (args: ButtonProps) => 
  <div className="">
    <ArticleStyling {...args}>
      <h1>Title h1</h1>
      <h2>Title h2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ligula. Duis lobortis mattis justo, ultrices volutpat ex molestie nec. Mauris ultricies id sem a aliquet. Nam ultricies odio sed malesuada tempor. Pellentesque convallis a nibh non imperdiet. Donec quis orci a sapien pharetra dapibus id et ligula. Sed semper arcu in diam dignissim, sit amet ornare urna consectetur. Cras et metus porttitor, aliquam magna id, bibendum lacus. Fusce gravida, odio nec feugiat sollicitudin, eros nulla malesuada magna, eu tempus magna eros vitae felis. Suspendisse pretium augue sit amet venenatis gravida. Aliquam vitae felis justo. Duis sit amet nibh velit. Phasellus varius tincidunt pharetra. Aenean ultricies, justo ac gravida rutrum, nulla arcu elementum eros, a convallis turpis leo ut enim. Proin ac tincidunt neque.</p>
      <h3>Title h3</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ligula. Duis lobortis mattis justo, ultrices volutpat ex molestie nec. Mauris ultricies id sem a aliquet. Nam ultricies odio sed malesuada tempor. Pellentesque convallis a nibh non imperdiet. Donec quis orci a sapien pharetra dapibus id et ligula. Sed semper arcu in diam dignissim, sit amet ornare urna consectetur. Cras et metus porttitor, aliquam magna id, bibendum lacus. Fusce gravida, odio nec feugiat sollicitudin, eros nulla malesuada magna, eu tempus magna eros vitae felis. Suspendisse pretium augue sit amet venenatis gravida. Aliquam vitae felis justo. Duis sit amet nibh velit. Phasellus varius tincidunt pharetra. Aenean ultricies, justo ac gravida rutrum, nulla arcu elementum eros, a convallis turpis leo ut enim. Proin ac tincidunt neque.</p>
      <h4>Title h4</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ligula. Duis lobortis mattis justo, ultrices volutpat ex molestie nec. Mauris ultricies id sem a aliquet. Nam ultricies odio sed malesuada tempor. Pellentesque convallis a nibh non imperdiet. Donec quis orci a sapien pharetra dapibus id et ligula. Sed semper arcu in diam dignissim, sit amet ornare urna consectetur. Cras et metus porttitor, aliquam magna id, bibendum lacus. Fusce gravida, odio nec feugiat sollicitudin, eros nulla malesuada magna, eu tempus magna eros vitae felis. Suspendisse pretium augue sit amet venenatis gravida. Aliquam vitae felis justo. Duis sit amet nibh velit. Phasellus varius tincidunt pharetra. Aenean ultricies, justo ac gravida rutrum, nulla arcu elementum eros, a convallis turpis leo ut enim. Proin ac tincidunt neque.</p>
      <blockquote>This is blockquote. Morbi ut urna ligula. Duis lobortis mattis justo, ultrices volutpat ex molestie nec.</blockquote>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ligula. Duis lobortis mattis justo, ultrices volutpat ex molestie nec. Mauris ultricies id sem a aliquet. Nam ultricies odio sed malesuada tempor. Pellentesque convallis a nibh non imperdiet. Donec quis orci a sapien pharetra dapibus id et ligula. Sed semper arcu in diam dignissim, sit amet ornare urna consectetur. Cras et metus porttitor, aliquam magna id, bibendum lacus. Fusce gravida, odio nec feugiat sollicitudin, eros nulla malesuada magna, eu tempus magna eros vitae felis. Suspendisse pretium augue sit amet venenatis gravida. Aliquam vitae felis justo. Duis sit amet nibh velit. Phasellus varius tincidunt pharetra. Aenean ultricies, justo ac gravida rutrum, nulla arcu elementum eros, a convallis turpis leo ut enim. Proin ac tincidunt neque.</p>
      <ul>
        <li>point one</li>
        <li>point two</li>
        <li>point three</li>
      </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ligula. Duis lobortis mattis justo, ultrices volutpat ex molestie nec. Mauris ultricies id sem a aliquet. Nam ultricies odio sed malesuada tempor. Pellentesque convallis a nibh non imperdiet. Donec quis orci a sapien pharetra dapibus id et ligula. Sed semper arcu in diam dignissim, sit amet ornare urna consectetur. Cras et metus porttitor, aliquam magna id, bibendum lacus. Fusce gravida, odio nec feugiat sollicitudin, eros nulla malesuada magna, eu tempus magna eros vitae felis. Suspendisse pretium augue sit amet venenatis gravida. Aliquam vitae felis justo. Duis sit amet nibh velit. Phasellus varius tincidunt pharetra. Aenean ultricies, justo ac gravida rutrum, nulla arcu elementum eros, a convallis turpis leo ut enim. Proin ac tincidunt neque.</p>
      <ol>
        <li>point one</li>
        <li>point two</li>
        <li>point three</li>
      </ol>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut urna ligula. Duis lobortis mattis justo, ultrices volutpat ex molestie nec. Mauris ultricies id sem a aliquet. Nam ultricies odio sed malesuada tempor. Pellentesque convallis a nibh non imperdiet. Donec quis orci a sapien pharetra dapibus id et ligula. Sed semper arcu in diam dignissim, sit amet ornare urna consectetur. Cras et metus porttitor, aliquam magna id, bibendum lacus. Fusce gravida, odio nec feugiat sollicitudin, eros nulla malesuada magna, eu tempus magna eros vitae felis. Suspendisse pretium augue sit amet venenatis gravida. Aliquam vitae felis justo. Duis sit amet nibh velit. Phasellus varius tincidunt pharetra. Aenean ultricies, justo ac gravida rutrum, nulla arcu elementum eros, a convallis turpis leo ut enim. Proin ac tincidunt neque.</p>
    </ArticleStyling>
  </div>

export const Default = ArticleStylingTemplate.bind({})
Default.args = {
};