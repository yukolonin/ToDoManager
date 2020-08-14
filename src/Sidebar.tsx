import React from 'react';
import List from '@material-ui/core/List'

import Groups from './Groups'
import SidebarItem from "./SidebarItem";

import {TaskListContext} from "./TaskListContext";


function Sidebar() {

    const{state, dispatch} = React.useContext(TaskListContext);

    return (
            <List disablePadding dense>
                {Object.values(Groups).map((value: Groups) => (
                    value === Groups.DATE ? <></> :
                        <SidebarItem
                        group={value}
                        selected={state.selectedGroup === value}
                        />
                ))}
            </List>
    )
}

export default Sidebar;