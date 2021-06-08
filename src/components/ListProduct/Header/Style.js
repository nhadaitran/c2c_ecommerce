import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
    top: {
        marginLeft: '20px',
    },
    topbutton: {
        borderRadius: '0px',
        "&:hover": {
            borderBottom: 'blue solid 2px',
            color: 'black',
            background: 'white',
        },
        textTransform: 'none',
    },
    select: {
        background: 'blue',
        borderRadius: '20px',
        color: 'white',
        height: '30px',
        width:'100px',
    },
    option: {
        color: 'black',
        background: 'white'

    },
    topright: {
        marginTop: '1px',
        width: '20px',
    },
    bottom: {
        marginTop: '15px',
        marginLeft: '20px',
    },
    butbottom: {
        width: '100px',
        borderRadius: '0',
        textTransform: 'none',
        "&:hover": {
            background: 'blue',
            color: 'white',
        }
    },
}));
