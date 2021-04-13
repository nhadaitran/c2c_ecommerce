import React from 'react';
import {Container,Typography,Button, Grid,Box} from '@material-ui/core';
import useStyles from './styles';
import FavItem from './FavItem/FavItem';
import {Link} from 'react-router-dom';

const Fav = ({cart, handleUpdateFavQty, handleRemoveFav, handleEmptyFav}) => {
    const classes = useStyles();

    const EmptyFav = () => (
        <Typography variant="subtitle1">Không có sản phẩm yêu thích
            <Link to="/" className={classes.link}>, Add Item</Link>!
        </Typography>
    );

    const FilledFav= () => (
        <>
        <Grid container spacing={4}>
            {cart.line_items.map((item)=>(
                <Grid item xs={12} sm={4} key={item.id}>
                       <FavItem item={item} onUpdateFavQty={handleUpdateFavQty} onRemoveFav={handleRemoveFav} />
                </Grid>
            ))}
        </Grid>
        <Grid className={classes.cardDetails}>
                <Typography variant='h5'>Tổng tiền:{cart.subtotal.formatted_with_code}</Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyFav}>Xoá hết</Button>               
                </div>
        </Grid>
        </>
    );

    if(!cart.line_items) return 'Loading...';

    return (        
        <Container className={classes.layout}>            
            <Typography className={classes.title} variant='h5' gutterBottom align='center'>
                SẢN PHẨM YÊU THÍCH
            <Box borderBottom='3px solid' className={classes.box} /> 
            </Typography>
            
            {!cart.line_items.length ? <EmptyFav /> : <FilledFav />}
        </Container>        

    )
}

export default Fav
