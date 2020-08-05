import React from "react";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import IconSwitch from "./IconSwitch";
import Groups from "./Groups";

// TODO: Get rid of 'any' type specification
function SidebarItem(prop: {group: Groups, selected: boolean, onClick: any}) {

    return (
        <ListItem
            key={prop.group}
            button
            selected={prop.selected}
            onClick={prop.onClick}
        >
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