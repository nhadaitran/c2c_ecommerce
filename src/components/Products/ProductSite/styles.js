import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({    
      layout: {
        minHeight:'683px',
        flexGrow: '1',        
        paddingBottom: '2%',
        width: 'auto',
        backgroundColor:'white',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 1000,
          margin: 'auto',
        }, 
      },   
      
      paper: {        
        padding: theme.spacing(2),    
        display: 'flex',        
        textAlign: 'center',    
        color: theme.palette.text.black,  
        justifyContent:'space-between',    
      },
      storeButton: {
        height: '100%',
        borderRadius:'30px ',        
      },
      button:{
        justifyContent:'space-between',    
        minWidth:'85%',
        height: '100%',        
        borderRadius:'30px ',
        margin:'5px',        
      },
      paperButton: {        
        padding: theme.spacing(2),    
        
        color: theme.palette.text.secondary,            
        textAlign: 'center',
        justifyContent:'space-between',
      },
    }))    