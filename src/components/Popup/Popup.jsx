import react from 'react';
import Popu from 'reactjs-popup';
import {Paper} from '@material-ui/core';
import useStyle from './Style';

const Popup = (props) => {

    const classes=useStyle();
    const contentStyle = { background: '#000' };
    const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
    const arrowStyle = { color: '#000' }; // style for an svg element
    return (
        <div >            
            <Popu defaultOpen="true" modal {... {contentStyle, overlayStyle, arrowStyle}}>
                {close=>(
                    <div className="modal">
                        <button className={classes.close} onClick={close}>
                            &times;
                        </button>           
                        <div className={classes.content}>                    
                            <img src={props.urlImage} width="100%"/>                              
                        </div>
                    </div>
                )}
            </Popu>         
        </div>
    )
}

export default Popup;
