import { makeStyles, fade } from '@material-ui/core/styles';
const drawerWidth = 0;

export default makeStyles((theme) => ({  
  appBar: {    
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    border:'5px',
  },

  title: {
   flexGrow:0.05,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
    margin:'2%',
    "&:hover": {      
      borderBottom: 'blue solid 2px',
      color: 'green',
      background: 'white',
  },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  image: {
    marginRight:'5%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  leftSide:{
    flex: '20%',
    display: 'flex',
    justifyContent: 'flex-begin',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flex: '40%',
    },
  },

  rightSide:{
    flex: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    [theme.breakpoints.up('md')]: {
      flex: '60%',
    },    
  },

  button: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    display:'none',
  },
    menuAppbar: {
      margin:'auto',
    [theme.breakpoints.up('md')]: {
      display:'none',
    },
    display: 'flex',
  },

  search: {
    position: 'relative',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    marginLeft: 0,
    width: '100%',
    maxHeight: 'auto',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',    
    padding: theme.spacing(1, 1, 1, 0),    
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

}));