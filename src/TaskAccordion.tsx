import React from "react";

import Accordion from '@material-ui/core/Accordion';
import AccordionActions from '@material-ui/core/AccordionActions';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography'

import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import Task from "./Task";
import {TaskListContext} from "./TaskListContext";


function TaskAccordion(prop: {
    task: Task,
}) {
    
    const{state, dispatch} = React.useContext(TaskListContext);

    const handleEditClickContext = () => {
        dispatch({
            type: 'EDIT_OPEN',
            payload: prop.task
            }
        )
    }

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
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox
                            className='checkbox'
                            icon={<CircleUnchecked />}
                            checkedIcon={<CircleCheckedFilled />}
                            onChange={handleCheck}
                        />}
                        label={checked ? <s>{prop.task.task}</s> : prop.task.task}
                    />
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
                        <AccordionActions>
                            <Button
                                onClick={handleEditClickContext}
                            >
                                <Typography variant='button'>
                                    Edit
                                </Typography>
                            </Button>
                        </AccordionActions>
            </Accordion>
        </div>
    )
}

export default TaskAccordion