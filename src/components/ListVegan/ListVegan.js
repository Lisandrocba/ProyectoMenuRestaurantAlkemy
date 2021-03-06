import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CartItem from '../CartItem/CartItem'
import { CartContext } from '../../CartContex/CartContext';


const ListVegan =()=>{
    const [prodVegan, setProdVegan] = useState([]);
    const {checkLogin } = useContext(CartContext);

    const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=fdf9e3938a624d21a5a37848d2110d70&query=vegan';

    
    

    useEffect(() => {
        fetch(url)
        .then(res  => res.json())
        .then(data => {
            setProdVegan(data.results);
        })
        .catch(e => console.log(e))
    },[])

   
    
    

    return(
        <div>
            <NavBar />
            {checkLogin()}
          { 
            <Container className='container'>
                <Row className='m-3'>
                {
                    prodVegan.map((item=>{
                        return(
                            <CartItem key={item.id} item={item}/>
                        )
                    }))
                }   

                </Row>
            </Container>    
            } 
        </div>
    )
}

export default ListVegan;