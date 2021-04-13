import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    layout: {
        minHeight:'683px',
        flexGrow: '1',                        
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 1000,
          margin: 'auto',
        }, 
      },   
      itemSale:{
        borderRadius:10,
        backgroundColor:'white',
        marginTop:'5%',
        marginBottom:'5%',
        width: '100%',
      },
      item:{
        borderRadius:10,
        backgroundColor:'white',
        width: '100%',
        padding:'auto',
      },
}));