import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';


const NavBar =()=>{

    const navigate = useNavigate();
    
    return(
        <Navbar 
         bg="dark" variant="dark">
            <Container>
                <Navbar.Brand style={{cursor: 'pointer'}} onClick={()=>{navigate('/inicio');}}>Home</Navbar.Brand>
                <Nav>
                    <Nav.Link  onClick={()=>{navigate('/vegan');}}>Comidas Veganas</Nav.Link>
                    <Nav.Link  onClick={()=>{navigate('/Meat');}}>Comidas no Veganas</Nav.Link>
                    <Nav.Link href="#pricing">LogOut</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;