import React, { useState, useEffect } from 'react';
import { Products, Navbar, Footer, Fav, Checkout, ProductSite, PersonalPage, Category, Slideshow } from './components';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],        
    },
  }));

const App = () => {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [cart,setFav] = useState({});     
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchFav = async () => {
        setFav(await commerce.cart.retrieve());
    }

    const handleAddToFav = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId,quantity)

        setFav(cart);
    }

    const handleRemoveFav = async (productId) =>{
        const {cart} = await commerce.cart.remove(productId);

        setFav(cart);
    }

    const handleEmptyFav = async () => {
        const {cart} = await commerce.cart.empty();        

        setFav(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchFav();
    }, []);

    console.log(cart);

    return (
        <Router>
                <div className={classes.root}>
                <Navbar totalItems={cart.total_items} />                
                <Switch>
                    <Route exact path='/'>                                                            
                    <Slideshow />                                        
                    <Category/>
                        <Products products={products} onAddToFav={handleAddToFav } />
                    </Route>
                    <Route exact path='/fav'>
                        <Fav cart={cart}                         
                        handleRemoveFav={handleRemoveFav}
                        handleEmptyFav={handleEmptyFav} 
                        />
                    </Route>    
                    <Route exact path="/checkout">
                        <Checkout cart={cart} />
                     </Route>    
                     <Route exact path="/product">
                        <ProductSite />
                     </Route>      
                     <Route exact path="/personalPage">
                        <PersonalPage />
                     </Route>                                                          
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
