import React from "react";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'

import Task from "./Task";
import SideMenu from "./SideMenu";


function TaskAccordionDead(prop: {
    task: Task,
    taskList: Array<Task>,
}) {
    return (
        <div className="task-accordion">
            <Accordion>
                <AccordionSummary
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <Checkbox/>
                    <Typography>{prop.task.task}</Typography>
                    <Typography>{prop.task.date}</Typography>
                    <Typography>{prop.task.group}</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    )
}

export default TaskAccordionDead