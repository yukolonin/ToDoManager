import React, {useEffect} from 'react';
import './App.css';

import Sidebar from './Sidebar'
import SideMenu from "./SideMenu";
import {TaskListContext, TaskListContextProvider} from "./TaskListContext";
import TaskList from "./TaskList";

/* TODO:
* Remove TADead
* Remove SelectGroup, rename SelectGroup2 to SelectGroup
* Probably worth rewriting main frame using separate "scroll columns"
*
*
* */

function AppBody() {
    const{state, dispatch} = React.useContext(TaskListContext);

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(state.taskList))
    })

    return (
        <div className='main-frame'>
            <Sidebar />
            <TaskList />
            {state.isMenuOn && <SideMenu />}
        </div>
    )
}

export default AppBody