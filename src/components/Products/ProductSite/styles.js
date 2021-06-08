import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({    
      layout: {
        minHeight:'90vh',
        flexGrow: '1',        
        paddingBottom: '2%',
        
        backgroundColor:'white',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          width: '150vh',
          margin: 'auto',
        },         
      },   
      appBar:{
        display:'none',
        [theme.breakpoints.down('md')]: {
          top: 'auto',
          bottom: 0,
          display: 'flex',      
          backgroundColor:'white',
        }, 
        maxHeight:'5%',
        '&:hover':{
          maxHeight: '100%',   
        },
      },
      layoutProduct:{
        width: '40%',
        [theme.breakpoints.down('md')]: {
          width: '80%',
          margin: 'auto',
        }, 
        [theme.breakpoints.down('xs')]: {
          display:'none'
        }, 
      },
      layoutImage:{
        width: '60%',
        [theme.breakpoints.down('md')]: {
          width: '90%',
          height:'60vh',          
          margin:'auto',
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
        width: '100%',
        height: '100%',
        borderRadius:'30px ',        
      },
      button:{
        justifyContent:'space-between',    
        minWidth:'85%',
        height: '100%',        
        borderRadius:'30px ',
        margin:'5px',        
        '&:hover':{
          color:'green',
          borderColor:'green'
        },
        [theme.breakpoints.down('md')]: {
          display:'none',
        }, 
      },
      appbarButton:{
        justifyContent:'space-between',    
        minWidth:'20%',
        height: '100%',                
        margin:'auto',        
        '&:hover':{
          color:'green',
          borderColor:'green'
        },
        [theme.breakpoints.down(860)]: {
          display:'none',
        }, 
      },
      smallappbarButton:{
        display:'none',
        justifyContent:'center',    
        width:'100%',
        height: '100%',                
        margin:'auto',        
        '&:hover':{
          color:'green',
          borderColor:'green'
        },
        [theme.breakpoints.down(860)]: {
          display:'flex',
        }, 
      },
      box:{
        [theme.breakpoints.down('md')]: {
          display:'none',
        },
      },
      paperButton: {        
        padding: theme.spacing(2),    
        
        color: theme.palette.text.secondary,            
        textAlign: 'center',
        justifyContent:'space-between',
      },
      menuAppbar: {
      margin:'auto',
      width:'100%',
    [theme.breakpoints.up('860')]: {
      display:'none',
    },
    display: 'flex',
  },
    }))    