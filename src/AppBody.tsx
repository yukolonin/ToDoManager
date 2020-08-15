import React, {useEffect, useLayoutEffect, useState} from 'react';
import './App.css';


import Add from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import Fab from '@material-ui/core/Fab';

import Sidebar from './Sidebar';
import SideMenu from "./SideMenu";
import {TaskListContext, TaskListContextProvider} from "./TaskListContext";
import TaskList from "./TaskList";
import TaskSetter from "./TaskSetter";
import Groups from "./Groups";
import SidebarItem from "./SidebarItem";

import Typography from "@material-ui/core/Typography";
import InsertDates from "./InsertDates";
import Task from "./Task";
import DateItem from "./DateItem";
import DateConverter from "./DateConverter";
import TaskItem from "./TaskItem";
import AddFirstTask from "./AddFirstTask";
import DefaultTask from "./DefaultTask";
import GroupDrawer from "./GroupDrawer";

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

    const handleNewClickContext = () => {
        let newTask: Task = DefaultTask;
        newTask.id = JSON.stringify(Date.now());
        dispatch({
                type: 'ADD_OPEN',
                payload: newTask,
            }
        )
    }

    const handleDiscardClickContext = () => {
        dispatch({
            type: 'DISCARD',
        })}

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
        width > widthThreshold && height > heightThreshold ?
            <div className='main-frame'>

                <div className="sidebar">
                    <Sidebar />
                </div>


                {state.taskList.length !== 0 ? // Might be a nicer way to do the same
                    <div className="task-list">
                        <div className='tasklist-header'>
                            <Typography className="tasklist-header-text">
                                <Box fontWeight='fontWeightMedium' fontSize='20px'>
                                    Привет, братишка
                                </Box>
                            </Typography>
                            <div className="add-button">
                                <Button variant='text' onClick={handleNewClickContext}>
                                    <Typography variant='button'>
                                        Курлык
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                        <TaskList />
                    </div>
                :
                    <div className="tasklist-empty">
                        <AddFirstTask/>
                    </div>
                }

                {state.isMenuOn && <SideMenu />}
            </div>
        :
            <div>
                <GroupDrawer />
                <div className='task-list-mobile'>
                    <TaskList />
                </div>

                <Fab
                    className='add-button-mobile'
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    onClick={handleNewClickContext}
                    style={{position: 'fixed'}}
                >
                        <Add />
                </Fab>

                <Dialog
                    onClose={handleDiscardClickContext}
                    open={state.isMenuOn}
                >
                    <TaskSetter />
                </Dialog>

            </div>
    )
}

export default AppBody

{/*Debug print; insert right after Sidebar element*/}
{/*<Typography>{*/}
{/*    JSON.stringify([state.taskList.map((task) => ([*/}
{/*        task.task,*/}
{/*        task.checked,*/}
{/*        task.id*/}
{/*    ]))])*/}
{/*    // JSON.stringify(state.taskList)*/}
{/*}*/}
{/*</Typography>*/}

{/*Debug print; insert right after Sidebar element*/}
{/*<Typography>*/}
{/*    {JSON.stringify(state.sideTask)}*/}
{/*</Typography>*/}