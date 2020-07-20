import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'
import TaskAccordion from './TaskAccordion'
// Calendar
// Drop list

function SideMenu({isNew, xdate, xtask, xgroup, tl}:any) {
    return (
        <div className="side-menu">
            <Typography>Edit task</Typography>
            {/*text box*/}
            {/*calendar*/}
            {/*drop list*/}
            <Button>Cancel</Button>
            <Button>Ok</Button>

            {isNew == true
                ?
                    <></>
                :
                    <div>
                        <List>
                            <ListItem>
                                <div>
                                    <ListItemText>Similar tasks</ListItemText>
                                </div>
                            </ListItem>
                        {/* Similar tasks appear if menu is called by "Edit" button */}
                            {tl.map(({date, task, group}:any) => (
                                task.split(' ')[0] == xtask.split(' ')[0]
                                    ?
                                        <TaskAccordion task={task} date={date} group={group}/>
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