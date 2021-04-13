import React, {useState} from 'react';
import useStyles from './styles';
import {images} from './Data/SlideshowData';
import {ArrowBackIos, ArrowForwardIos} from '@material-ui/icons';


function Slideshow() {
    const classes = useStyles();
    const [currImg, setCurrImg] = useState(0)



    return (
        <div className={classes.carousel}>
            <div className={classes.carouselInner} style={{ backgroundImage: `url(${images[currImg].img})`}}>                
            <div className={classes.bothSite} onClick={()=>{
                currImg === 0 ? setCurrImg(images.length-1) : setCurrImg(currImg-1);
            }}>
                <ArrowBackIos />
                </div>
            <div className={classes.center}></div>
            <div className={classes.bothSite}onClick={()=>{
                currImg === images.length -1 ? setCurrImg(0) : setCurrImg(currImg+1);
            }}>
                <ArrowForwardIos/>
            </div>
            </div>
        </div>
    )
}

export default Slideshow
