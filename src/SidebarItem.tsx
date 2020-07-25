import React from "react";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import IconSwitch from "./IconSwitch";
import Groups from "./Groups";

function SidebarItem(prop: {group: Groups}) {

    const [selectedIndex, setSelectedIndex] = React.useState('All');

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: Groups,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <ListItem
            key={prop.group}
            button
            selected={selectedIndex === prop.group}
            onClick={(event) => handleListItemClick(event, prop.group)}
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