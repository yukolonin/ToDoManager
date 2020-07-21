import React from 'react';

import Task from './Task'

function SortByDate(tasklist: Array<Task>) {
    return tasklist.sort(function(a:any, b:any){
        let aa = a.date.split('/').reverse().join(),
            bb = b.date.split('/').reverse().join();
        return aa < bb ? -1 : (aa > bb ? 1 : 0);
    });
}

export default SortByDate