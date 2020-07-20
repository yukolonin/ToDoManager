import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar'
import TaskList from './TaskList'

import FormatShapes from '@material-ui/icons/FormatShapes';
import HotTubIcon from '@material-ui/icons/HotTub';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';


const groups = [
    { name: 'A', label: 'АААААААААААА', Icon: FormatShapes },
    { name: 'B', label: 'ВЕСЬ ПОЛ ЗАСРАЛ', Icon: HotTubIcon },
    { name: 'C', label: 'Я ТЕБЯ ЩА УБЬЮ НАХУЙ', Icon: MoodBadIcon },
    { name: 'D', label: 'ТЫ ПОЕХАВШИЙ УЖЕ, ВСЕ', Icon: MenuBookIcon },
    { name: 'E', label: 'НАЧАЛЬНИК', Icon: AccessibilityNewIcon },
    { name: 'F', label: 'ИДИ ПОД СТРУЮ МОЙСЯ', Icon: BeachAccessIcon },
    { name: 'G', label: 'РАЗ РАЗ РАЗ РАЗ РАЗ РАЗ', Icon: SmokingRoomsIcon },
]

/*
Structure probably can be simplified, but I haven't found the way
to make it work for the moment
*/
const taskList = [
    { date: '07/02/2021', tasks: [
        { task: 'Убить мух', group: 'a'},
        { task: 'Забрать погону', group: 'b'},
        { task: 'Постоять как цапля', group: 'a'}
        ]
    },
    { date: '01/02/2021', tasks: [
        { task: 'Помыться под струей', group: 'b'}
        ]
    },
    { date: '05/02/2021', tasks: [
        { task: 'Выпить три семерки с дурой одной', group: 'c'}
        ]
    }
]

function App() {
    return (
        <div>
            <div>
                <Sidebar items={groups} />
            </div>
            <div>
                <TaskList items={taskList} />
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
