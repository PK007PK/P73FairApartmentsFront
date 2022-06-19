import React from 'react';
import { BootsContainer, BootsRow, BootsColumn } from 'components/atoms/BootsElements/BootsElements';
import { SectionHeroStyle } from './SectionHero.styles';

interface Props {
    leftComponent?: React.FunctionComponent,
    rightComponent?: React.FunctionComponent,
    Ycenter?: boolean,
}

export const SectionHero: React.FunctionComponent<Props> = (props): JSX.Element => {
    const { 
        leftComponent, 
        rightComponent,
        Ycenter,
    } = props;

    const LeftComponent = leftComponent as React.ElementType;
    const RightComponent = rightComponent as React.ElementType;

    return (
        <BootsContainer>
            <SectionHeroStyle>
                <BootsRow Ycenter={Ycenter}>
                    <BootsColumn xs={12} sm={9} md={6}>
                        {leftComponent && <LeftComponent />}
                    </BootsColumn>
                    <BootsColumn xs={12} sm={3} md={6}>
                        {rightComponent && <RightComponent />}
                    </BootsColumn>
                </BootsRow>
            </SectionHeroStyle>
        </BootsContainer>
    );
};
