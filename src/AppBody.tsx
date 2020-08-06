import React, {useEffect} from 'react';
import './App.css';

import DefaultTask from "./DefaultTask";
import Groups from './Groups'
import Sidebar from './Sidebar'
import SideMenu from "./SideMenu";
import Task from './Task'
import {TaskListContext, TaskListContextProvider} from "./TaskListContext";

//-----------------
let tl: Array<Task> = [
    {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
    {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
    {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
    {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
    {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
]
//-----------------


function AppBody() {


    const{state, dispatch} = React.useContext(TaskListContext);


    // // One of two strings below on choice determine empty start or some ready data
    // const [taskList, setTaskList] = React.useState<Array<Task>>(
    //     // JSON.parse(localStorage.getItem('taskList') || '[]')
    //     JSON.parse(localStorage.getItem('taskList') || JSON.stringify(tl))
    // );

    // useEffect(() => {
    //     // localStorage.setItem('taskList', JSON.stringify(taskList))
    // })

    // const [menuOn, setMenuOn] = React.useState<boolean>(false);
    // const[isNew, setIsNew] = React.useState<boolean>(true);
    // const [sideTask, setSideTask] = React.useState<Task>(DefaultTask)

    return (
                <div>
                    <Sidebar/>
                    {state.isMenuOn && <SideMenu/>}
                </div>
    )
}

export default AppBody