import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '5%',
    marginBottom: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      width: '150vh',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  leftSide: {
    flex:'70%',
    maxWidth:'60%',
    [theme.breakpoints.down('700')]: {
      maxWidth: '100%',
    },
  },

  rightSide: {    
    maxWidth:'30%',
    flex:'30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('700')]: {
      display: 'none',
    },
  },

}));