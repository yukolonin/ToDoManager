import React from "react";

import Task from "./Task";
import Groups from "./Groups";


let tomorrow: string = ''
    + (new Date().getDate() + 1)
    + '/'
    + (new Date().getMonth() + 1)
    + '/'
    + new Date().getFullYear()


// TODO: Add default date extracted from system date
let DefaultTask: Task = {
    date: tomorrow,
    task: '',
    group: Groups.ВИЛКИ,
    id: '31181734',
    checked: false,
}

export default DefaultTask