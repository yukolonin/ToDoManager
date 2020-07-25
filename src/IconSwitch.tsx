import React from 'react';
import Groups from './Groups'

import FormatShapes from '@material-ui/icons/FormatShapes';
import HotTubIcon from '@material-ui/icons/HotTub';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import InboxIcon from '@material-ui/icons/Inbox';

function IconSwitch(group: Groups){
    switch(group) {
        case 'Вилки':
            return (
                <FormatShapes />
            )
        case 'Погоны':
            return (
                <HotTubIcon />
            )
        case 'Сладкий хлеб':
            return (
                <MoodBadIcon />
            )
        case 'Слоники':
            return (
                <MenuBookIcon />
            )
        case 'Струи':
            return (
                <AccessibilityNewIcon />
            )
        case 'Цапли':
            return (
                    <BeachAccessIcon />
            )
        case 'Шашки':
            return (
                <SmokingRoomsIcon />
            )
        case 'DATE':
            return (<></>)
        case 'All':
            return <InboxIcon />
    }
}
export default IconSwitch