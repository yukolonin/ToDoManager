import React from 'react';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {Button} from '@material-ui/core'
import TaskAccordion from './TaskAccordion'
// Calendar
// Drop list

function SideMenu({isNew, task, date, group}:any) {
    return (
        <div className="side-menu">
            <Typography></Typography>
            {/*text box*/}
            {/*calendar*/}
            {/*drop list*/}
            <Button></Button>
            <Button></Button>

            {isNew == true ? <></> :
                <List>
                    <ListItem>
                        <ListItemText>Similar tasks</ListItemText>
                    </ListItem>
                    {/*    map task accordions */}
                </List>
            }
        </div>
    )
}