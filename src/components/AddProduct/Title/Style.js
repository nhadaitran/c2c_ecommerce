import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



export default makeStyles((theme) => ({
    title: {
        paddingLeft: '20px',
        paddingTop: '15px',
        paddingBottom: '15px',


    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        float: 'left',
        marginRight: '5px',

    },
    name: {
        fontSize: '25px',
        float: 'left',
        marginRight: '5px',
        fontWeight: 'bold',
    },
    item: {
        color: 'blue',
        fontSize: '20px',
        marginRight: '5px',
        fontWeight: 'bold',
    }


}));
