import React from "react";
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import IconSwitch from "./IconSwitch";
import Groups from "./Groups";
import Task from "./Task";
import DefaultTask from "./DefaultTask";
import {TaskListContext} from "./TaskListContext";

// TODO: Get rid of 'any' type specification
function SidebarItem(prop: {
    group: Groups,
    selected: boolean,
}) {

    const{state, dispatch} = React.useContext(TaskListContext);

    const handleListItemClickContext = () => {
        // Crutch
        let crutchTask: Task = DefaultTask;
        crutchTask.group = prop.group;
        dispatch ({
                type: 'CHANGE_GROUP',
                payload: crutchTask,
            }
        );

    }

    return (
        <ListItem
            key={prop.group}
            button
            selected={prop.selected}
            // onClick={prop.onClick}
            onClick={handleListItemClickContext}

        >
            <ListItemIcon>
                <IconSwitch
                    group={prop.group}
                    className={
                        prop.selected
                        ?
                        "sidebar-item-selected"
                        :
                        "sidebar-item-icon"
                    }
                />
            </ListItemIcon>
            <div className="sidebar-text">
                <ListItemText
                    className={
                        prop.selected
                        ?
                        "sidebar-item-selected"
                        :
                        "sidebar-item-usual"
                    }
                >
                    {prop.group}
                </ListItemText>
            </div>
        </ListItem>
    )
}

export default SidebarItem