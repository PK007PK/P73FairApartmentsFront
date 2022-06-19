import React, { useState } from 'react';
import { IoIosContact } from '@react-icons/all-files/io/IoIosContact';

import { CardContactFormStyle } from './CardContactForm.style';
import { ButtonCardLike } from 'components/atoms/ButtonCardLike/ButtonCardLike';
import { CommonProps } from 'types/commonProps';
import { languageCheck } from 'hooks/languageCheck'
import { CardContactFormTexts } from './CardContactForm.texts';
import { FormContact } from 'components/molecules/FormContact/FormContact';

interface Props extends CommonProps {}

export const CardContactForm: React.FunctionComponent<Props> = ({ className, style }): JSX.Element => {
    const [open, setOpen] = useState(false);

    return (
        <CardContactFormStyle style={style} className={className}>
            {!open && (
                <ButtonCardLike 
                    title="Contact form"
                    iconComponent={()=><IoIosContact className="icon" />}
                    onClick={() => setOpen(!open)}
                />
            )}
            {open && (
                <div className="openedCard">
                    <button className="closeBtn" type="button" onClick={() => setOpen(!open)}>
                        X
                    </button>
                    <h3 className="title">{CardContactFormTexts.title[languageCheck()]}</h3>
                    <FormContact />
                </div>
            )}
        </CardContactFormStyle>
    );
};
