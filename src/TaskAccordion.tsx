import React from "react";

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Button} from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography'

import Task from "./Task";
import SideMenu from "./SideMenu";

// function TaskAccordion(prop: {task: Task}){
function TaskAccordion(prop: {
    task: Task,
    menuOn: boolean,
    taskList: Array<Task>,
    setMenuOn: any,
    setTaskList: any

}) {

    const handleEditClick = ( //TODO: Impement in TA body
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        task: Task
    ) => {
        prop.setMenuOn(true);
        // Would it work as I imagine?
        return <SideMenu
            isNew={false}
            maintask={task}
            tl={prop.taskList}
            setMenuOn={prop.setMenuOn}
            setTaskList={prop.setTaskList}
            // onOkClick={(
            //     event: React.MouseEvent<HTMLDivElement, MouseEvent>
            // ) =>
            //     handleOkClick(event, oldTask, newTask,false, tl)
            // }
            // onDiscardClick={(
            //     event: React.MouseEvent<HTMLDivElement, MouseEvent>
            // ) =>
            //     handleDiscardClick(event, oldTask)
            // }
        />
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
                    <Typography>{prop.task.date}</Typography>
                    <Typography>{prop.task.group}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button>Edit</Button>
                </AccordionDetails>
            </Accordion>
            {/*{menuOn && <SideMenu/>} PROPS, MENUON*/}
        </div>
    )
}

export default TaskAccordion