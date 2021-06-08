import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor:'white',                
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: '150vh' ,
      marginLeft: 'auto',
      marginRight: 'auto',
    },    
  },
}));