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


function TaskSetter() {

    const{state, dispatch} = React.useContext(TaskListContext);

    const handleOkClickContext = () => {
        dispatch({
            type: state.isNew ? 'ADD_TASK' : 'EDIT_TASK',
            payload: {
                date: localDate,
                task: localTask,
                group: localGroup,
                id: localId,
                checked: localChecked,
            }})}

    const handleDiscardClickContext = () => {
        dispatch({
            type: 'DISCARD',
        })}

    const [localDate, setDate] = React.useState<string>(state.sideTask.date);
    const [localTask, setTask] = React.useState<string>(state.sideTask.task);
    const [localGroup, setGroup] = React.useState<Groups>(state.sideTask.group);
    const localId: string = state.sideTask.id;
    const localChecked: boolean = state.sideTask.checked;

    const handleDateChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDate(event.target.value);
    };

    const handleTaskChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTask(event.target.value);
    };

    const handleGroupChange = (
        group: Groups
    ) => {
        setGroup(group);
    };

    useEffect(() => {
        setDate(state.sideTask.date);
        setTask(state.sideTask.task);
        setGroup(state.sideTask.group);
    }, [state.sideTask])

    return (
        <div className='sidemenu-item'>

            <Input className='sidemenu-task-setter'
                   id="task-description"
                   color='primary'
                   placeholder="Ну что ты, братишка?"
                   value={localTask}
                   onChange={handleTaskChange}
            />

            {/*Instead of DatePicker module for now */}
            <div>
                <Event color='secondary'/>
                <Input
                    id="task-date"
                    color='primary'
                    placeholder="--/--/----"
                    value={localDate}
                    onChange={handleDateChange}
                />
            </div>
            <div className='sidemenu-group-block'>
                <SelectGroup2
                    group={localGroup}
                    onChange={handleGroupChange}
                />
            </div>

            <div className='sidemenu-buttons'>
                <Button
                    onClick={handleDiscardClickContext}
                >
                    <Typography variant='button'>
                        Cancel
                    </Typography>
                </Button>

                <Button onClick={handleOkClickContext}>
                    <Typography variant='button'>
                        Ok
                    </Typography>
                </Button>
            </div>
        </div>
    )
}

export default TaskSetter