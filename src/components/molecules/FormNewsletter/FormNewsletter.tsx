import React from "react";
import { Link } from "gatsby";

import { Button } from "src/components/atoms/Button/Button";

import { CommonProps } from "src/types/commonProps";
import { languageCheck } from "src/utils/languageCheck";
import { websiteOwnerFormalNameCheck } from "src/utils/websiteOwnerFormalNameCheck";

import { FormNewsletterStyle } from "./FormNewsletter.style";
import { formContactTexts } from "./FormNewsletter.texts";

interface Props extends CommonProps {
  status: string;
  message: string;
  onValidated: (formData: any) => any;
}

export const FormNewsletter: React.FunctionComponent<Props> = ({
  status,
  message,
  onValidated,
}): JSX.Element => {
  let email: { value: string };
  let name: { value: string };
  const lang = languageCheck();
  const ownerName = websiteOwnerFormalNameCheck();
  const texts = formContactTexts(ownerName);

  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <FormNewsletterStyle>
      <h3>{texts.title[lang]}</h3>
      <p>{texts.message[lang]}</p>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        ref={(node) => (name = node)}
        type="text"
        placeholder={texts.firstName[lang]}
      />
      <br />
      <input
        ref={(node) => (email = node)}
        type="email"
        placeholder={texts.email[lang]}
      />
      <br />
      <div className="acceptPolicy">
        <input
          className="check"
          type="checkbox"
          id="policy"
          name="policy"
          required
        />
        <p className="text">
          {texts.agreement[lang]}{" "}
          <Link to="/polityka/">
            <strong>{texts.policy[lang]}.</strong>
          </Link>
        </p>
      </div>
      <Button full={true} type="button" onClick={submit}>
        {texts.send[lang]}
      </Button>
    </FormNewsletterStyle>
  );
};
