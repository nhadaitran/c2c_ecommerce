import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:{
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
          display: 'none',
        },
    },
    card: {
        display: 'flex',        
        borderBottom:'3px solid rgba(0,0,0,0.1)',
        paddingTop: '10px',
        paddingBottom: '10px',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth:'30vh',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: '15vh',
        height: '15vh',
      },
      ad: {
        margin:'auto',
        width: '90%',
        height: '88vh',
      },
      link:{
          fontWeight: 'bold',
        textDecoration: 'none',
        "&:hover": {
          color: 'green',
          textDecoration: 'none',
        },
        color: 'rgba(0,0,0,0.8)',                
      },
}));