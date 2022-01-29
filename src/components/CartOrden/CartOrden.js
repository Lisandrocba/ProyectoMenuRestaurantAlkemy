import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { useContext } from 'react';
import { CartContext } from '../../CartContex/CartContext';


const CartOrden =()=>{
    const {pedidoVegano, pedidoNoVegano, removeItem } = useContext(CartContext);
    let totalPrecio = 0;
    let timpoEspera = 0;
    
    const sumarTotal =(i)=>{
        totalPrecio += i.pricePerServing;
        console.log(totalPrecio)
    }

    const calculoEspera =(i)=>{
        timpoEspera += parseInt(i.readyInMinutes);
    }

        return (
                <Container>
                    <h2 className='mt-3'>Comida Vegana</h2>
                    <Row className='m-3'>
                        {pedidoVegano.map((i=>{
                            console.log(i)
                            calculoEspera(i.item)
                            sumarTotal(i.item)
                            return(
                                <Card className='m-3' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={i.item.image} />
                                    <Card.Body>
                                        <Card.Title>{i.item.title}</Card.Title>
                                            <Button onClick={()=> removeItem(i.item)} variant="danger">Eliminar</Button>
                                    </Card.Body>
                                </Card> 
                            )
                        }))}
                    </Row> 
                    <h2>Comida No Vegana</h2>
                    <Row className='m-3'>
                        {pedidoNoVegano.map((i=>{
                            sumarTotal(i.item)
                            calculoEspera(i.item)
                            return(
                                <Card className='m-3' style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={i.item.image} />
                                    <Card.Body>
                                        <Card.Title>{i.item.title}</Card.Title>
                                            <Button onClick={()=> removeItem(i.item)}  variant="danger">Eliminar</Button>
                                    </Card.Body>
                                </Card> 
                            )
                        }))} 

                    </Row>
                    <Row className='m-3'>
                        <Card style={{ width: '18rem' }}>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Precio Total: {totalPrecio.toFixed(2)}</ListGroup.Item>
                            <ListGroup.Item>Tiempo estimado de espera: {timpoEspera} minutos</ListGroup.Item>
                        </ListGroup>
                        </Card> 
                    </Row>
                </Container>
    )
}

export default CartOrden;