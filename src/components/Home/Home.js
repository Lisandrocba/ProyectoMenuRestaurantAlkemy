import React from "react";
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Orden from "../Orden/Orden";

const Home =()=>{

    return(
        <>
            <NavBar />
            <Orden />
        </>

        
    );
}

export default Home;