import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


import Sidebar from './Sidebar'

function GroupDrawer() {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen)
    }

    return (
        <div>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                        Привет, братишка
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav>
                <Hidden smUp implementation="css">
                    <Drawer
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                    >
                        <Sidebar />
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    );
}

export default GroupDrawer;