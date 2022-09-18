import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { BootsColumn, BootsContainer, BootsRow } from "src/components/atoms/BootsElements/BootsElements";
import { FooterStyles } from "./Footer.style";

export const TestedComponent: React.FunctionComponent = (): JSX.Element => {
   
const copyRightName = "Copy name";

  return (
      <FooterStyles>
          <BootsContainer between>
              <BootsRow>
                  <BootsColumn sm={6}>
                      {/* <Link to="/polityka">Privacy Policy</Link> */}
                      <a href="/polityka">Polityka prywatności</a>
                  </BootsColumn>
                  <BootsColumn className="copyright" sm={6}>
                      <>&copy; {copyRightName} {new Date().getFullYear()}</>
                  </BootsColumn>
              </BootsRow>
          </BootsContainer>
      </FooterStyles>
  );
}


type Props = React.ComponentProps<typeof TestedComponent>;

export default {
  component: TestedComponent,
  title: "Components/Molecules/Footer",
} as ComponentMeta<typeof TestedComponent>

export const Template: ComponentStory<typeof TestedComponent> = (args: Props) => 
  <div className="displayStoriesWrapper">
    <TestedComponent {...args} />
  </div>
