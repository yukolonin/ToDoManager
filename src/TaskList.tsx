import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TaskAccordion from './TaskAccordion'
import Task from "./Task";
import Groups from "./Groups";
import InsertDates from "./InsertDates";

function TaskList(prop: {items: Array<Task>, group: Groups}){

    let tasklistout: Array<Task> = InsertDates(prop.items, prop.group)

    return (
        <div className="task-list">
            <Typography display="inline" className="main-frame-header">Привет, братишка</Typography>
            <Button className="add-button">Курлык</Button>
            <List>
                {tasklistout.map((task: Task) => (
                    task.group == "DATE" || task.group == "All" ?
                        <div>
                            <ListItem key={task.date}>
                                <ListItemText>{task.date}</ListItemText>
                            </ListItem>
                        </div>
                    :
                        <div>
                            <ListItem key={task.date}>
                                <TaskAccordion task={task.task} date={task.date} group={task.group} />
                            </ListItem>
                        </div>
                ))}
            </List>
        </div>
    )
}

export default TaskList