import React from 'react';
import List from '@material-ui/core/List'

import Groups from './Groups'
import SidebarItem from "./SidebarItem";
import TaskList from "./TaskList";
import Task from "./Task";

import Typography from '@material-ui/core/Typography'
import {TaskListContext} from "./TaskListContext";



function Sidebar(prop: {
    // tl: Array<Task>,
    // setTaskList: any,
    // setMenuOn: any,
    // setIsNew: any,
    // setSideTask: any
}) {


    const{state, dispatch} = React.useContext(TaskListContext);


    const [selectedIndex, setSelectedIndex] = React.useState<Groups>(Groups.ALL);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: Groups,
    ) => {
        setSelectedIndex(index);
    };

    return (
        <div>
            <div className="sidebar">
                <List disablePadding dense>
                    {Object.values(Groups).map((value: Groups) => (
                        value === Groups.DATE ? <></> :
                            <SidebarItem
                            group={value}
                            selected={selectedIndex === value}
                            onClick={(
                                event: React.MouseEvent<HTMLDivElement, MouseEvent>
                            ) =>
                                handleListItemClick(event, value)
                            }
                            />
                    ))}

                    // OTLADOCHNY PRINT
                    <Typography>{JSON.stringify(state)}</Typography>


                </List>
            </div>
            <TaskList
                group={selectedIndex}
                // tl={prop.tl}
                // setTaskList={prop.setTaskList}
                // setMenuOn={prop.setMenuOn}
                // setIsNew={prop.setIsNew}
                // setSideTask={prop.setSideTask}
            />
        </div>
    )
}

export default Sidebar;