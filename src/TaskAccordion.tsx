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
    taskList: Array<Task>,
    setMenuOn: any,
    setTaskList: any,
    setIsNew: any,
    setSideTask: any

}) {

    const handleEditClick = ( //TODO: Implement in TA body
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
                    <Typography>{prop.task.date}</Typography>
                    <Typography>{prop.task.group}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Button
                        onClick={(event: any) => {handleEditClick(event, prop.task)}}
                    >
                        Edit
                    </Button>
                </AccordionDetails>
            </Accordion>

            {/*{prop.menuOn && <SideMenu*/}
            {/*    isNew={false}*/}
            {/*    maintask={prop.task}*/}
            {/*    tl={prop.taskList}*/}
            {/*    setMenuOn={prop.setMenuOn}*/}
            {/*    setTaskList={prop.setTaskList}*/}
            {/*/>}*/}
        </div>
    )
}

export default TaskAccordion