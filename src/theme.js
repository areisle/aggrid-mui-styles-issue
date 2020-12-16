import {
    createGenerateClassName,
    createMuiTheme,
    CssBaseline,
    jssPreset,
    MuiThemeProvider,
    StylesProvider,
} from '@material-ui/core';
import { create } from 'jss';
import React from 'react';

const generateClassName = createGenerateClassName();

const jss = create({
    ...jssPreset(),
    insertionPoint: 'jss-insertion-point',
});

const theme = createMuiTheme({
    props: {
        MuiButton: {
            variant: 'outlined',
        },
    },
});

const ThemeProvider = ({ children }) => (
    <StylesProvider
        generateClassName={generateClassName}
        jss={jss}
    >
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
            {children}
        </MuiThemeProvider>
    </StylesProvider>
);

export {
    ThemeProvider,
};
