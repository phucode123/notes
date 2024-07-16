import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import theme from '../library/custom_theme';
import { ThemeProvider } from '@mui/material/styles';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

function Header({ selectedTab, setSelectedTab }) {
    // const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                        {/* <TextField
                            label="Tìm kiếm"
                            variant="outlined"
                            size="small"
                            sx={{ backgroundColor: 'white', borderRadius: 1, marginRight: 2 }}
                        /> */}
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
