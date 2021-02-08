import {React, useState, useEffect} from 'react'
import { IoAddCircleSharp, IoBasketOutline} from "react-icons/io5";
import { IoIosRemoveCircle, IoIosCloseCircle, IoMdMenu } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import axios from 'axios'

export default function Productmobile(props) {
    const[burgerExtra, setBurgerExtra] = useState(
        [{"_id":"601dc89114959d19f0dc691d","code":27,"name":"Bacon","short":"","long":"","photo":"","pontuation":null,"price":2,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger","__v":0},{"_id":"601dc8ad14959d19f0dc691e","code":28,"name":"Carne","short":"","long":"","photo":"","pontuation":null,"price":8,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger","__v":0},
        {"_id":"601dc8be14959d19f0dc691f","code":29,"name":"Cheddar","short":"","long":"","photo":"","pontuation":null,"price":2,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger","__v":0},{"_id":"601dc8d014959d19f0dc6920","code":30,"name":"Maionese Caseira","short":"","long":"","photo":"","pontuation":null,"price":1.25,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger","__v":0}]
    )
    const[extras, setExtras] = useState([
        {
        code: 16,
        name: "Maionese",
        price: 8.00,
        group: "Acompanhamentos",
        table: "Padrão",
        mode: "Todos"
    },
    {
        code: 17,
        name: "Pão de Alho",
        price: 8.00,
        group: "Acompanhamentos",
        table: "Padrão",
        mode: "Todos"
    },
    {
        code: 18,
        name: "Farofa",
        price: 6.80,
        group: "Acompanhamentos",
        table: "Padrão",
        mode: "Todos"
    },
    {
        code: 19,
        name: "Salada de F. Verdes",
        price: 12.80,
        group: "Acompanhamentos",
        table: "Padrão",
        mode: "Todos"
    }])

    const sushiExtra = [
        {
            code: 54,
            name: "Molho Tare",
            price: 2.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos"
        },
        {
            code: 55,
            name: "Molho Agridoce",
            price: 2.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos"
        },
        {
            code: 56,
            name: "Wasabi",
            price: 2.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos"
        },
        {
            code: 57,
            name: "Gengibre Agridoce",
            price: 2.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos"
        },
        {
            code: 58,
            name: "Shoyu",
            price: 0.50,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos"
        },
        {
            code: 59,
            name: "Hashi",
            price: 0.50,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos"
        },
        {
            code: 60,
            name: "Molho de Ostra",
            price: 3.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos"
        }
    ]

    const extraAdds = [
        {
            code: 20,
            name: "Talher Descartável",
            price: 2.00,
            group: "Adicionais",
            table: "Padrão",
            mode: "Todos"
        },
        {
            code: 21,
            name: "Guardanapo",
            price: 0.50,
            group: "Adicionais",
            table: "Padrão",
            mode: "Todos"
        }
    ]

    const addToExtraCart = (extra)=>{
        props.setExtrasCart(current => [...current, extra])
        console.log(props.extrasCart)
    }
    


    return (
        <div className="product-mobile" style={{display: props.pMobile ? 'flex' : 'none'}}>
        <IoIosCloseCircle onClick={props.showPmobile} className="close-mobile"/>
            <img alt="" src={props.product.photo} />
                <h2>{props.product.name}</h2>
                <div className="price-tag-mobile">
                    <p>{props.product.price ? props.product.price.toFixed(2) : " "}</p>                    
                        
                        <div>                            
                            <IoIosRemoveCircle className="adddecbutton-mobile" onClick={props.decreaseOne} />
                            <input type="number" value={props.quantity} />
                            <IoAddCircleSharp className="adddecbutton" onClick={props.addOne} />

                        </div>
                    </div>
                    <form style={{display: props.varProduct ? 'block' : 'none'}}>
                        <label>
                            Escolha o ponto:
                            <select onChange={(e)=>props.handleMeatPoint(e.target.value)}>
                                <option value="" selected="selected">-</option>
                                <option value="Mal Passada">Mal Passada</option>
                                <option value="Mal para o ponto">Mal para o ponto</option>
                                <option value="Ao ponto">Ao ponto</option>
                                <option value="Bem Passada">Bem Passada</option>
                            </select>
                        </label>
                    </form>

                    <form style={{display: props.varProduct ? 'block' : 'none'}}>
            {extras.map(extra =>(
                    <div>
                        <div className="extra-span">
                                {extra.name} R$ {extra.price.toFixed(2)}
                                <IoAddCircleSharp className="adddecbutton" 
                                onClick={()=>{addToExtraCart(extra)}} />
                            </div>
                    </div>
                ))} 
              

            </form>

            <form style={{display: props.plusBurger ? 'block' : 'none'}}>
            {burgerExtra.map(extra =>(
                    <div>
                        <div className="extra-span">
                                {extra.name} R$ {extra.price.toFixed(2)}
                                <IoAddCircleSharp className="adddecbutton" 
                                onClick={()=>{addToExtraCart(extra)}} />
                            </div>
                    </div>
                ))} 

            </form>

            <form style={{display: props.sushiExtra ? 'block' : 'none'}}>
            {sushiExtra.map(extra =>(
                    <div>
                        <div className="extra-span">
                                {extra.name} R$ {extra.price.toFixed(2)}
                                <IoAddCircleSharp className="adddecbutton" 
                                onClick={()=>{addToExtraCart(extra)}} />
                            </div>
                    </div>
                ))} 

            </form>

            <form style={{display: props.varProduct ? 'block' : 'none'}}>
            {extraAdds.map(extra =>(
                    <div>
                        <div className="extra-span">
                                {extra.name} R$ {extra.price.toFixed(2)}
                                <IoAddCircleSharp className="adddecbutton" 
                                onClick={()=>{addToExtraCart(extra)}} />
                            </div>
                    </div>
                ))} 

            </form>

                    <p>{props.product.short}</p>
                    <p>{props.product.long}</p>
                    <h1>R$ {props.subtotal.toFixed(2)}</h1>

                    <span onClick={()=>{props.addToCart(props.product, props.quantity)}}>Adicionar ao pedido</span>
                                               
            
        </div>
    )
}
