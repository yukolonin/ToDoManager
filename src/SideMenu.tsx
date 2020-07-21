import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'

import TaskAccordion from './TaskAccordion'
import Task from "./Task";
// Calendar
// Drop list


function SideMenu(prop: {isNew: boolean, maintask: Task, tl: Array<Task>}) {
    return (
        <div className="side-menu">
            <Typography>Edit task</Typography>
            {/*text box*/}
            {/*calendar*/}
            {/*drop list*/}
            <Button>Cancel</Button>
            <Button>Ok</Button>

            {prop.isNew == true
                ? <></> :
                    <div>
                        <List>
                            <ListItem>
                                <div>
                                    <ListItemText>Similar tasks</ListItemText>
                                </div>
                            </ListItem>
                        {/* Similar tasks appear if menu is called by "Edit" button */}
                            {prop.tl.map((task: Task) => (
                                task.task.split(' ')[0] == prop.maintask.task.split(' ')[0]
                                    ?
                                        <TaskAccordion task={task.task} date={task.date} group={task.group}/>
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