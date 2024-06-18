import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000', // black
        },
        secondary: {
            main: '#6a1b9a', // purple
        },
        warning: {
            main: '#ff9800', // orange
        },
    },
});

const GradientAppBar = styled(AppBar)(({ theme }) => ({
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '5px', // Adjust the height of the border
        background: 'linear-gradient(to right, #6a1b9a, black)',
    },
}));

function Header() {
    const currentPage = useLocation().pathname;

    return (
        <ThemeProvider theme={theme}>
            <GradientAppBar position="static" color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Ian Turnberg
                    </Typography>
                    <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
                        Fullstack Developer
                    </Typography>
                    <Tabs value={currentPage} textColor="inherit" indicatorColor="secondary">
                        <Tab label="Home" value="/" component={Link} to="/" />
                        <Tab label="Portfolio" value="/portfolio" component={Link} to="/portfolio" />
                        <Tab label="Contact" value="/contact" component={Link} to="/contact" />
                        <Tab label="Resume" value="/resume" component={Link} to="/resume" />
                    </Tabs>
                </Toolbar>
            </GradientAppBar>
        </ThemeProvider>
    );
}

export default Header;