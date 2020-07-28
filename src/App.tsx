import React from 'react';
import './App.css';

import Groups from './Groups'
import Sidebar from './Sidebar'
import Task from './Task'
import SideMenu from "./SideMenu";
import DefaultTask from "./DefaultTask";

//-----------------

let tl: Array<Task> = [
    {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
    {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
    {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
    {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
    {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
]
//-----------------

function App() {

    const [taskList, setTaskList] = React.useState<Array<Task>>([
        {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
        {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
        {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
        {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
        {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
    ]);

    const [menuOn, setMenuOn] = React.useState<boolean>(false);

    const[isNew, setIsNew] = React.useState<boolean>(true);

    const [sideTask, setSideTask] = React.useState<Task>(DefaultTask)

    return (
        <div>
            <div>
                <Sidebar
                    tl={taskList}
                    setTaskList={setTaskList}
                    setMenuOn={setMenuOn}
                    setIsNew={setIsNew}
                    setSideTask={setSideTask}
                />
            </div>

            {menuOn &&
                <div>
                     <SideMenu
                        isNew={isNew}
                        task={sideTask}
                        tl={taskList}
                        setTaskList={setTaskList}
                        setMenuOn={setMenuOn}
                        setIsNew={setIsNew}
                        setSideTask={setSideTask}
                    />
                </div>
            }

        </div>
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
