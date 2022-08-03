import React from 'react';
import { Footer } from 'components';
import { Navbar } from 'components';
import CustomStyles from 'styles/CustomStyles';
import GlobalStyles from 'styles/GlobalStyles';
import Typography from 'styles/Typography';
import { CommonProps } from 'types/commonProps';

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

