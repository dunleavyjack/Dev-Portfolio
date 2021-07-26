import React from 'react';
import {
    Drawer as MUIDrawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

const Drawer = ({ isOpen }) => {
    return (
        <MUIDrawer open={isOpen} varient="temporary">
            <List>
                {
                    <List>
                        {['HELLO', 'PROJECTS', 'EXPERIENCE', 'CONTACT'].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        )}
                    </List>
                }
            </List>
        </MUIDrawer>
    );
};

export default Drawer;
