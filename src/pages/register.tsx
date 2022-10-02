import React, { useEffect, useState } from "react";

import { Layout } from "src/components/organisms/Layout/Layout";
import { SEO } from "src/components/atoms/SEO/SEO";
import { SectionHero } from "src/components/molecules/SectionHero/SectionHero";
import { HeroTextBlock } from "src/components/atoms/HeroTextBlock/HeroTextBlock";
import { Image } from "src/components/atoms/Image/Image";
import { ImgPlaceholder } from "src/components/molecules/ImgPlaceholder/ImgPlaceholder";
import {
  BootsColumn,
  BootsContainer,
  BootsRow,
} from "src/components/atoms/BootsElements/BootsElements";
import { ApartmentDetails } from "src/components/molecules/ApartmentDetails/ApartmentDetails";

import { PublicApartmentEntity } from "src/types/apartment";
import { alternateValue } from "src/utils/alternateValue";
import { detectEnvForApiCalls } from "src/utils/detectEnvForApiCalls";
import Register from "src/components/molecules/Registration/Registration";

const RegisterPage = () => {
  return (
    <Layout>
      <SEO title="O nas" />
      <BootsContainer>
        <Register />
      </BootsContainer>
    </Layout>
  );
};

export default RegisterPage;
