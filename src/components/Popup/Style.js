import {makeStyles} from '@material-ui/core/styles';
export default makeStyles(()=>({
    close:{
        cursor:'pointer',
        position: 'absolute',
        display: 'block',
        padding: '2px 5px',
        lineHeight: '20px',
        right: '-10px',
        top: '-10px',
        fontSize: '24px',
        background: '#ffffff',
        borderRadius: '18px',
        border: '1px solid #cfcece',
    },
    modal:{
        fontSize:'12px'
    },
    content:{
        width:'100%',
        height:'100%'
    }
}));
