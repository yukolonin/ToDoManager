import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import Groups from './Groups'
import IconSwitch from "./IconSwitch";
import SidebarItem from "./SidebarItem";

function Sidebar() {

    const [selectedIndex, setSelectedIndex] = React.useState('All');

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: string,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <div className="sidebar">
            <List disablePadding dense>
                {Object.values(Groups).map((value: Groups) => (
                    value === Groups.DATE ? <></> :

                        // TODO(DONE): SidebarItem element
                        // Was a bad idea because setSelectedIndex for each item worked separately
                        // <SidebarItem group={value} />

                        <ListItem
                            key={value}
                            button
                            selected={selectedIndex === value}
                            onClick={(event) => handleListItemClick(event, value)}
                        >
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