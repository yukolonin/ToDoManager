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


function TaskList(prop: {group: Groups}){
    
    const [taskList, setTaskList] = React.useState<Array<Task>>([
        {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
        {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
        {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
        {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
        {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
    ]);
    const [menuOn, setMenuOn] = React.useState<boolean>(false);

    const handleNewClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) => {
        setMenuOn(true);
        // Would it work as I imagine?
        // return <SideMenu
        //     isNew={true}
        //     maintask={{date: '--/--/----', task: '', group: Groups.ВИЛКИ}}
        //     tl={taskList}
        //     setMenuOn={setMenuOn}
        //     setTaskList={setTaskList}
        // />

        // return <div>
        //     <Typography>Курлык</Typography>
        //     <Typography>Курлык</Typography>
        //     <Typography>Курлык</Typography>
        // </div>

        return <></>

    };

    // let taskListOut = taskList;
    // let tasklistout: Array<Task> = InsertDates(taskList, prop.group)
    // let tasklistout2: Array<Task> = InsertDates(taskList, prop.group)
    // let tasklistout: Array<Task> = InsertDates(prop.items, prop.group)

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
                {InsertDates(taskList, prop.group).map((task: Task) => (
                    task.group == "DATE" || task.group == "All" ?
                        <div>
                            <ListItem key={task.date}>
                                <ListItemText>{task.date}</ListItemText>
                            </ListItem>
                        </div>
                    :
                        <div>
                            <ListItem key={task.date}>
                                {/*<TaskAccordion*/}
                                {/*    task={task}*/}
                                {/*    menuOn={false}*/}
                                {/*    taskList={taskList}*/}
                                {/*    setMenuOn={setMenuOn}*/}
                                {/*    setTaskList={setTaskList}*/}
                                {/*/>*/}
                            </ListItem>
                        </div>
                ))}
            </List>
        </div>
    )
}

export default TaskList