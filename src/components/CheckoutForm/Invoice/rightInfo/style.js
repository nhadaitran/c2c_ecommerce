import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    container: {        
        width:'auto',        
        height:'auto',
        backgroundColor: '#ecebf3',
        display: 'flex',        
        flexDirection: 'column',
        padding:'2%',                
    },

    productInfo: {
        borderBottom: '2px solid #a292f8',
        marginTop:'4%'
    },

    info: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '4%',
        borderBottom: '2px solid #a292f8',
    },

    total: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '2%'
    }
}));