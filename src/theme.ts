import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {
            main: '#FFD700',
        },
        secondary: {
            main: '#4f8e3e',
        },
    },
    typography: {
        fontFamily: "Source Code Pro",
    }
});
theme = responsiveFontSizes(theme);

export default theme;