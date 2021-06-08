import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    image: {
      backgroundImage: 'url(https://source.unsplash.com/collection/261936)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    root:{
      height:'100%',
      width: '100%',
      [theme.breakpoints.up('md')]:{
        height:'90vh',
        width: '150vh',
        margin: 'auto',
      }
    },
    paper: {
      margin: theme.spacing(4, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),      
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      borderRadius: 30,
    },
    icons: {
      display: 'flex',
      justifyContent: 'center',
    },
    icon: {
      width:'10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',      
      marginRight: theme.spacing(1),
    },
  }));
  
  