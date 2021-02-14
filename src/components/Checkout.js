import {React, useEffect, useState} from 'react';
import './css/checkout.css';
import './components.css';



import { IoAddCircleSharp, IoBasketOutline} from "react-icons/io5";
import { IoIosRemoveCircle, IoIosCloseCircle, IoMdMenu } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

export default function Checkout(props) {

    

    useEffect(() => {

    }, [props.cart])





    const handleAlertMinimum = () =>{
        alert('Pedido mínimo R$ 25,00!')
    }

    const HandleMinimumValue = () =>{
        if(props.total > 25){
            return <span onClick={props.handleCloseOrder} >Finalizar Pedido</span>
        }

        else return <span onClick={handleAlertMinimum} >Finalizar Pedido</span>
    }

    
    return (
        <div>
                    <div className="checkout">
                        
                        <IoIosCloseCircle onClick={props.foo} className="adddecbutton modalclose"/>
                        <HandleMinimumValue />
                        <h4>Total - R$ {props.total.toFixed(2)}</h4>
                        {/* implement table of cart products */}
                        {props.cart? props.cart.map(cart=>(
                            <div className="cart-item">
                                <p>{cart.quantity + 'x'}</p>
                                <div className="flex-column" >
                                    <p><b>{cart.name}</b></p>
                                    <div className="checkout-extras">
                                    {cart.extrasCart.map(extra=>(
                                            <div className="flex-row">
                                                <p style={{marginBottom: "-20px"}} key={extra.name}>{extra.name}</p>
                                                <p style={{marginLeft: '20px'}}>{'R$ '+(extra.price * extra.quantity).toFixed(2)}</p>
                                                
                                                <IoIosCloseCircle style={{color: '#fc4041', fontSize: '1em', marginTop: '20px', marginLeft: '20px'}} 
                                                onClick={()=>{props.removeExtra(cart, cart.extrasCart, extra)}}
                                                />
                                                
                                            </div>
                                            ))}
                                    </div>
                                    <p style={{marginBottom: '-20px'}}>{cart.observation}</p>
                                    <p>{cart.point}</p>
                                </div>

                                                               
                                

                                <p> <b>R$ 
                                    {cart.subTotal ? (parseFloat(cart.subTotal) + parseFloat(cart.extrasPrice)).toFixed(2) : 0}</b> 
                                    <IoIosCloseCircle style={{color: '#fc4041', fontSize: '1.4em'}} 
                                    onClick={()=>{props.remove(cart)}}
                                    
                                    /></p>
                                
                            </div>
                        )) : ''} 

                            
                        </div>
        </div>
    )
}
