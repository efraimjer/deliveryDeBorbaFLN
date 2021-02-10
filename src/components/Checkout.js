import React from 'react';
import './css/checkout.css';
import './components.css';



import { IoAddCircleSharp, IoBasketOutline} from "react-icons/io5";
import { IoIosRemoveCircle, IoIosCloseCircle, IoMdMenu } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";

export default function Checkout(props) {
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
                        {props.cart.map(cart=>(
                            <div className="cart-item">
                                <p><b>{cart.name}</b></p>                                
                                <p>{cart.point}</p>
                                <div className="flex-column" >
                                {cart.extrasCart.map(extra=>(
                                    <p style={{marginBottom: "-20px"}} key={extra.name}>{extra.name}</p>
                                ))}</div>
                                <p> <b>R$ 
                                    {cart.price ? (parseFloat(cart.price) + parseFloat(cart.extrasPrice)).toFixed(2) : 0}</b> 
                                    <IoIosCloseCircle style={{color: '#fc4041', fontSize: '1.4em'}} 
                                    onClick={()=>{props.remove(cart)}}
                                    
                                    /></p>
                                
                            </div>
                        ))}

                            
                        </div>
        </div>
    )
}
