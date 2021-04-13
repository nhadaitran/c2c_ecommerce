import React from 'react'
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {FavoriteBorder} from '@material-ui/icons';
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Product = ({product,onAddToFav}) => {
    const classes = useStyles();

    return (        
        <Card className ={classes.root}>
            <CardMedia className={classes.media} component={Link} to='/product' image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.cardTitle}>
                    <Typography component={Link} to='/product' variant="subtitle1"  gutterBottom className={classes.typography} color="primary">
                        {product.name}
                    </Typography>                                        
                </div>                
            </CardContent>
            <CardActions  className={classes.CardActions}>
            <Typography variant="subtitle2" color="inherit " className={classes.typography} >Danh mục</Typography>
                <IconButton aria-label="Add to Favorite" onClick ={()=> onAddToFav(product.id,1)}>
                    <FavoriteBorder fontSize="small" />
                </IconButton>
                <Typography variant="subtitle2" color="secondary" className={classes.typography} >{product.price.formatted_with_symbol}</Typography>                           
            </CardActions>
        </Card>        
    )
}

export default Product
