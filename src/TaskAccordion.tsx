import React from "react";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'

function TaskAccordion({task, date, group}:any){
    return (
        <div className="task-accordion">
            <Accordion>
                <AccordionSummary
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <Checkbox/>
                    <Typography>{task}</Typography>
                    <Typography>{date}</Typography>
                    <Typography>{group}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button>Edit</Button>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default TaskAccordion