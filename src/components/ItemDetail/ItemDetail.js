import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';


const ItemDetail =(item)=>{

    const [detalle, setDetalle] = useState([]);
    const {id} = useParams();

    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=3b10244193b64a14934f99426534aa19&includeNutrition=false`;
    console.log(url)

    useEffect(() => {
        fetch(url)
        .then(res  => res.json())
        .then(data => {
            setDetalle(data)
        })
        .catch(e => console.log(e))
    },[]);
    
    console.log(detalle)

    return(
        <Card className='mt-5' style={{ width: '45rem', margin: 'auto auto' }}>
            <Card.Img variant="top" style={{ width: '20rem', margin: 'auto auto' }} src={detalle.image} />
            <Card.Body>
                <Card.Title>{detalle.title}</Card.Title>
                <Card.Text>
                {detalle.summary}
                </Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default ItemDetail;