import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme)=>({
    root:{
        maxWidth: '100%',     
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        border: '1px solid rgba(0, 0, 0, 0.1)',         
    },
    media:{        
        paddingTop: '56.25%',                        
    },
    cardActions:{
        display: 'flex',        
        justifyContent: 'space-between',       
        paddingBottom: '10%',
    },
    cardTitle:{
        display: 'flex',
        justifyContent: 'space-between',       
        height: 70,        
    },
    typography: {
        textDecoration: 'none',
        fontWeight:'bold',
    },

}))