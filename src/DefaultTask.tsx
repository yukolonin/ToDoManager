import React from "react";

import Task from "./Task";
import Groups from "./Groups";


let id = JSON.stringify(new Date().getUTCMilliseconds())
// TODO: Add default date extracted from system date
let DefaultTask: Task = {
    date: '04/20/1986',
    task: '',
    group: Groups.ВИЛКИ,
    id: '31181734',
    checked: false,
}

export default DefaultTask