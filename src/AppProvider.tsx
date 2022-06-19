import React, { createContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';

export const AppContext = createContext({
    isMenuActive: false,
    toogleIsMenuActive: () => {},
    diseableMenu: () => {},
  });

export function AppProvider({ children }: {children: React.ReactNode}) {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toogleIsMenuActive = () => setIsMenuActive((prevValue) => !prevValue);
    const diseableMenu = () => setIsMenuActive(false);

    return (
        <AppContext.Provider
            value={{
                isMenuActive,
                toogleIsMenuActive,
                diseableMenu,
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default AppContext;