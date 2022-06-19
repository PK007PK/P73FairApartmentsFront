import { languageInterface } from "types/languageInterface";

interface FormContactTextsEntity {
    firstName: {
        [languageInterface.eng]: string,
        [languageInterface.pl]: string,
    },
    phoneNumber: {
        [languageInterface.eng]: string,
        [languageInterface.pl]: string,
    },
    email: {
        [languageInterface.eng]: string,
        [languageInterface.pl]: string,
    },
    message: {
        [languageInterface.eng]: string,
        [languageInterface.pl]: string,
    },
    agreement: {
        [languageInterface.eng]: string,
        [languageInterface.pl]: string,
    },
    policy: {
        [languageInterface.eng]: string,
        [languageInterface.pl]: string,
    },
    send: {
        [languageInterface.eng]: string,
        [languageInterface.pl]: string,
    },
}

export function formContactTexts(name?: string): FormContactTextsEntity {
    return {
        firstName: {
            [languageInterface.eng]: "Name",
            [languageInterface.pl]: "Imię",
        },
        phoneNumber: {
            [languageInterface.eng]: "Phone number",
            [languageInterface.pl]: "Numer telefonu",
        },
        email: {
            [languageInterface.eng]: "Email",
            [languageInterface.pl]: "Email",
        },
        message: {
            [languageInterface.eng]: "Message",
            [languageInterface.pl]: "Wiadomość",
        },
        agreement: {
            [languageInterface.eng]: `I consent to the processing of my personal data by ${name ?? 'XYZ'} in accordance with the principles of personal data protection principles expressed in`,
            [languageInterface.pl]: `Wyrażam zgodę na przetwarzanie przez ${name ?? 'XYZ'} moich danych osobowych zgodnie z zasadami ochrony danych osobowych wyrażonymi w`,
        },
        policy: {
            [languageInterface.eng]: "Privacy Policy",
            [languageInterface.pl]: "Polityce Prywatności",
        },
        send: {
            [languageInterface.eng]: "Send",
            [languageInterface.pl]: "Wyślij",
        },
    }
}