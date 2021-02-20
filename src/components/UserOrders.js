import {React, useState} from 'react'
import './components.css';
import {HiCheck} from 'react-icons/hi'

export default function UserOrders() {

    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('order')) ? JSON.parse(localStorage.getItem('order')) : {
        _id: 0,
        name: 'joão',
        time: '2021 23:21',
        total: 150,
        cart: [{
            name: 'frango frito', 
            subTotal: 0,
            point: 'mal',
            extrasCart: [{
                name: 'palito de dente'
            }]
        }],
        option: "Motoboy-dinheiro",
        method: "motoboy"


    } )

    return (
        <div>

            <div className="flex-column" 
            style={{display: JSON.parse(localStorage.getItem('order')) ? 'flex' : 'none',
            width: '90vw', lineHeight: '15px', marginLeft: '20px'}}>
                <h3>Seu último pedido</h3>
                
                <p>{'Horário ' + orders.time}</p>
                <p><em>{orders.name}</em></p>
                <p>{'Valor R$ ' + orders.total.toFixed(2)}</p>
                {orders.cart.map(cart=>(
                    <div className='flex-column' style={{borderTop: '1px solid #6b6e7e ', width: '90vw'}}>
                        <p style={{margin: '0px 0px 0px 0px'}}><b>{cart.name} </b> {'R$ ' + cart.subTotal.toFixed(2)}</p>
                        {cart.extrasCart.map(extra=>(
                            <p style={{lineHeight: '14px', margin: '0px 20px 0px 0px', fontSize: '12px'}}> - {extra.name}</p>
                        ))}
                        <p>{cart.point}</p>
                    </div>
                ))}
                
                <p>{'Entrega/Pagamento ' + orders.option}</p>
                
                <p>Status: <HiCheck style={{color: 'green', fontSize: '3em', marginBottom: '-15px'}}/><b>Enviado para produção</b></p>

                <a style={{textDecoration: 'none', color: '#6b6e7e'}} href="https://bit.ly/deBorbaDelivery">Qualquer prolema entre em contato com nosso Whatsapp 48 3206 3826 </a>
                
            </div>
            <div className="flex-column"
            style={{display: JSON.parse(!localStorage.getItem('order')) ? 'flex' : 'none'}}>
                <h3>Ops, aparentemente você não fez nenhum pedido ainda</h3>
            </div>

        </div>
    )
}
