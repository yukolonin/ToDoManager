import React from "react";

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'

import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

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

    const [checked, setChecked] = React.useState<boolean>(false);
    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {setChecked(!checked)};

    return (
        <div className="task-accordion">
            <Accordion>
                <AccordionSummary
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                >
                    <Checkbox
                        className='checkbox'
                        icon={<CircleUnchecked />}
                        checkedIcon={<CircleCheckedFilled />}
                        // color={'primary'}
                        // color={checked === true ? 'primary' : 'secondary'} // Does not work
                        onChange={handleCheck}
                    />
                    <Typography>{checked ? <s>{prop.task.task}</s> : prop.task.task} </Typography>
                    <Typography variant='subtitle1' className='task-accordion-date'>
                        <Box>
                            {prop.task.date}
                        </Box>
                    </Typography>
                    <Typography variant='subtitle2' className='task-accordion-group'>
                        <Box>
                            {prop.task.group}
                        </Box>
                    </Typography>
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