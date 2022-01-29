import React, { useContext } from 'react';
import { CartContext } from '../../CartContex/CartContext';
import Container from 'react-bootstrap/Container';
import CartOrden from '../CartOrden/CartOrden';

const Orden =()=>{
    const {pedidoVegano, pedidoNoVegano, checkLogin } = useContext(CartContext);

    return(
        <Container>
            {checkLogin}
            <h1>Ordenes:</h1>
            
            {
            pedidoVegano.length === 0 & pedidoNoVegano.length === 0
            ?
            <Container>
                <p>No agregaste pedidos a la orden</p>
            </Container>
            :
            <CartOrden />
            }
                
           
        </Container>
        )


}

export default Orden;