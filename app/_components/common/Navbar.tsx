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
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavItem } from '@/app/_library/types/common';
import { navItems } from '@/app/_library/const/nav';
import { MotionDiv } from './framer/MotionDiv';
import { useAppContext } from '@/app/_context/AppContext';
import { usePathname } from 'next/navigation';
import slugify from 'slugify';





export default function DrawerAppBar() {
    const pathName = usePathname();
    const Pathname = (index: number) => usePathname().split('/')[index];
    const { screen: { currentBreakpoint } } = useAppContext();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [childPaths, setChildPaths] = React.useState<NavItem | null>();
    console.log(Pathname(1));


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawerWidth = (['lg', 'xl', '2xl']).includes(currentBreakpoint) ? 400 : 240;
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', color: 'whitesmoke' }} id="navbar-drawer">
            <MotionDiv
                className='flex justify-center items-center py-3'
            >
                <Typography variant="h5" sx={{ my: 2 }}>
                    Maliek Davis
                </Typography>
            </MotionDiv>

            <Divider />
            <List>
                {navItems.map((item, i) => (
                    <div key={`${item.label} drawer ${i}`}>
                        <ListItem >
                            <ListItemButton sx={{ textAlign: 'left' }} href={item.path}>
                                <Typography variant='h6'  data-content={item.label.toUpperCase()}
                                        className={`${`${slugify(item.label)}` == Pathname(1) || item.label.toUpperCase() == "I'm A Programmer".toUpperCase() && Pathname(1) === 'im-a-programmer' || `${slugify(item.label)}` === 'home' && pathName == '/' ? 'current-path' : null}`}>
                                    
                                    {item.label.toUpperCase()}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        {
                            item.children &&
                            <>
                                {
                                    item.children.map((child) => (
                                        <ListItem key={`${child.label} child item`} disablePadding>
                                            <ListItemButton href={child.path} sx={{ textAlign: 'left', paddingLeft: '10vw', color: 'whitesmoke' }}>
                                                <Typography variant='subtitle1' data-content={child.label.toUpperCase()}
                                        className={`${`${slugify(child.label)}` == Pathname(1) || child.label.toUpperCase() == "I'm A Programmer".toUpperCase() && Pathname(1) === 'im-a-programmer' || `${slugify(child.label)}` === 'home' && pathName == '/' ? 'current-path' : null}`}>
                                                    {child.label.toUpperCase()}
                                                </Typography>
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

    function handleClick(child: NavItem) {
        if (childPaths) {
            setChildPaths(null);
        } else {
            setChildPaths(child)
        }
    }
    let highlight: string = '';
    let highlightSub: string = '';
    return (
        <Box sx={{ display: 'flex', position: 'relative', width: '100%' }}>
            <CssBaseline />
            {

                childPaths?.children && childPaths.children.length > 0 &&
                <AppBar component="nav" sx={{
                    marginTop: '8vh',
                }}>
                    <Toolbar>
                        <Box sx={{ display: { xs: 'none', lg: 'flex' }, }}
                            className={`justify-center w-full gap-[3vw]`}
                        >

                            <Button
                                sx={{ display: { xs: 'none', lg: 'block', color: 'white' } }}
                                href={childPaths.path}
                            >
                            <p data-content={childPaths.label}
                                className={`${`${slugify(childPaths.label)}` == Pathname(1) || childPaths.label.toUpperCase() == "I'm A Programmer".toUpperCase() && Pathname(1) === 'im-a-programmer' ? 'current-path' : null}`}
                            >
                                {childPaths.label}
                            </p>
                            </Button>
                            {

                                childPaths.children.map((item,) => {


                               

                                    return (
                                        <Button
                                            key={item.label}
                                            sx={{ display: { xs: 'none', lg: 'block', color: 'white' } }}
                                            href={item.path}
                                        >

                                            <p data-content={item.label.toUpperCase()}
                                                className={`${`${slugify(item.label)}` == Pathname(1) || item.label.toUpperCase() == "I'm A Programmer".toUpperCase() && Pathname(1) === 'im-a-programmer' || `${slugify(item.label)}` === 'home' && pathName == '/' ? 'current-path' : null}`}
                                            >
                                                {item.label.toUpperCase()}
                                            </p>

                                        </Button>
                                    )
                                })
                            }
                        </Box>


                    </Toolbar>
                </AppBar>
            }
            <AppBar component="nav" className={`py-2`}>
                <Toolbar
                    className={`items-center`}
                >
                    <Box
                        sx={{ flexGrow: 1, display: { xs: 'block', lg: 'block', color: 'white' } }}
                    >
                        <Typography component='div' variant='h4'
                            className='cursor-pointer'
                            onClick={() => { handleClick({ label: "home", path: "/" }) }}
                        >
                            Maliek Davis
                        </Typography>
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ ml: 'auto', display: { lg: 'none' }, border: '2px solid white', borderRadius: '7.5px', }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                        {navItems.map((item) => {

                            if (`/${slugify(item.label)}` == Pathname(0) || slugify(item.label) == 'Home' && pathName == '/') {
                                highlight = 'current-path'
                            }
                            console.log(`${slugify(item.label)}` == Pathname(1));


                            return (
                                <Button key={item.label} sx={{ color: '#fff' }} href={!item.children ? item.path : ''}
                                    onClick={() => { handleClick(item) }}
                                >
                                    <p data-content={item.label.toUpperCase()}
                                        className={`${`${slugify(item.label)}` == Pathname(1) || item.label.toUpperCase() == "I'm A Programmer".toUpperCase() && Pathname(1) === 'im-a-programmer' || `${slugify(item.label)}` === 'home' && pathName == '/' ? 'current-path' : null}`}
                                    >
                                        {item.label}
                                    </p>

                                </Button>

                            )
                        })}
                    </Box>
                </Toolbar>
            </AppBar>

            <nav>
                <Drawer id="navbar-drawer"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}