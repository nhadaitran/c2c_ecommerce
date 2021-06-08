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
}));
