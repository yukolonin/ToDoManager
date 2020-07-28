import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'

import TaskAccordion from './TaskAccordion'
import Task from "./Task";
import Groups from "./Groups";
import InsertDates from "./InsertDates";
import SideMenu from "./SideMenu";


function TaskList(prop: {
    group: Groups,
    tl: Array<Task>,
    setTaskList: any,
    setMenuOn: any,
    setIsNew: any,
    setSideTask: any
}){
    


    const handleNewClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        prop.setMenuOn(true);
    };

    let taskListOut = prop.tl.map((a) => (a))

    return (
        <div className="task-list">
            <Typography
                display="inline"
                className="main-frame-header"
            >
                Привет, братишка
            </Typography>

            <Button
                className="add-button"
                onClick={(event: any) => {handleNewClick(event)}}
            >
                Курлык
            </Button>

            <List>
                {InsertDates(taskListOut, prop.group).map((task: Task) => (
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
                                    taskList={prop.tl}
                                    setMenuOn={prop.setMenuOn}
                                    setTaskList={prop.setTaskList}
                                />
                            </ListItem>
                        </div>
                ))}
            </List>
            {/*{menuOn && <SideMenu*/}
            {/*    isNew={true}*/}
            {/*    maintask={{date: '', task: '', group: Groups.ВИЛКИ}}*/}
            {/*    tl={taskList}*/}
            {/*    setMenuOn={setMenuOn}*/}
            {/*    setTaskList={setTaskList}*/}
            {/*/>}*/}
        </div>
    )
}

export default TaskList