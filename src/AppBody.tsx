import React, {useEffect} from 'react';
import './App.css';

import DefaultTask from "./DefaultTask";
import Groups from './Groups'
import Sidebar from './Sidebar'
import SideMenu from "./SideMenu";
import Task from './Task'
import {TaskListContext, TaskListContextProvider} from "./TaskListContext";
import TaskList from "./TaskList";

/* TODO:
* Remove TADead
* Remove SelectGroup, rename SelectGroup2 to SelectGroup
*
*
* */

function AppBody() {

    const{state, dispatch} = React.useContext(TaskListContext);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(state.taskList))
    })

    return (
                <div>
                    <Sidebar/>
                    <TaskList/>
                    {state.isMenuOn && <SideMenu/>}
                </div>
    )
}

export default AppBody