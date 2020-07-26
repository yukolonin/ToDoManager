import Groups from './Groups'

// TODO: add unique Id-s using Date.now()

interface Task {
    date: string;
    task: string;
    group: Groups;
}

export default Task