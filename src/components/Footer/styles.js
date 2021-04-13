import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      root: {                
        display: 'flex',                
        backgroundColor:'white',        
      },
      container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: 'flex',
      },
      iconsWrapper: {
        height: 120,
      },
      icons: {
        display: 'flex',
      },
      icon: {
        width:'15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight: theme.spacing(1),
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          borderRadius: 30,
        },
      },
      list: {
        margin: 0,
        listStyle: 'none',        
        padding: 0,
      },
      listItem: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),        
        textDecoration: 'none',
      },
        item: {                  
        textDecoration: 'none',
        color: 'black',                
      },
      box:{
        borderColor:"rgba(0,0,0,0.2)",
        width:'85%',
      },
      typography: {                       
        marginLeft: '20%',             
        paddingTop: theme.spacing(0.5),        
        color: 'white',
        backgroundColor: 'blue',
        borderRadius:30,
        width: '45%',
        height: '15%',        
      },
      inputRoot: {
        width: '75%',
        border: '1px solid',
        borderRadius:30,          
        paddingLeft:10,        
        backgroundColor: 'rgba(0,0,0,0.08)',
      },      
    }));
