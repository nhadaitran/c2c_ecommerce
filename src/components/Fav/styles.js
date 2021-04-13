import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  layout: {
    paddingTop:"1%",
    minHeight:'683px',
    backgroundColor:'white',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000 ,
      marginLeft: 'auto',
      marginRight: 'auto',
    },        
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  link: {
    textDecoration: 'none',    
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',    
    width: '100%',    
    justifyContent: 'space-between',        
    paddingBottom: '2%',
  },
  box:{
    display: 'flex',
    borderColor:"red",
    width:'40%',
    margin:"0 40% 3%",
  },
}));