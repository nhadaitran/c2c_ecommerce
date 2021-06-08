import {makeStyles}from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    paper: {
        borderRadius: 10,
        margin: '3% 3%',
        backgroundColor: 'white',
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            width: '150vh',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
}));
