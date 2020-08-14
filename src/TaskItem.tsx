import React from 'react';

import ListItem from '@material-ui/core/ListItem'
import TaskAccordion from "./TaskAccordion";
import Task from "./Task";

// TODO: probably worth rewriting to arrow notation
function TaskItem(props: {task: Task}) {
    return (
            <TaskAccordion task={props.task} active={true} />
    )
}

export default TaskItem