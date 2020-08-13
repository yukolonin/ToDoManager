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

function TaskList(){

    const{state, dispatch} = React.useContext(TaskListContext);

    const handleNewClickContext = () => {
        let newTask: Task = DefaultTask;
        newTask.id = JSON.stringify(Date.now());
        dispatch({
           type: 'ADD_OPEN',
            payload: newTask,
            }
        )
    }

    let taskListOut: Task[] = state.taskList.map((a) => (a))

    return (
        state.taskList.length !== 0 ? // Might be a nicer way to do the same
            <div className="task-list">
                <List>

                    <ListItem className='tasklist-header'>
                        <Typography className="tasklist-header-text" component='div'>
                            <Box fontWeight='fontWeightMedium' fontSize='20px'>
                                Привет, братишка
                            </Box>
                        </Typography>
                        <div className="add-button">
                            <Button variant='text' onClick={handleNewClickContext}>
                                <Typography variant='button'>
                                    Курлык
                                </Typography>
                            </Button>
                        </div>
                    </ListItem>

                    {InsertDates(taskListOut, state.selectedGroup).map((task: Task) => (
                        task.group === "DATE" ?
                            <DateItem date={DateConverter(task.date)} />
                        :
                            <TaskItem task={task} />
                    ))}

                </List>
            </div>

            :

            <div className="tasklist-empty">
                <div className="tasklist-empty-item">
                    <Typography className="tasklist-empty-header">
                        <Box fontWeight='fontWeightMedium' fontSize='18px'>
                            Сколько истребителей было?
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
            </div>
    )
}

export default TaskList