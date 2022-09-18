import React from "react";
import { graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";

import {
  BootsContainer,
  BootsRow,
  BootsColumn,
} from "src/components/atoms/BootsElements/BootsElements";
import { Layout } from "src/components/organisms/Layout/Layout";
import { SEO } from "src/components/atoms/SEO/SEO";
import { SectionHero } from "src/components/molecules/SectionHero/SectionHero";
import { ArticleStyling } from "src/components/atoms/ArticleStyling/ArticleStyling";
import { HeroTextBlock } from "src/components/atoms/HeroTextBlock/HeroTextBlock";

interface Props {
  data: {
    sanityPageAbout: {
      title: string;
      description: string;
      _rawRichText: string;
    };
  };
}

const About: React.FunctionComponent<Props> = ({ data }): JSX.Element => {
  const {
    title,
    description,
    _rawRichText,
    // image: {
    //     asset: { gatsbyImageData },
    // },
  } = data.sanityPageAbout;
  return (
    <Layout>
      <SEO title="O nas" />
      <SectionHero
        leftComponent={() => (
          <HeroTextBlock title={title} description={description} />
        )}
      />
      <SEO title="Informacje o stowarzyszeniu" />
      <BootsContainer>
        <BootsRow between>
          <BootsColumn style={{ marginTop: "50px" }} md={7}>
            <ArticleStyling>
              <BlockContent
                blocks={_rawRichText}
                dataset="production"
                url=""
                projectId={process.env.SANITY_PROJECT_ID ?? ""}
              />
            </ArticleStyling>
          </BootsColumn>
        </BootsRow>
      </BootsContainer>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    sanityPageAbout {
      title
      description
      # image {
      #     asset {
      #         gatsbyImageData(width: 400)
      #     }
      # }
      _rawRichText
    }
  }
`;

export default About;
