import { languageInterface } from "types/languageInterface";

interface TextsEntity {
    title: {
        [languageInterface.eng]: string,
        [languageInterface.pl]: string,
    },
}

export const socialShareTexts: TextsEntity = {
    title:  {
        [languageInterface.eng]: "Share:",
        [languageInterface.pl]: "Udostępnij:",
    },
}