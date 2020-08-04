import React from 'react';
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import TextField from '@material-ui/core/TextField'

import DefaultTask from "./DefaultTask";
import Groups from "./Groups";
import SelectGroup2 from "./SelectGroup2";
import Task from "./Task";
import TaskAccordion from "./TaskAccordion";
import TaskAccordionDead from "./TaskAccordionDead";

function SideMenu(prop: {
    isNew: boolean,
    task: Task,
    tl: Array<Task>,
    setTaskList: any,
    setMenuOn: any,
    setIsNew: any,
    setSideTask: any
}) {

    const oldTask: Task = DefaultTask;
    Object.assign(oldTask, prop.task);

    let newTask: Task = DefaultTask;
    Object.assign(newTask, prop.task);

    const [date, setDate] = React.useState<string>(prop.task.date);
    const [task, setTask] = React.useState<string>(prop.task.task);
    const [group, setGroup] = React.useState(prop.task.group);

    const handleDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDate(event.target.value);
    };

    const handleTaskChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTask(event.target.value);
    };

    const handleGroupChange = (
        group: Groups
    ) => {
        setGroup(group);
    };

    const handleOkClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        oldTask: Task,
        newTask: Task, // Probably unnecessary
        isNew: boolean,
        taskList: Array<Task>
    ) => {

        newTask = {date: date, task: task, group: group}

        if (isNew) {
            prop.setTaskList([...taskList, newTask]) // Tight spot
        }
        else {
            // Updating the task by replacing it in array via splice
            let taskListOut = taskList.map((a) => (a))
            for (let i = 0; i < taskListOut.length; i++) {
                if (taskListOut[i].task === oldTask.task) {
                    taskListOut.splice(i, 1, newTask) // Might work wrong, dunno
                }
            }
            prop.setTaskList(taskListOut);
        }
        prop.setMenuOn(false);
    };

    const handleDiscardClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        prop.setMenuOn(false);
    };


    let tlOut = prop.tl.map((a) => (a))

    return (
        <div className="side-menu">
            <Typography>Edit task</Typography>

            <TextField
                id="task-description"
                label="Task"
                value={task}
                onChange={handleTaskChange}
            />

            {/*Instead of DatePicker module for now */}
            <TextField
                id="task-date"
                label="Date"
                value={date}
                onChange={handleDateChange}
            />

            <SelectGroup2
            onChange={handleGroupChange}
            />

            <Button
                onClick={(event: any) => {handleDiscardClick(event)}}
            >
                Cancel
            </Button>

            <Button
                onClick={(event: any) => {handleOkClick(
                    event,
                    oldTask,
                    prop.task,
                    prop.isNew,
                    prop.tl
                )}}
            >Ok
            </Button>

            {prop.isNew == true
                ? <></> :
                    <div>
                        <List>
                            <ListItem>
                                <div>
                                    <ListItemText>Similar tasks</ListItemText>
                                </div>
                            </ListItem>
                        {/* Similar tasks appear if menu is called by "Edit" button */}
                        {/*TODO: Get rid of TADead, replace it by 'inactive' property for TA*/}
                            {tlOut.map((task: Task) => (
                                // Task is considered "similar" if its first word matches
                                task.task.split(' ')[0] == prop.task.task.split(' ')[0]
                                &&
                                task.task !== prop.task.task
                                    ?
                                        <TaskAccordionDead
                                            task={task}
                                            taskList={prop.tl}
                                        />
                                    :
                                        <></>
                            ))}
                        </List>
                    </div>
            }
        </div>
    )
}
export default SideMenu