import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    paper: {
        borderRadius: '10px 10px 10px 10px',
        margin: '20px 20px',
        backgroundColor: 'white',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        }

    }
}));
