import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    
    maxWidth: '80%',
    margin: 'auto',    
    borderRadius: '3%',
    paddingTop: '56.25%',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',    
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    margin:'auto',    
    
  },
  cardTitle:{
    textDecoration:'none',
    fontWeight:'bold',
  }
}));