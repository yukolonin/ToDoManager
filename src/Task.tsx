import Groups from './Groups'

interface Task {
    date: string;
    task: string;
    group: Groups;
    id: string;
    checked: boolean;
}

export default Task