import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Task from "./Task";
import Groups from "./Groups";


export default function SelectGroup2(props: {
    onChange: (value: Groups) => void
}) {

    return (
        <div>
            <FormControl>
                <InputLabel>Group</InputLabel>
                <Select
                    onChange={(event) => props.onChange(event.target.value as Groups)}
                >
                    {Object.values(Groups).map((value: Groups) => (
                        value == Groups.DATE || value == Groups.ALL ? <></> : // tight spot
                        <option value={value}>{value}</option>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}