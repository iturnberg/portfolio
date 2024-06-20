import React, { forwardRef } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';
import './header.css'

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
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1100,
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '5px',
        background: 'linear-gradient(to right, #6a1b9a, black)',
    },
}));

const ScrollLinkWithRef = forwardRef((props, ref) => (
    <ScrollLink {...props} ref={ref} />
));

const getLinkStyles = (isActive) => ({
    margin: '0 10px',
    cursor: 'pointer',
    color: isActive ? '#ff9800' : 'inherit',
    fontWeight: isActive ? 'bold' : 'normal',
    borderBottom: isActive ? '2px solid #ff9800' : 'none',
    transition: 'border-bottom 0.3s ease-in-out',
});

function Header() {
    return (
        <ThemeProvider theme={theme}>
            <GradientAppBar color="primary">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Ian Turnberg, Fullstack Developer
                    </Typography>
                    <Typography
                        variant="body1"
                        component={ScrollLinkWithRef}
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={-70}
                        sx={(theme) => getLinkStyles(theme.active)}
                        className="scroll-link"
                    >
                        About
                    </Typography>
                    <Typography
                        variant="body1"
                        component={ScrollLinkWithRef}
                        to="portfolio"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={-70}
                        sx={(theme) => getLinkStyles(theme.active)}
                        className="scroll-link"
                    >
                        Portfolio
                    </Typography>
                    <Typography
                        variant="body1"
                        component={ScrollLinkWithRef}
                        to="resume"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={-70}
                        sx={(theme) => getLinkStyles(theme.active)}
                        className="scroll-link"
                    >
                        Resume
                    </Typography>
                    <Typography
                        variant="body1"
                        component={ScrollLinkWithRef}
                        to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        activeClass="active"
                        offset={-70}
                        sx={(theme) => getLinkStyles(theme.active)}
                        className="scroll-link"
                    >
                        Contact
                    </Typography>
                </Toolbar>
            </GradientAppBar>
            <Toolbar /> {/* This empty Toolbar component adds padding to the top of the main content */}
        </ThemeProvider>
    );
}

export default Header;