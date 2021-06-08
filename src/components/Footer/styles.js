import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
      footer: {                
        paddingTop: '2%',          
        paddingBottom: '2%',               
      },
      iconsWrapper: {
        height: "50%",
      },
      icons: {
        display: 'flex',
      },
      buttonTitle:{
        border: '1px solid',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderRadius:30,
        marginLeft:'15%',
        marginRight:'10%',
      },
      icon: {
        width:'15%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight: theme.spacing(1),        
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
        color: 'inherit',                     
        padding: theme.spacing(1, 1, 1, 0),    
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        backgroundColor: 'rgba(0,0,0,0)',        
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '100%',
        },
      },      
      sendIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',        
      },
      email: {
        position: 'relative',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderRadius: '20px',
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.05),
        },
        marginLeft: 0,
        width: 'auto',
        maxHeight: 'auto',
        [theme.breakpoints.up('md')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      emailResponsive:{
        [theme.breakpoints.down('md')]: {
          display:'none',
        }
      },
      infoResponsive:{
        [theme.breakpoints.down('xs')]: {
          display:'none',
        }
      },
    }));
