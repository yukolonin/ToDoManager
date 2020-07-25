import React from 'react';
import Groups from './Groups'

import FormatShapes from '@material-ui/icons/FormatShapes';
import HotTubIcon from '@material-ui/icons/HotTub';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';

function IconSwitch(group: Groups){
    switch(group) {
        case 'Вилки':
            return (
                <div className="sidebar-icon">
                    <FormatShapes height="10px" width="10px"/>
                </div>
            )
        case 'Погоны':
            return (
                <div className="sidebar-icon">
                    <HotTubIcon height="10px" width="10px"/>
                </div>
            )
        case 'Сладкий хлеб':
            return (
                <div className="sidebar-icon">
                    <MoodBadIcon height="10px" width="10px"/>
                </div>
            )
        case 'Слоники':
            return (
                <div className="sidebar-icon">
                    <MenuBookIcon height="10px" width="10px"/>
                </div>
            )
        case 'Струи':
            return (
                <div className="sidebar-icon">
                    <AccessibilityNewIcon height="10px" width="10px"/>
                </div>
            )
        case 'Цапли':
            return (
                <div className="sidebar-icon">
                    <BeachAccessIcon height="10px" width="10px"/>
                </div>
            )
        case 'Шашки':
            return (
                <div className="sidebar-icon">
                    <SmokingRoomsIcon height="10px" width="10px"/>
                </div>
            )
        case 'DATE':
            return (<></>)
    }
}
export default IconSwitch