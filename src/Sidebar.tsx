import React from 'react';
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'

import DefaultTask from "./DefaultTask";
import Groups from './Groups'
import SidebarItem from "./SidebarItem";
import Task from "./Task";
import TaskList from "./TaskList";
import {TaskListContext} from "./TaskListContext";


function Sidebar() {

    const{state, dispatch} = React.useContext(TaskListContext);

    return (
        <div>
            <div className="sidebar">
                <List disablePadding dense>
                    {Object.values(Groups).map((
                        value: Groups
                    ) => (
                        value === Groups.DATE ? <></> :
                            <SidebarItem
                            group={value}
                            selected={state.selectedGroup === value}
                            />
                    ))}
                </List>
                {/*Debug print*/}
                {/*<Typography>{*/}
                {/*    JSON.stringify([state.taskList.map((task) => ([*/}
                {/*        task.task,*/}
                {/*        // task.checked,*/}
                {/*        task.id*/}
                {/*    ]))])*/}
                {/*    // JSON.stringify(state.taskList)*/}
                {/*}*/}
                {/*</Typography>*/}
            </div>
        </div>
    )
}

export default Sidebar;