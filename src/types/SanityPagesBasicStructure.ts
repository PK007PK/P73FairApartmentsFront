import { IGatsbyImageData } from "gatsby-plugin-image";

export interface SanityPagesBasicStructure {
    title: string,
    description: string,
    image: {
        asset: {
            gatsbyImageData: IGatsbyImageData,
        },
    },
}