import { makeStyles, fade } from '@material-ui/core/styles';
const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {    
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.3)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    maxHeight:'100%',
  },

  title: {
   flexGrow:0.05,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    border: '1px solid',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
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
    paddingLeft: `25%`,
  },

}));