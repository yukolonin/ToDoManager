import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import Groups from './Groups'
import IconSwitch from "./IconSwitch";

function Sidebar() {

    return (
        <div className="sidebar">
            <List disablePadding dense>
                <ListItem button autoFocus>All groups</ListItem>
                {Object.values(Groups).map((value: Groups) => (
                    value == Groups.DATE ? <></> :
                        <ListItem key={value} button>
                            <ListItemIcon>
                                {IconSwitch(value)}
                            </ListItemIcon>
                            <div className="sidebar-text">
                                <ListItemText>{value}</ListItemText>
                            </div>
                        </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Sidebar;