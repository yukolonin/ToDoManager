import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Task from "./Task";
import Groups from "./Groups";


export default function SelectGroup2() {

    return (
        <div>
            <FormControl>
                <InputLabel>Group</InputLabel>
                <Select>
                    {Object.values(Groups).map((value: Groups) => (
                        value == Groups.DATE || value == Groups.ALL ? <></> : // tight spot
                        <MenuItem value={value}>{value}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}