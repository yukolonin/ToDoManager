import React from 'react';

import Groups from './Groups'
import Task from './Task'
import SortByDate from "./SortByDate";

function InsertDates(tasklist: Array<Task>) {
    SortByDate(tasklist)

    let dates: Array<number> = []
    let currentDate: string = '0'

    for(let i: number = 0; i < tasklist.length; i++){
        if (currentDate != tasklist[i].date) {
            currentDate = tasklist[i].date
            dates.push(i)
        }
    } // Now "dates" represent places where date should be inserted
    dates.reverse() // Reverse "dates" to not mess up the numeration while inserting values in array
    for(let i: number = 0; i < dates.length; i++){
        tasklist.splice(dates[i], 0, {date: tasklist[dates[i]].date, task: '', group: Groups.DATE})
    }
    return tasklist
}

export default InsertDates