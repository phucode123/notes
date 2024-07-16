// src/theme.js
import { createTheme } from '@mui/material/styles';
import { green, blue, blueGrey, red } from '@mui/material/colors';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: green[700],
                    '&.MuiButton-root': {
                        position: 'relative',
                        overflow: 'hidden',
                    },
                    '&:hover': {
                        backgroundColor: green[300], // Màu nền khi hover

                    },
                    '&:focus::after': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: green[200], // Màu hiệu ứng ripple
                        opacity: 0.3,
                    },
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        outline: green[100], // Màu nền khi được chọn
                        color: blueGrey[900], // Màu chữ là đen


                    },
                    '&:hover': {
                        backgroundColor: green[50], // Màu nền khi hover
                        color: blueGrey[900], // Màu chữ là đen
                    },

                }, indicator: {
                    '& .MuiTab-selected .MuiTab-wrapper': {
                        backgroundColor: green[50], // Màu của tab indicator khi tab được chọn
                    },
                },
            },
        },

    },
});

export default theme;
