import React, { useState, useEffect } from 'react';
import { Products, Navbar, Footer, Fav, ProductSite, PersonalPage, Category, Slideshow, SignInForm, SignUpForm, CheckoutInfo, CheckoutMethod, CheckoutSuccess, EditProfile, AddProduct, ChangeProduct, ListProduct, News, Popup, PagesBtn, StorePage } from './components';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import ad from './assets/ad.jpg'
import { commerce } from './lib/commerce';
import { ChatEngine} from 'react-chat-engine';
import { makeStyles } from '@material-ui/core/styles';
import "./App.css";
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100] 
    },
    slide:{
        height:'95vh',        
    },
  }));

const App = () => {
    var faker = require('faker/locale/vi');
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

    return (
        <Router>
                <div className={classes.root}>
                <Navbar totalItems={cart.total_items} />                
                <Switch>
                    <Route exact path='/signin'>
                        <SignInForm/>
                    </Route>
                    <Route exact path='/signup'>
                        <SignUpForm/>
                    </Route>
                    <Route exact path='/'>             
                    <div className={classes.slide} >
                    <Slideshow /></div> 
                    <Category/>
                    <Products products={products} onAddToFav={handleAddToFav } />
                    </Route>
                    <Route exact path='/fav'>
                        <Fav cart={cart}                         
                        handleRemoveFav={handleRemoveFav}
                        handleEmptyFav={handleEmptyFav} 
                        />
                    </Route>    
                     <Route exact path="/product">
                        <ProductSite />
                     </Route>      
                     <Route exact path="/profile">
                        <PersonalPage />
                     </Route>        
                     <Route exact path="/store">
                        <StorePage />
                     </Route>                                 
                     <Route exact path="/messages">                                                             
                     <ChatEngine
                        height='90vh'
                        userName={localStorage.getItem('username')}
                        userSecret={localStorage.getItem('password')}
                        projectID='f1bd45bd-ac81-4a7c-8ccf-f28ec7d7fe1d'                        
                        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
                    />
                    </Route>     
                    <Route exact path="/checkout">
                        <CheckoutInfo />
                     </Route>    
                     <Route exact path="/billinfo">
                        <CheckoutMethod />
                     </Route>        
                     <Route exact path="/success">
                        <CheckoutSuccess />
                     </Route>              
                    <Route exact path="/editprofile">                    
                    <EditProfile />
                     </Route>        
                     <Route exact path="/addproduct">
                     <Popup urlImage={faker.image.image()}/>
                    <AddProduct />
                     </Route>        
                     <Route exact path="/editproduct">                    
                    <ChangeProduct />
                     </Route>        
                     <Route exact path="/mall">                    
                    <ListProduct />
                     </Route>        
                     <Route exact path="/news">                    
                    <News />
                     </Route>    
                </Switch>
                <PagesBtn/>
                <Footer />
            </div>
        </Router>
    )
}

export default App
