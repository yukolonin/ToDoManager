import React, {useReducer, createContext, Reducer} from "react";
import Groups from "./Groups";
import Task from "./Task";
import DefaultTask from "./DefaultTask";


type InitialStateType = {
    taskList: Task[],
    isMenuOn: boolean,
    isNew: Boolean,
    sideTask: Task,
};

const initialState: InitialStateType = {
    taskList: JSON.parse(
        // Comment and uncomment next two lines to reset the localStorage
        localStorage.getItem('taskList')
        ||
        JSON.stringify([
            {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ, id: '11111', checked: false},
            {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ, id: '22222', checked: false},
            {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ, id: '33333', checked: false},
            {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ, id: '44444', checked: false},
            {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ, id: '55555', checked: false}
        ])),
    isMenuOn: false,
    isNew: true,
    sideTask: DefaultTask,
};

export const TaskListContext = createContext<{
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}>({
    state: initialState,
    dispatch: () => null
});

type TaskListAction = {
    type: string;
    payload: Task; // TODO: when processing 'Edit' would probably need two args here
}

const reducer: Reducer<InitialStateType, TaskListAction> = (
    state: InitialStateType,
    action: TaskListAction
) => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                taskList: [...state.taskList, action.payload],
                isMenuOn: false,
                isNew: true,
                sideTask: DefaultTask,
            };
        case "EDIT_TASK":
            return {
                ...state,
                taskList: state.taskList.map((task: Task) => (
                    task.id === action.payload.id ? action.payload : task
                )),
                isMenuOn: false,
                sideTask: DefaultTask,

            };
        case "ADD_OPEN":
            return {
                ...state, isMenuOn: true, isNew: true, sideTask: DefaultTask,
            };
        case "EDIT_OPEN":
            return {
                ...state, isMenuOn: true, isNew: false, sideTask: action.payload
            };
        case "DISCARD":
            return {
                ...state, isMenuOn: false,
            };
        case "CHECK":
            return {
                ...state,
                taskList: state.taskList.map((task: Task) => (
                    task.id === action.payload.id ? action.payload : task
                )),
            };
        default:
            throw new Error();
    }
};

export const TaskListContextProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <TaskListContext.Provider value={{state, dispatch}}>
            {props.children}
        </TaskListContext.Provider>
    );
};