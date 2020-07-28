import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'

import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/TextField'
import TaskAccordion from './TaskAccordion'
import Task from "./Task";
import Groups from "./Groups";

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';


import SelectGroup from "./SelectGroup";
import SelectGroup2 from "./SelectGroup2";

function SideMenu(prop: {
    isNew: boolean,
    maintask: Task,
    tl: Array<Task>,
    setMenuOn: any,
    setTaskList: any
}) {

    // Seems like all good for the moment
    const handleOkClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        oldTask: Task,
        newTask: Task, // New task data
        isNew: boolean,
        taskList: Array<Task>
    ) => {
        if (isNew) { // TODO Refactor !!!
            taskList.push(newTask) // Might work wrong, dunno
        }
        else {
            // Updating the task by replacing it in array via splice
            for (let i = 0; i < taskList.length; i++) {
                if (taskList[i].task === oldTask.task) {
                    taskList.splice(i, 1, newTask) // Might work wrong, dunno
                }
            }
        }

        // Can I rewrite all the function to arrow-style setTaskList? Should I? :---)
        prop.setTaskList(taskList);
        prop.setMenuOn(false);
    };

    const handleDiscardClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        task: Task
    ) => {
        prop.setMenuOn(false);
    };



    return (
        <div className="side-menu">
            <Typography>Edit task</Typography>
            <TextField id="task-description" label="Task" />
            {/*Instead of DatePicker module for now */}
            <TextField id="task-date" label="--/--/----" />

            {/*<SelectGroup/>*/}
            <SelectGroup2/>

            {/*<br/><br/>*/}

            {/*<div>*/}
            {/*    <FormControl>*/}
            {/*        <InputLabel>Group</InputLabel>*/}
            {/*        <Select>*/}
            {/*            {Object.values(Groups).map((value: Groups) => (*/}
            {/*                value == Groups.DATE || value == Groups.ALL ? <></> :*/}
            {/*                    <MenuItem value={value}>{value}</MenuItem>*/}
            {/*            ))}*/}
            {/*        </Select>*/}
            {/*    </FormControl>*/}
            {/*</div>*/}

            <Button>Cancel</Button>
            <Button>Ok</Button>

            {/*{prop.isNew == true*/}
            {/*    ? <></> :*/}
            {/*        <div>*/}
            {/*            <List>*/}
            {/*                <ListItem>*/}
            {/*                    <div>*/}
            {/*                        <ListItemText>Similar tasks</ListItemText>*/}
            {/*                    </div>*/}
            {/*                </ListItem>*/}
            {/*             Similar tasks appear if menu is called by "Edit" button */}
            {/*            TODO: Create separate element <TaskAccordionDead/> for this place*/}
            {/*                {prop.tl.map((task: Task) => (*/}
            {/*                    task.task.split(' ')[0] == prop.maintask.task.split(' ')[0]*/}
            {/*                        ?*/}
            {/*                            <TaskAccordion task={task} />*/}
            {/*                        // <TaskAccordion task={task.task} date={task.date} group={task.group}/>*/}
            {/*                        :*/}
            {/*                            <></>*/}
            {/*                ))}*/}
            {/*            </List>*/}
            {/*        </div>*/}
            {/*}*/}
        </div>
    )
}
export default SideMenu