import React from 'react';
import {Typography,Button,Card,CardActions,CardContent,CardMedia, IconButton} from '@material-ui/core';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import {DeleteForever} from '@material-ui/icons';

const FavItem = ({item,  onRemoveFav}) => {
    const classes = useStyles();

    return (
        <Card >
            <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.cardTitle} component={Link} to ="/product" variant='subtitle1' color="primary" >{item.name}</Typography>                
            </CardContent>
            <CardActions className={classes.cardActions}>
            <Button  className={classes.buttons} component={Link} to="/checkout" type='button' variant='contained' color='primary'>{item.line_total.formatted_with_symbol}</Button>
                <IconButton color="secondary" onClick={() =>onRemoveFav(item.id)}><DeleteForever/></IconButton>                
            </CardActions>
        </Card>
    )
}

export default FavItem
