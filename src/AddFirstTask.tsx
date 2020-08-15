import React from 'react';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'

import DefaultTask from "./DefaultTask";
import Groups from "./Groups";
import InsertDates from "./InsertDates";
import TaskAccordion from './TaskAccordion'
import Task from "./Task";
import {TaskListContext} from "./TaskListContext";
import DateItem from "./DateItem";
import DateConverter from "./DateConverter";
import TaskItem from "./TaskItem";

function AddFirstTask() {

    const {state, dispatch} = React.useContext(TaskListContext);

    const handleNewClickContext = () => {
        let newTask: Task = DefaultTask;
        newTask.id = JSON.stringify(Date.now());
        dispatch({
                type: 'ADD_OPEN',
                payload: newTask,
            }
        )
    }

    return (
        <div className="tasklist-empty-item">
            <Typography className="tasklist-empty-header">
                <Box fontWeight='fontWeightMedium' fontSize='18px'>
                    Сколько истребителей  было?
                </Box>
            </Typography>
            <Typography className="tasklist-empty-text" color='primary'>
                <Box fontWeight='fontWeightMedium' fontSize='14px'>
                    БУДЬТЕ Ж ВЫ ЛЮДЬМИ
                </Box>
            </Typography>
            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={handleNewClickContext}
            >
                <AddCircleRoundedIcon />
            </IconButton>
        </div>
    )

}

export default AddFirstTask