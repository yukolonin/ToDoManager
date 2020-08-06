import React from 'react';
import List from '@material-ui/core/List'

import Groups from './Groups'
import SidebarItem from "./SidebarItem";
import TaskList from "./TaskList";
import Task from "./Task";

import Typography from '@material-ui/core/Typography'
import {TaskListContext} from "./TaskListContext";



function Sidebar() {

    const{state, dispatch} = React.useContext(TaskListContext);

    const [selectedIndex, setSelectedIndex] = React.useState<Groups>(Groups.ALL);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: Groups,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <div className="sidebar">
                <List disablePadding dense>
                    {Object.values(Groups).map((value: Groups) => (
                        value === Groups.DATE ? <></> :
                            <SidebarItem
                            group={value}
                            selected={selectedIndex === value}
                            onClick={(
                                event: React.MouseEvent<HTMLDivElement, MouseEvent>
                            ) =>
                                handleListItemClick(event, value)}
                            />
                    ))}
                </List>
                {/*<Typography>{*/}
                {/*    JSON.stringify([state.isMenuOn, state.isNew, state.sideTask])*/}
                {/*}</Typography>*/}
            </div>
            <TaskList group={selectedIndex}/>
        </div>
    )
}

export default Sidebar;