import {React, useEffect} from 'react';
import './css/checkout.css';
import './components.css';



import { IoIosCloseCircle } from "react-icons/io";


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

    const HandleHours = () =>{
        var date = new Date()

        if(date.getHours() < 18 || date.getDay() === 0 ){
            return <p style={{color: 'red'}}>Estamos fechados <br></br>Volte entre 18:30 e 23:30</p>
        }

        else {
            return <HandleMinimumValue />
        }
    }



    
    return (
        <div>
                    <div className="checkout">
                        
                        <IoIosCloseCircle onClick={props.foo} className="adddecbutton modalclose"/>
                        <HandleHours />
                        <h4>Total - R$ {props.total.toFixed(2)}</h4>
                        {/* implement table of cart products */}
                        {props.cart? props.cart.map(cart=>(
                            <div className="cart-item" style={{width: '90vw'}}>
                                <p>{cart.quantity + 'x'}</p>
                                <div className="flex-column" style={{width: '215px'}}>
                                    <p><b>{cart.name}</b></p>
                                    <div className="checkout-extras">
                                    {cart.extrasCart.map(extra=>(
                                            <div className="flex-row" style={{marginBottom: '-30px', marginTop: '0px'}}>
                                                <p style={{lineHeight: '18px',fontSize: '0.7em' }}key={extra.quantity}>{extra.quantity + 'x'}</p>
                                                <p style={{marginBottom: "-20px", lineHeight: '18px', marginRight: '-30px', fontSize: '0.7em'}} key={extra.name}>{extra.name}</p>
                                                <p style={{marginLeft: '25px', lineHeight: '18px', marginRight: '-20px', fontSize: '0.7em'}}>{'R$ '+(extra.price * extra.quantity).toFixed(2)}</p>
                                                
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