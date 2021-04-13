import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        backgroundColor: '#4525f2',              
        width: 'auto',        
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 1000 ,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },

    container:{
        display: 'flex',        
        justifyContent: 'space-between',
    },

    tittle: {
       textAlign: 'center',
       marginTop: '30px',
       marginBottom: '30px',
       fontWeight: 'bold',
       color: 'white',
    },

    infoicons: {
        color: 'white',
        fontSize: '20px'
    }
}));
