import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
        primary: {
            main: '#232323',
        },
        secondary: {
            main: '#00B2BF',
        },
    },
    typography: {
        fontFamily: "Source Code Pro",
        
    }
});
theme = responsiveFontSizes(theme);

export default theme;