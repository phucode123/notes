import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import theme from '../library/custom_theme';
import { ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';

function Header({ selectedTab, setSelectedTab }) {
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        console.log(newValue);
    };
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}> 
                        <Link to={'/addnote'}>
                            <Button variant="contained" color="primary">
                                Tạo mới
                            </Button>
                        </Link>
                    </Box>
                </Toolbar>
                <Tabs value={selectedTab} onChange={handleChange} centered>
                    <Tab label="Yêu thích" />
                    <Tab label="Tất cả" />
                    <Tab label="Đã xoá" />
                </Tabs>
            </AppBar>
        </ThemeProvider>
    );
}

export default Header;
