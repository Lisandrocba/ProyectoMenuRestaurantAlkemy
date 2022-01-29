import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../CartContex/CartContext';
import NavBar from '../NavBar/NavBar';


const ItemDetail =(item)=>{

    const [detalle, setDetalle] = useState([]);
    const {id} = useParams();
    const {pedido, addItem, removeItem, limpiarOrden, checkLogin} = useContext(CartContext);

    const navigate = useNavigate();

    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=fdf9e3938a624d21a5a37848d2110d70&includeNutrition=false`;
    
    useEffect(() => {
        fetch(url)
        .then(res  => res.json())
        .then(data => {
            setDetalle(data)
        })
        .catch(e => console.log(e))
    },[]);
    
    

    return(
        <>
        {checkLogin()}
        <NavBar />
        <Card className='mt-5' style={{ width: '45rem', margin: 'auto auto' }}>
            <Card.Img variant="top" style={{ width: '20rem', margin: 'auto auto', padding: 10 }} src={detalle.image} />
            <Card.Body>
                <Card.Title>{detalle.title}</Card.Title>
                <Card.Text>
                {detalle.summary}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link onClick={()=> addItem(detalle)} style={{cursor:'pointer'}} >Agregar al pedido</Card.Link>
                <Card.Link onClick={()=>{navigate('/inicio');}} style={{cursor:'pointer'}}>Ir a la Orden</Card.Link>
            </Card.Body>
        </Card>
        </>
    )
}

export default ItemDetail;