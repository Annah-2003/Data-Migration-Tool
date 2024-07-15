import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" style={{ top: 'auto', bottom: 0 }}>
            <Toolbar>
                <Typography variant="body1" component="div" style={{ flexGrow: 1 }}>
                    © 2024 Irene Gitau
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Footer;
