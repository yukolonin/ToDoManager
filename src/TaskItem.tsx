import React from 'react';

import ListItem from '@material-ui/core/ListItem'
import TaskAccordion from "./TaskAccordion";
import Task from "./Task";

// TODO: probably worth rewriting to arrow notation
function TaskItem(props: {task: Task}) {
    return (
        <ListItem key={props.task.date}>
            <TaskAccordion
                task={props.task}
                active={true}
            />
        </ListItem>
    )
}

export default TaskItem