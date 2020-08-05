import React from "react";

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import {Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'

import Task from "./Task";


function TaskAccordion(prop: {
    task: Task,
    taskList: Array<Task>,
    setMenuOn: any,
    setTaskList: any,
    setIsNew: any,
    setSideTask: any
}) {

    const handleEditClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        task: Task
    ) => {
        prop.setMenuOn(true);
        prop.setSideTask(task);
        prop.setIsNew(false);
    };

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
                    <Typography variant='subtitle1' className='task-accordion-date'>{prop.task.date}</Typography>
                    <Typography variant='subtitle2' className='task-accordion-group'>{prop.task.group}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <Button
                            onClick={(event: any) => {handleEditClick(event, prop.task)}}
                        >
                            Edit
                        </Button>
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default TaskAccordion