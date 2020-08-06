import React from 'react';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'
import Input from '@material-ui/core/Input';
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
import {TaskListContext} from "./TaskListContext";

function SideMenu(prop: {
    // isNew: boolean,
    // task: Task,
    // tl: Array<Task>,
    // setTaskList: any,
    // setMenuOn: any,
    // setIsNew: any,
    // setSideTask: any
}) {

    const{state, dispatch} = React.useContext(TaskListContext);

    const handleOkClickContext = () => {
        // TODO: Add EDIT fork!
        dispatch({
                type: 'ADD_TASK',
                payload: {date: localDate, task: localTask, group: localGroup},
            }
        )
    }

    const handleDiscardClickContext = () => {
        dispatch({
                type: 'DISCARD',
            }
        )
    }

    // const oldTask: Task = DefaultTask;
    // Object.assign(oldTask, prop.task);
    //
    // let newTask: Task = DefaultTask;
    // Object.assign(newTask, prop.task);
    //



    // const [localDate, setDate] = React.useState<string>(prop.task.date);
    // const [localTask, setTask] = React.useState<string>(prop.task.task);
    // const [localGroup, setGroup] = React.useState(prop.task.group);
    const [localDate, setDate] = React.useState<string>(state.sideTask.date);
    const [localTask, setTask] = React.useState<string>(state.sideTask.task);
    const [localGroup, setGroup] = React.useState(state.sideTask.group);




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
    //
    // const handleOkClick = (
    //     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    //     oldTask: Task,
    //     newTask: Task, // Probably unnecessary
    //     isNew: boolean,
    //     taskList: Array<Task>
    // ) => {
    //
    //     newTask = {date: date, task: task, group: group}
    //
    //     if (isNew) {
    //         prop.setTaskList([...taskList, newTask]) // Tight spot
    //     }
    //     else {
    //         // Updating the task by replacing it in array via splice
    //         let taskListOut = taskList.map((a) => (a))
    //         for (let i = 0; i < taskListOut.length; i++) {
    //             if (taskListOut[i].task === oldTask.task) {
    //                 taskListOut.splice(i, 1, newTask) // Might work wrong, dunno
    //             }
    //         }
    //         prop.setTaskList(taskListOut);
    //     }
    //     prop.setMenuOn(false);
    // };
    //
    // const handleDiscardClick = (
    //     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    // ) => {
    //     prop.setMenuOn(false);
    // };
    //
    //
    // let tlOut = prop.tl.map((a) => (a))

    return (
        <div className="side-menu">
            <div className='sidemenu-item'>
                <Typography className="sidemenu-header-text">
                    <Box fontWeight='fontWeightMedium' fontSize='20px'>
                        Раз-раз-раз-раз-раз-раз
                    </Box>
                </Typography>

                <Input className='sidemenu-task-setter'
                    id="task-description"
                    color='primary'
                    placeholder="Ну что ты, братишка?"
                    value={localTask}
                    onChange={handleTaskChange}
                />

                {/*Instead of DatePicker module for now */}
                <Input
                    id="task-date"
                    color='primary'
                    placeholder="--/--/----"
                    value={localDate}
                    onChange={handleDateChange}
                />
                <div className='sidemenu-group-block'>
                    <SelectGroup2
                    // TODO: add default group as with task and date
                    onChange={handleGroupChange}
                    />
                </div>

                <div className='sidemenu-buttons'>
                    <Button
                        // onClick={(event: any) => {handleDiscardClick(event)}}
                        onClick={handleDiscardClickContext}
                    >
                        <Typography variant='button'>
                            Cancel
                        </Typography>
                    </Button>

                    <Button
                        // onClick={(event: any) => {handleOkClick(
                        //     event,
                        //     oldTask,
                        //     prop.task,
                        //     prop.isNew,
                        //     prop.tl
                        // )}}
                        onClick={handleOkClickContext}
                    >
                        <Typography variant='button'>
                            Ok
                        </Typography>
                    </Button>
                </div>

                {/*{prop.isNew*/}
                {/*    ? <></> :*/}
                {/*        <div>*/}
                {/*            <List>*/}
                {/*                <ListItem>*/}
                {/*                    <div>*/}
                {/*                        <ListItemText>Similar tasks</ListItemText>*/}
                {/*                    </div>*/}
                {/*                </ListItem>*/}
                {/*             Similar tasks appear if menu is called by "Edit" button */}
                {/*            TODO: Get rid of TADead, replace it by 'inactive' property for TA*/}
                {/*                {tlOut.map((task: Task) => (*/}
                {/*                    // Task is considered "similar" if its first word matches*/}
                {/*                    task.task.split(' ')[0] === prop.task.task.split(' ')[0]*/}
                {/*                    &&*/}
                {/*                    task.task !== prop.task.task*/}
                {/*                        ?*/}
                {/*                            <TaskAccordionDead*/}
                {/*                                task={task}*/}
                {/*                                taskList={prop.tl}*/}
                {/*                            />*/}
                {/*                        :*/}
                {/*                            <></>*/}
                {/*                ))}*/}
                {/*            </List>*/}
                {/*        </div>*/}
                {/*}*/}
            </div>
        </div>
    )
}
export default SideMenu