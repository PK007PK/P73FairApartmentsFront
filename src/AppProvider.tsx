import React, { createContext, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/Theme';

export const AppContext = createContext({
    isMenuActive: false,
    toogleIsMenuActive: () => {},
    diseableMenu: () => {},
    search: "",
    setSearch: (s: string) => {},
    forceUpdate: () => {},
  });

export function AppProvider({ children }: {children: React.ReactNode}) {
    const [isMenuActive, setIsMenuActive] = useState(false);
    const toogleIsMenuActive = () => setIsMenuActive((prevValue) => !prevValue);
    const diseableMenu = () => setIsMenuActive(false);

    const [search, setSearch] = useState('');

    const [, updateState] = useState({});
    const forceUpdate = useCallback(() => updateState({}), []);

    return (
        <AppContext.Provider
            value={{
                isMenuActive,
                toogleIsMenuActive,
                diseableMenu,
                search,
                setSearch,
                forceUpdate,
            }}
        >
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </AppContext.Provider>
    );
}

export default AppContext;