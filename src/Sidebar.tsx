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

function Sidebar() {
    let tl: Array<Task> = [
        {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
        {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
        {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
        {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
        {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
    ]

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
                <TaskList group={selectedIndex}/>
            </div>

        </div>
    )
}

export default Sidebar;