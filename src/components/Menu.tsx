import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box } from '@mui/material';


const Menu = () => {
    return (
        <div style={{width:"100%"}}>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
            </Box>
        </div>
    );
};

export default Menu;