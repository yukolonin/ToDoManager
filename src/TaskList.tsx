import React from 'react';
import Box from '@material-ui/core/Box';
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


function TaskList(prop: {
    group: Groups,
    tl: Array<Task>,
    setTaskList: any,
    setMenuOn: any,
    setIsNew: any,
    setSideTask: any
}){

    const handleNewClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        prop.setMenuOn(true);
        prop.setIsNew(true);
        prop.setSideTask(DefaultTask);
    };

    let taskListOut = prop.tl.map((a) => (a))

    return (
        <div className="task-list">
            <List>
                <ListItem className='tasklist-header'>
                        <Typography className="tasklist-header-text" component='div'>
                            <Box fontWeight='fontWeightMedium' fontSize='20px'>
                            Привет, братишка
                            </Box>
                        </Typography>
                    <div className="add-button">
                        <Button variant='text' onClick={(event: any) => {handleNewClick(event)}}>
                            <Typography variant='button'>
                                <Box fontSize='14px'>
                                    Курлык
                                </Box>
                            </Typography>
                        </Button>
                    </div>
                </ListItem>

                {InsertDates(taskListOut, prop.group).map((task: Task) => (
                    task.group === "DATE" || task.group === "All" ?
                        <div>
                            <ListItem key={task.date}>
                                <ListItemText>{task.date}</ListItemText>
                            </ListItem>
                        </div>
                    :
                        <div>
                            <ListItem key={task.date}>
                                <TaskAccordion
                                    task={task}
                                    taskList={prop.tl}
                                    setMenuOn={prop.setMenuOn}
                                    setTaskList={prop.setTaskList}
                                    setIsNew={prop.setIsNew}
                                    setSideTask={prop.setSideTask}
                                />
                            </ListItem>
                        </div>
                ))}
            </List>

        </div>
    )
}

export default TaskList