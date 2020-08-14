import React, {useEffect, useLayoutEffect, useState} from 'react';
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


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function AppBody() {
    const{state, dispatch} = React.useContext(TaskListContext);

    const [width, height] = useWindowSize();

    // TODO: Change values to relevant
    const widthThreshold = 666;
    const heightThreshold = 777;

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(state.taskList))
    })


    // TODO: Roadmap:
    // TODO: Separate components for reuse: Sidebar-list, TaskList, SideMenu-dialogue
    // TODO: Create Mobile Layout skeleton (AppBar+Toolbar, Drawer, %pop-up dialog%)
    // TODO: Fill it with separated components

    return (
        width > widthThreshold && height > heightThreshold
            ?
            <div className='main-frame'>
                <Sidebar />
                <TaskList />
                {state.isMenuOn && <SideMenu />}
            </div>
            :
            <div>HERE BE MOBILE VIEW</div>
    )
}

export default AppBody