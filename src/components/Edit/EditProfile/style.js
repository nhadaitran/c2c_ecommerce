import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    contaier: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    tittle: {
        width: '100%',
        height: '100px',
        display: 'flex',
        padding: '15px',
        backgroundColor: '#ecebf3',
        alignItems: 'center'
    },

    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
        marginRight: '15px',
        marginLeft:'20px'
      },

    info: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        backgroundColor: '#ecebf3',
        marginTop: '30px'
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },

    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '70%',
        },
    },

    button: {
        marginTop: '50px'
    }
}));