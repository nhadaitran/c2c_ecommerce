import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '100%',
        },
      },

    contaier: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: '80%',
    },

    tittle: {
        width: '40%',
        display: 'flex',
        padding: '2%',
        backgroundColor: '#ecebf3'
    },

    button: {
        marginTop: '10%'
    }
}));