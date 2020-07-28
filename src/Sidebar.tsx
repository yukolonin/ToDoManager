import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

import Groups from './Groups'
import IconSwitch from "./IconSwitch";
import SidebarItem from "./SidebarItem";
import TaskList from "./TaskList";
import Task from "./Task";
import SideMenu from "./SideMenu";

function Sidebar(prop: {
    tl: Array<Task>,
    setTaskList: any,
    setMenuOn: any,
    setIsNew: any,
    setSideTask: any
}) {


    const [selectedIndex, setSelectedIndex] = React.useState<Groups>(Groups.ALL);

    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: Groups,
    ) => {
        setSelectedIndex(index);
    };

    return (
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
            </List>

            <div>
                {/*<TaskList items={tl} group={selectedIndex}/>*/}
                <TaskList
                    group={selectedIndex}
                    tl={prop.tl}
                    setTaskList={prop.setTaskList}
                    setMenuOn={prop.setMenuOn}
                    setIsNew={prop.setIsNew}
                    setSideTask={prop.setSideTask}
                />
            </div>

        </div>
    )
}

export default Sidebar;