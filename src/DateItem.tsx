import React from 'react';

import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

// TODO: probably worth rewriting to arrow notation
function DateItem(props: {date: string}) {
    return (
        <div>
            <ListItem key={props.date}>
                <Typography variant='h6'>{
                    props.date
                        }
                </Typography>
            </ListItem>
        </div>
    )
}

export default DateItem