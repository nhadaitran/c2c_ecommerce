import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    root:{
        display: 'flex',        
        justifyContent: 'center',      
        margin: 'auto',
        textAlign: 'center',
        backgroundColor: '#4525f2',                              
        width: '100%',
    },

    tittle: {
       textAlign: 'center',
       marginTop: '2%',
       marginBottom: '2%',
       fontWeight: 'bold',
       color: 'white',
    },
    infoicons: {
        color: 'white',        
    }
}));
