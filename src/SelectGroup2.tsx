import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import Task from "./Task";
import Groups from "./Groups";


export default function SelectGroup2(props: {
    group: Groups,
    onChange: (value: Groups) => void
}) {

    return (
        <div>
            <TextField
                select
                value={props.group}
                onChange={(event) => props.onChange(event.target.value as Groups)}
            >
                    {Object.values(Groups).map((value: Groups) => (
                        value === Groups.DATE || value === Groups.ALL ? <></> : // tight spot
                        <MenuItem value={value}>{value}</MenuItem>
                    ))}
            </TextField>
        </div>
    );
}