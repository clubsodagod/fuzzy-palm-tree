'use client';
import { KoHo, Roboto, Vina_Sans, Bricolage_Grotesque } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const vinaSans = Vina_Sans({
    weight:['400'],
    subsets:['latin'],
    display:'swap',
})

const koHo = KoHo({
    weight:['200','300','400','500','600','700'],
    subsets:['latin'],
    display:'swap',
    style:['italic','normal']
})

const bricolageGrotesque = Bricolage_Grotesque({
    weight:['200','300','400','500','600','700', '800'],
    subsets:['latin'],
    display:'swap',
    style:['normal']
});

const theme = createTheme({
    typography: {
        fontFamily: bricolageGrotesque.style.fontFamily,
        h1:{
            color: "whitesmoke",
            fontFamily: vinaSans.style.fontFamily,
            fontSize:'6em',
            margin:0,
            lineHeight:1,
        },
        h2:{
            color: "whitesmoke",
            fontFamily: vinaSans.style.fontFamily,
            fontSize:'4em',
            margin:0,
            lineHeight:1,
        },
        h3:{
            color: "whitesmoke",
            fontFamily: vinaSans.style.fontFamily,
            fontSize:'3em',
            margin:0,
            lineHeight:1,
        },
    },
    palette:{
        primary:{
            main: grey[900],
        },
        secondary: {
            main: grey[50],
        }
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
        MuiPaper: {
            styleOverrides:{
                root:{
                    backgroundColor: "#000000"
                }
            }
        },
        MuiButton: {
            styleOverrides:{
                root:{
                    borderRadius: "25px",
                    fontFamily: koHo.style.fontFamily
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root:{
                    backgroundColor: "white",
                    height: "1.5px",
                    variants:[
                        {
                            props: { variant: 'middle'},
                            style: {
                                color: "white",
                                borderTopColor: "red"
                            }
                        }
                    ]
                }
            
            }
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: '25px'
                }
            }
        }
    },
});

export default theme;
