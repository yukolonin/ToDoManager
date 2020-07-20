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
    items.sort(function(a:any, b:any){
        let aa = a.date.split('/').reverse().join(),
            bb = b.date.split('/').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });

    // If list is not empty:
    return (
        <div className="task-list">
            <Typography display="inline" className="main-frame-header">Привет, братишка</Typography>
            <Button className="add-button">Курлык</Button>
            <List>
                {items.map(({date, tasks}:any) => (
                    <div>
                        <ListItem key={date}>
                            <ListItemText>{date}</ListItemText>
                        </ListItem>
                        {tasks.map(({task, group}:any) => (
                            <ListItem key={task} button>
                                    <TaskAccordion task={task} date={date} group={group} />
                            </ListItem>
                        ))}
                    </div>
                ))}
            </List>
        </div>
    )
}

export default TaskList