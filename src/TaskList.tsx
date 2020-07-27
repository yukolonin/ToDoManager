import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import TaskAccordion from './TaskAccordion'
import Task from "./Task";
import Groups from "./Groups";
import InsertDates from "./InsertDates";
import SideMenu from "./SideMenu";


function TaskList(prop: {items: Array<Task>, group: Groups}){

    let tl: Array<Task> = [
        {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
        {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
        {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
        {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
        {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
    ]

    const [taskList, setTaskList] = React.useState<Array<Task>>([]);
    const [menuOn, setMenuOn] = React.useState<boolean>(false);

    const handleNewClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        task: Task
    ) => {
        setMenuOn(true);
        // Would it work as I imagine?
        return <SideMenu
            isNew={true}
            maintask={task}
            tl={taskList}
            onOkClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
            ) =>
                handleOkClick(event, task, task, true, tl)
            }
            onDiscardClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
            ) =>
                handleDiscardClick(event, task)
            }
        /> // Might need to edit props
    };

    const handleEditClick = ( //TODO: Refactor
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        oldTask: Task,
        newTask: Task
    ) => {
        setMenuOn(true);
        // Would it work as I imagine?
        return <SideMenu
            isNew={false}
            maintask={oldTask}
            tl={taskList}
            onOkClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
            ) =>
                handleOkClick(event, oldTask, newTask,false, tl)
            }
            onDiscardClick={(
                event: React.MouseEvent<HTMLDivElement, MouseEvent>
            ) =>
                handleDiscardClick(event, oldTask)
            }
        />
    };

    const handleOkClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        oldTask: Task,
        newTask: Task, // New task data
        isNew: boolean,
        taskList: Array<Task>
    ) => {
        if (isNew) {
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
        setTaskList(taskList);
        setMenuOn(false);
    };

    const handleDiscardClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        task: Task
    ) => {
        setMenuOn(false);
    };


    let tasklistout: Array<Task> = InsertDates(tl, prop.group)
    // let tasklistout: Array<Task> = InsertDates(prop.items, prop.group)

    return (
        <div className="task-list">
            <Typography display="inline" className="main-frame-header">Привет, братишка</Typography>
            <Button className="add-button">Курлык</Button>
            <List>
                {tasklistout.map((task: Task) => (
                    task.group == "DATE" || task.group == "All" ?
                        <div>
                            <ListItem key={task.date}>
                                <ListItemText>{task.date}</ListItemText>
                            </ListItem>
                        </div>
                    :
                        <div>
                            <ListItem key={task.date}>
                                <TaskAccordion
                                    task={task}
                                    menuOn={false}
                                    taskList={tl}
                                    // onNewClick={(
                                    //     event: React.MouseEvent<HTMLDivElement, MouseEvent>
                                    // ) =>
                                    //     handleNewClick(event, task)
                                    // }
                                    onEditClick={(
                                        event: React.MouseEvent<HTMLDivElement, MouseEvent>
                                    ) =>
                                        handleEditClick(event, task, task)
                                    }
                                    onOkClick={(
                                        event: React.MouseEvent<HTMLDivElement, MouseEvent>
                                    ) =>
                                        handleOkClick(event, task, task, false, tl)
                                    }
                                    onDiscardClick={(
                                        event: React.MouseEvent<HTMLDivElement, MouseEvent>
                                    ) =>
                                        handleDiscardClick(event, task)
                                    }
                                />

                                {/*<TaskAccordion task={task} />*/}

                                {/*<TaskAccordion task={task.task} date={task.date} group={task.group} />*/}
                            </ListItem>
                        </div>
                ))}
            </List>
        </div>
    )
}

export default TaskList