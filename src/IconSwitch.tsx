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

function IconSwitch(prop: {
    group: Groups,
    className: string
}) {
    switch(prop.group) {
        case 'Вилки':
            return (
                <FormatShapes className={prop.className}/>
            )
        case 'Погоны':
            return (
                <HotTubIcon className={prop.className}/>
            )
        case 'Сладкий хлеб':
            return (
                <MoodBadIcon className={prop.className}/>
            )
        case 'Слоники':
            return (
                <MenuBookIcon className={prop.className}/>
            )
        case 'Струи':
            return (
                <AccessibilityNewIcon className={prop.className}/>
            )
        case 'Цапли':
            return (
                    <BeachAccessIcon className={prop.className}/>
            )
        case 'Шашки':
            return (
                <SmokingRoomsIcon className={prop.className}/>
            )
        case 'DATE':
            return (<></>)
        case 'All':
            return <InboxIcon className={prop.className}/>
        default:
            return (<></>)
    }
}
export default IconSwitch