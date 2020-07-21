import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import TaskList from './TaskList'
import SideMenu from './SideMenu'
import Groups from './Groups'
import Task from './Task'
import InsertDates from "./InsertDates";

//-----------------

let tl: Array<Task> = [
    {date: '07/02/2021', task: 'Убить мух', group: Groups.ВИЛКИ},
    {date: '07/02/2021', task: 'Забрать погону', group: Groups.ПОГОНЫ},
    {date: '01/02/2021', task: 'Помыться под струей', group: Groups.ПОГОНЫ},
    {date: '07/02/2021', task: 'Постоять как цапля', group: Groups.ВИЛКИ},
    {date: '05/02/2021', task: 'Выпить три семерки с дурой одной', group: Groups.СЛАДКИЙ_ХЛЕБ}
]
InsertDates(tl)

let menuStub = {isNew: false, date: '01/02/2021', task: 'Постоять как головастик', group: 'b'}

function App() {
    return (
        <div>
            <div>
                <Sidebar
                    // items={Groups}
                />
            </div>
            <div>
                <TaskList items={tl} />
            </div>
            <div>
                <SideMenu isNew={menuStub.isNew} xdate={menuStub.date} xtask={menuStub.task} xgroup={menuStub.group} tl={tl}/>
            </div>
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
