import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar({items}:any) {
    return (
        <div className="sidebar">
            <List disablePadding dense>
                <ListItem button autoFocus>All groups</ListItem>
                {items.map(({name, label, Icon}:any) => (
                    <ListItem key={name} button>
                        <div className="sidebar-icon">
                            <Icon height="10px" width="10px" />
                        </div>
                        <div className="sidebar-text">
                            <ListItemText>{label}</ListItemText>
                        </div>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}

export default Sidebar;