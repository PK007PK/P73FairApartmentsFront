import React from 'react';
import './src/styles/index.css';
import 'normalize.css';

import { AppProvider } from './src/AppProvider.tsx';

export function wrapRootElement({ element }) {
    return <AppProvider>{element}</AppProvider>;
}
