import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    contaier: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    tittle: {
        width: '100%',
        display: 'flex',
        padding: '2%',
        backgroundColor: '#ecebf3',
        marginBottom: '20px'
    },

    button: {
        marginTop: '10%'
    }
}));