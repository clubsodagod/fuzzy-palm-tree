'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#00000000', // Semi-transparent background
                    color: '#FFFFFF',             // Text color
                    backdropFilter: 'blur(10px)',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                '#navbar-drawer .MuiPaper-root': {
                    backgroundColor: '#00000080', // Semi-transparent background
                    color: '#FFFFFF',             // Text color
                    backdropFilter: 'blur(10px)', // Apply blur effect
                },
            },
        },
    },
});

export default theme;
