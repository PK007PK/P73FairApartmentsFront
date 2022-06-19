import { Link } from 'gatsby';
import React from 'react';
import { ButtonStyle } from 'components/atoms/Button/Button';
import { FormContactStyle } from './FormContact.style';
import { formContactTexts } from './FormContact.texts';
import { languageCheck } from 'hooks/languageCheck';
import { websiteOwnerFormalNameCheck } from 'hooks/websiteOwnerFormalNameCheck';

export const FormContact: React.FunctionComponent = (): JSX.Element => {
    const lang = languageCheck();
    const formalName = websiteOwnerFormalNameCheck()
    const texts = formContactTexts(formalName);
    return (
        <FormContactStyle
            name="contact v1"
            method="post"
            data-netlify="true"
            onSubmit={() => 'submit'}
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact v1" />

            <div hidden>
                <input name="bot-field" />
            </div>

            <div className="wrapper">
                <label htmlFor="first-name">
                    {texts.firstName[lang]}
                    <br /> <input type="text" name="first-name" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="phone">
                    {texts.phoneNumber[lang]}
                    <br /> <input type="text" name="phone" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="email">
                    {texts.email[lang]}
                    <br /> <input type="email" name="email" />
                </label>
            </div>
            <div className="wrapper">
                <label htmlFor="message">
                    {texts.message[lang]}
                    <br /> <textarea rows={4} name="message" />
                </label>
            </div>
            <div className="acceptPolicy">
                <input className="check" type="checkbox" id="policy" name="policy" required />
                <p className="text">
                    {texts.agreement[lang]}{' '}
                    <Link to="/polityka/">
                        <strong>{texts.policy[lang]}</strong>
                    </Link>
                </p>
            </div>
            <ButtonStyle full type="submit">
                {texts.send[lang]}
            </ButtonStyle>
        </FormContactStyle>
    );
}
