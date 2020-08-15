import React from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'

import AddFirstTask from "./AddFirstTask";
import DefaultTask from "./DefaultTask";
import Groups from "./Groups";
import InsertDates from "./InsertDates";
import TaskAccordion from './TaskAccordion'
import Task from "./Task";
import {TaskListContext} from "./TaskListContext";
import DateItem from "./DateItem";
import DateConverter from "./DateConverter";
import TaskItem from "./TaskItem";

function TaskList(){

    const{state, dispatch} = React.useContext(TaskListContext);

    let taskListOut: Task[] = state.taskList.map((a) => (a))

    return (
        <List className='task-list-list'>
            {InsertDates(taskListOut, state.selectedGroup).map((task: Task) => (
                task.group === "DATE" ?
                    <DateItem date={DateConverter(task.date)} />
                :
                    <TaskItem task={task} />
            ))}
        </List>

    )
}

export default TaskList