import React from 'react';
import github from '../images/github.png';
import {
    Drawer as MUIDrawer,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    drawer: {
        width: '800px',
    },
});

const drawerLinks = [
    {
        name: 'HELLO',
        link: '/',
    },
    {
        name: 'PROJECTS',
        link: '/projects',
    },
    {
        name: 'WORK',
        link: '/experience',
    },
    // {
    //     name: 'WRITING',
    //     link: '/writing',
    // },
    {
        name: 'ABOUT',
        link: '/contact',
    },
];

const toggleActive = (page) => {
    return window.location.pathname === page ? 'active' : '';
};

const drawerItems = drawerLinks.map(({ link, name }, index) => {
    return (
        <ListItem key={index}>
            <a href={link} className={`drawer-links ${toggleActive(link)}`}>
                <ListItemText primary={name} disableTypography={true} />
            </a>
        </ListItem>
    );
});

const Drawer = ({ isOpen, toggleDrawer }) => {
    const classes = useStyles();
    return (
        <div onClick={() => toggleDrawer()}>
            <MUIDrawer
                open={isOpen}
                onClose={true}
                varient="temporary"
                className={classes.drawer}
            >
                <div className="center-drawer">
                    <div className="github-drawer-container">
                        <a href="https://github.com/dunleavyjack">
                            <img
                                src={github}
                                alt="Github Link Icon"
                                height={40}
                                width={40}
                            />
                        </a>
                    </div>
                    <List>
                        <List>{drawerItems}</List>
                    </List>
                </div>
            </MUIDrawer>
        </div>
    );
};

export default Drawer;
