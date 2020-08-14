import React, {useEffect} from 'react';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import {Button} from '@material-ui/core'
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Event from '@material-ui/icons/Event'

import Groups from "./Groups";
import SelectGroup2 from "./SelectGroup2";
import Task from "./Task";
import TaskAccordion from "./TaskAccordion";
import {TaskListContext} from "./TaskListContext";
import TaskSetter from "./TaskSetter";

function SideMenu() {

    const{state, dispatch} = React.useContext(TaskListContext);


    return (
        <div className="side-menu">

            <Typography>
                <Box className="sidemenu-header-text" fontWeight='fontWeightMedium' fontSize='20px'>
                    Раз-раз-раз-раз-раз-раз
                </Box>
            </Typography>

            <TaskSetter />

                {state.isNew ? <></> :
                    <Typography>
                        <Box className="sidemenu-header-text" fontWeight='fontWeightMedium' fontSize='20px'>
                            Similar tasks
                        </Box>
                    </Typography>
                }
                {state.isNew ? <></> :
                    <div className='similar-tasks'>
                        <List>
                        {/* Similar tasks appear if menu is called by "Edit" button */}
                            {state.taskList.map((task: Task) => (
                                // Task is considered "similar" if its first word matches
                                task.task.split(' ')[0] === state.sideTask.task.split(' ')[0]
                                &&
                                task.id !== state.sideTask.id
                                    ?
                                        <TaskAccordion
                                            task={task}
                                            active={false}
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