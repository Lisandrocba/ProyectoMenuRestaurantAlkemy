import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider =({children})=>{

    const [pedidoVegano, setPedidoVegano] = useState([]);
    const [pedidoNoVegano, setPedidoNoVegano] = useState([]);
    
    
    

    const addItem =(item)=>{
            if(item.vegan){
                pedidoVegano.length < 2 ? setPedidoVegano([...pedidoVegano, {item}]) : alert('No se pueden agregar mas de dos pedidos veganos')
            }else{

                pedidoNoVegano.length < 2 ? setPedidoNoVegano([...pedidoNoVegano, {item}]) : alert('No se pueden agregar mas de dos pedidos no veganos')
            }    
    }

    const removeItem =(it)=>{
        console.log(it)
        if(it.vegan){
            setPedidoVegano(pedidoVegano.filter(item => item.item.id !== it.id)) 
        }
        else{
            setPedidoNoVegano(pedidoNoVegano.filter(item => item.item.id !== it.id))
        }
    }

    const limpiarOrden =()=>{

    }
    
    const datos = { pedidoVegano, pedidoNoVegano , addItem, removeItem, limpiarOrden}

    return(
        <CartContext.Provider value={datos}>
            {children}
        </CartContext.Provider>
    )
}