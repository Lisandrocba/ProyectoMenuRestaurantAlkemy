import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CartItem =({item})=>{
    return(
        <Card className='m-3' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Link to={`/item/${item.id}`} key= {item.id}>
                    <Button variant="primary">Ver Descripcion</Button>
                </Link>
            </Card.Body>
        </Card> 
    )
}

export default CartItem;