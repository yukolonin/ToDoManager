import React from "react";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import IconSwitch from "./IconSwitch";
import Groups from "./Groups";

function SidebarItem(prop: {group: Groups}) {
    return (
        <ListItem key={prop.group} button>
            <ListItemIcon>
                {IconSwitch(prop.group)}
            </ListItemIcon>
            <div className="sidebar-text">
                <ListItemText>{prop.group}</ListItemText>
            </div>
        </ListItem>
    )
}

export default SidebarItem