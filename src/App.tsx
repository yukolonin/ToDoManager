import React, {useEffect} from 'react';
import './App.css';

import DefaultTask from "./DefaultTask";
import Groups from './Groups'
import Sidebar from './Sidebar'
import SideMenu from "./SideMenu";
import Task from './Task'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


//-----------------
let tl: Array<Task> = [
    {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
    {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
    {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
    {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
    {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
]
//-----------------

const theme = createMuiTheme({
    palette: {
        primary: { main: '#F75934' },
        secondary: { main: '#747474' },
        text: { primary: '#333333', secondary: '#F75934', disabled: '#979797'},
    },
    typography: {
        fontFamily: ['Roboto', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            'sans-serif'].join(','),
        fontSize: 14,
        body1: {fontWeight: 500,},
        body2: {fontWeight: 500,},
        button: {color: '#F75934'},
        subtitle1: {fontSize: '12px', fontWeight: 400, color: '#747474'},
        subtitle2: {fontSize: '14px', fontWeight: 500, color: '#737373'},
    }
});

function App() {

    // One of two strings below on choice determine empty start or some ready data
    const [taskList, setTaskList] = React.useState<Array<Task>>(
        // JSON.parse(localStorage.getItem('taskList') || '[]')
        JSON.parse(localStorage.getItem('taskList') || JSON.stringify(tl))
    );

    useEffect(() => {
        localStorage.setItem('taskList', JSON.stringify(taskList))
    })

    const [menuOn, setMenuOn] = React.useState<boolean>(false);

    const[isNew, setIsNew] = React.useState<boolean>(true);

    const [sideTask, setSideTask] = React.useState<Task>(DefaultTask)

    return (
        <MuiThemeProvider theme={theme}>
            <Sidebar
                tl={taskList}
                setTaskList={setTaskList}
                setMenuOn={setMenuOn}
                setIsNew={setIsNew}
                setSideTask={setSideTask}
            />

            {menuOn && <SideMenu
                isNew={isNew}
                task={sideTask}
                tl={taskList}
                setTaskList={setTaskList}
                setMenuOn={setMenuOn}
                setIsNew={setIsNew}
                setSideTask={setSideTask}
            />}
        </MuiThemeProvider>
    )
}

export default App

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and savesavesave to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <label>label</label>
    </div>
  );
}

export default App;
*/
