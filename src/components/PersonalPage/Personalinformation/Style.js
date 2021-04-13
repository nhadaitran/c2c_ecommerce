import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    //left
    button: {
        width: '100%',
        height: '20%',
        borderRadius: '30px',
        margin: '3% 3% 3% 0',
    },
    avatar: {
        width: "80%",
        height: "80%",     
        margin:'auto',           
    },

    paperTitle:{
        display: 'flex',
        justifyContent: 'space-between',
    },
    //right
    right: {
        background: 'blue',
        borderRadius: '10px',
        width: 'auto',
        margin: '10px',
        paddingLeft: '10px',
        float: 'right',
        marginLeft: '30px'
    },
    titleRight: {
        fontSize: '15px',
        color: 'white',

    },
    icon: {
        color: 'white',
        fontSize: 'medium',

    },
    table: {
        borderSpacing: '50px',
    }
}));
