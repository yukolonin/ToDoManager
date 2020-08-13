import React, {useEffect} from 'react';
import './App.css';

import DefaultTask from "./DefaultTask";
import Groups from './Groups'
import Sidebar from './Sidebar'
import SideMenu from "./SideMenu";
import Task from './Task'
import {TaskListContext, TaskListContextProvider} from "./TaskListContext";
import AppBody from "./AppBody";

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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
        button: {fontSize: '14px', color: '#F75934'},
        subtitle1: {fontSize: '12px', fontWeight: 400, color: '#747474'},
        subtitle2: {fontSize: '14px', fontWeight: 500, color: '#737373'},
        h6: {fontSize: '12px', fontWeight: 700, color: '#979797', letterSpacing: '0.15em'}
    }
});

function App() {

    return (
        <TaskListContextProvider>
            <MuiThemeProvider theme={theme}>
               <AppBody/>
            </MuiThemeProvider>
        </TaskListContextProvider>
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
