import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    paper:{
      elevation: 0,
    },
    card: {
        display: 'flex',        
        borderBottom:'3px solid rgba(0,0,0,0.1)',
        paddingTop: '20px',
        paddingBottom: '20px',
      },
      details: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth:'70vh',
      },
      content: {
        flex: '1 0 auto',
      },
      cover: {
        width: '35vh',
        height: '35vh',
      },
      link:{
        fontSize: 'large',
        fontWeight: 'bold',
        textDecoration: 'none',
        "&:hover": {
          color: 'green',
          textDecoration: 'none',
        },
        color: 'rgba(0,0,0,0.8)',                
      },
}));