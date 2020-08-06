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
    taskList: [
        {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
        {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
        {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
        {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
        {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
    ],
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
                // contacts: [...state.contacts, action.payload]
                ...state,
                taskList: [...state.taskList, action.payload],
                isMenuOn: true,
                isNew: true,
                sideTask: DefaultTask, // TIGHT SPOT
            };
        case "EDIT_TASK":
            return {
                // contacts: state.contacts.filter(
                //     (contact: any) => contact.id !== action.payload
                // )
                ...state,

            };
        case "ADD_OPEN":
            return {
                // loading: true
                ...state,
                isMenuOn: true,
                isNew: true,
                sideTask: DefaultTask,
            };
        case "EDIT_OPEN":
            return {
                ...state,
                isMenuOn: true,
                isNew: false,
                sideTask: action.payload
            };
        case "DISCARD":
            return {
                ...state,
                isMenuOn: false,
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