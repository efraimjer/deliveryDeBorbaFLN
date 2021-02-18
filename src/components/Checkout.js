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
                            <div className="cart-item" style={{width: '90vw'}}>
                                <p>{cart.quantity + 'x'}</p>
                                <div className="flex-column" style={{width: '225px'}}>
                                    <p><b>{cart.name}</b></p>
                                    <div className="checkout-extras">
                                    {cart.extrasCart.map(extra=>(
                                            <div className="flex-row" style={{marginBottom: '-30px', marginTop: '0px'}}>
                                                <p style={{lineHeight: '18px'}}key={extra.quantity}>{extra.quantity + 'x'}</p>
                                                <p style={{marginBottom: "-20px", lineHeight: '18px', marginRight: '-30px'}} key={extra.name}>{extra.name}</p>
                                                <p style={{marginLeft: '25px', lineHeight: '18px', marginRight: '-20px'}}>{'R$ '+(extra.price * extra.quantity).toFixed(2)}</p>
                                                
                                                <IoIosCloseCircle style={{color: '#fc4041', fontSize: '1em', marginTop: '15px', marginLeft: '20px', lineHeight: '10px'}} 
                                                onClick={()=>{props.removeExtra(cart, cart.extrasCart, extra)}}
                                                />
                                                
                                            </div>
                                            ))}
                                    </div>
                                    <p style={{marginBottom: '-20px'}}><em>{cart.observation}</em></p>
                                    <p style={{marginTop: '20px'}}><em>{cart.point}</em></p>
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