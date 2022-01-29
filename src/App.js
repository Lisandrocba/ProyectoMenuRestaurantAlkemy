import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home/Home';
import ListVegan from './components/ListVegan/ListVegan';
import ListNoVegan from './components/ListNoVegan/ListNoVegan';
import ItemDetail from './components/ItemDetail/ItemDetail';
import {CartProvider} from './CartContex/CartContext'



function App() {

    return (
        <CartProvider>
            
            <Routes> 
                <Route path="/" exact element= {<Login />} />
                <Route path="/inicio" exact element= {<Home />} />
                <Route path="/Vegan" exact element= {<ListVegan />} />
                <Route path="/Meat" exact element= {<ListNoVegan />} />
                <Route path='item/:id' element={<ItemDetail/>} />
            </Routes>
            
        </CartProvider>
    );
}

export default App;

