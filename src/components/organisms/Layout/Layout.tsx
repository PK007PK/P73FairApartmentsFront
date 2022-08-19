import React from 'react';

import { Footer } from 'src/components/atoms/Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

import CustomStyles from 'src/styles/CustomStyles';
import GlobalStyles from 'src/styles/GlobalStyles';
import Typography from 'src/styles/Typography';
import { CommonProps } from 'src/types/commonProps';

interface Props extends CommonProps {}

export const Layout: React.FunctionComponent<Props> = ({ children }): JSX.Element => (
    <>
        <GlobalStyles />
        <Typography />
        <CustomStyles />
        <Navbar />
        {children}
        <Footer />
    </>
);

