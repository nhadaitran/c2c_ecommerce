import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({    
    carousel: {                    
         height: '100%',       
        width: '100%',
                                
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {          
          marginLeft: 'auto',
          marginRight: 'auto',
        },                 
    },
    carouselInner: {        
        alignItems: 'center',
        width: '100%',                
        height: '100%',        
        backgroundPosition: 'center',        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',        
    },
    bothSite: {
        flex: '5%',
        height: '100%',        
        backgroundColor: 'rgba(0, 0, 0,0.0)',
        display:'grid',
        placeItems: 'center',        
        color:'blue',
        cursor: 'pointer',        
    },
    center: {
        flex: '90%',
        height: '100%',        
    }
}))