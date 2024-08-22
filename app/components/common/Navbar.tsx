'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { navItems } from '@/library/const';
import Link from 'next/link';
import { color } from 'framer-motion';




const drawerWidth = 240;

export default function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, i) => (
                    <div key={`${item.label} drawer ${i}`}>
                        <ListItem >
                            <ListItemButton sx={{ textAlign: 'left' }} href={item.path}>
                                <ListItemText primary={item.label} />
                            </ListItemButton>
                        </ListItem>
                        {
                            item.children &&
                            <>
                                {
                                    item.children.map((child) => (
                                    <ListItem key={`${child.label} child item`} disablePadding>
                                        <ListItemButton sx={{ textAlign: 'left', paddingLeft: '10vw' }} href={child.path}>
                                            <ListItemText primary={child.label} />
                                        </ListItemButton>
                                    </ListItem>                                        
                                    ))
                                }
                            </>
                        }                    
                    </div>
                ))}
            </List>
        </Box>
    );

   

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                        <Button
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block', color: 'white' } }} 
                            href={'/'}
                        >
                            <h6>
                                MUI
                            </h6>
                            
                        </Button>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                                <Button key={item.label} sx={{ color: '#fff' }} href={item.path}>
                                    {item.label}
                                </Button>

                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                    <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                        {drawer}
                    </Drawer>
            </nav>
        </Box>
    );
}