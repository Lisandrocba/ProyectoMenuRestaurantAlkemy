import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CartItem from '../CartItem/CartItem'


const ListNoVegan =()=>{
    const [prodVegan, setProdVegan] = useState([]);

    const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=3b10244193b64a14934f99426534aa19&query=meat';

    
    

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

export default ListNoVegan;