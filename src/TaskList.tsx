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

function TaskList({items}:any){

    return (
        <div className="task-list">
            <Typography display="inline" className="main-frame-header">Привет, братишка</Typography>
            <Button className="add-button">Курлык</Button>
            <List>
                {items.map(({date, task, group}:any) => (
                    group == "DATE" ?
                        <div>
                            <ListItem key={date}>
                                <ListItemText>{date}</ListItemText>
                            </ListItem>
                        </div>
                    :
                        <div>
                            <ListItem key={date}>
                                <TaskAccordion task={task} date={date} group={group} />
                            </ListItem>
                        </div>
                ))}
            </List>
        </div>
    )
}

export default TaskList