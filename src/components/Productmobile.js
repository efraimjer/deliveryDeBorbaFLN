import {React, useState, useEffect} from 'react'

import {BiChevronLeftCircle} from 'react-icons/bi'
import {HiCheck} from 'react-icons/hi'
import {IoIosRemove, IoIosCloseCircle} from 'react-icons/io'
import {GrFormAdd} from 'react-icons/gr'


import useSound from 'use-sound';

import click from '../assets/sound/487452__ranner__click.wav'

export default function Productmobile(props) {

    


    
    const[observation, setObservation] = useState('')

   
    const[quantity, setQuantity] = useState(1)
    const[burgerExtra, setBurgerExtra] = useState(
        [{"_id":"601dc89114959d19f0dc691d","code":27,"name":"Bacon","short":"","long":"","photo":"","pontuation":null,"price":2,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger","__v":0},
        {"_id":"601dc8ad14959d19f0dc691e","code":28,"name":"Carne","short":"","long":"","photo":"","pontuation":null,"price":8,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger",
        "onCart": false,"__v":0},
        {"_id":"601dc8be14959d19f0dc691f","code":29,"name":"Cheddar","short":"",
        "onCart": false,"long":"","photo":"","pontuation":null,"price":2,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger","__v":0},
        {"_id":"601dc8d014959d19f0dc6920","code":30,"name":"Maionese Caseira","short":"","long":"","photo":"","pontuation":null,"price":1.25,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger","__v":0},
        {"_id":"601dc8d014959d19f0dc6920","code":101,"name":"Catupiry","short":"","long":"","photo":"","pontuation":null,"price":2.00,"isAvailable":true,"table":"PADRÃO","mode":"Todos","group":"Adicional Burger","__v":0}]

    )
    const[extras, setExtras] = useState([
        {
        code: 16,
        name: "Maionese",
        price: 8.00,
        group: "Acompanhamentos",
        table: "Padrão",
        mode: "Todos",
        onCart: false
    },
    {
        code: 17,
        name: "Pão de Alho",
        price: 8.00,
        group: "Acompanhamentos",
        table: "Padrão",
        mode: "Todos",
        onCart: false
    },
    {
        code: 18,
        name: "Farofa",
        price: 6.80,
        group: "Acompanhamentos",
        table: "Padrão",
        mode: "Todos",
        onCart: false
    },
    {
        code: 19,
        name: "Salada de F. Verdes",
        price: 12.80,
        group: "Acompanhamentos",
        table: "Padrão",
        mode: "Todos",
        onCart: false
    }])

    const [sushiExtra, setSushiExtra] = useState([
        {
            code: 54,
            name: "Molho Tare",
            price: 2.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos",
            onCart: false
        },
        {
            code: 55,
            name: "Molho Agridoce",
            price: 2.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos",
            onCart: false
        },
        {
            code: 56,
            name: "Wasabi",
            price: 2.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos",
            onCart: false
        },
        {
            code: 57,
            name: "Gengibre Agridoce",
            price: 2.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos",
            onCart: false
        },

        {
            code: 60,
            name: "Molho de Ostra",
            price: 3.00,
            group: "Adicionais Sushi",
            table: "Padrão",
            mode: "Todos",
            onCart: false
        }
    ])



    const [play] = useSound(click);

    const [extraAdds, setExtraAdds] = useState([
        {
            code: 20,
            name: "Talher Descartável",
            price: 2.00,
            group: "Adicionais",
            table: "Padrão",
            mode: "Todos",
            onCart: false,
            quantity: 0
        }
    ]) 
 


    const addOne = ()=>{
        setQuantity(current=> current + 1)
    }

    const decreaseOne = ()=>{
        if(quantity > 1){
        setQuantity(current=> current - 1)
        }
        else setQuantity(1)
    }

    function getOccurrence(array, value) {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    }

    const addToExtraCart = (extra)=>{

        play()

        props.setExtrasCart(current => [...current, extra])
       

   
    }



    const decreaseOneExtra = (extra) =>{
        play()
        props.extrasCart.splice(props.extrasCart.indexOf(extra), 1)
        console.log(props.extrasCart)

    }

    const addOneExtra = (extra) =>{
        play()

        if(extra.onCart){
            extra.onCart = false
            props.extrasCart.splice(props.extrasCart.indexOf(extra), 1)
        }
        else {extra.onCart = true
            props.setExtrasCart(current => [...current, extra])
        }
    }

    const addToCart = (product) =>{
        
        props.product.quantity = quantity;

        props.product.subTotal = quantity * props.product.price;

        props.addToCart(product)

        setQuantity(1)

        extras.forEach(element=>{
            element.onCart = false
        })

        sushiExtra.forEach(element=>{
            element.onCart = false
        })

        burgerExtra.forEach(element=>{
            element.onCart = false
        })

        extraAdds.forEach(element=>{
            element.onCart = false
        })
        setObservation('')
    }

    const handleObs = (value) =>{

        
        

        props.setObservation(value)
        console.log(value)

        
    }
    


    return (
        <div className="product-mobile" style={{display: props.pMobile ? 'flex' : 'none'}}>
        <BiChevronLeftCircle onClick={props.showPmobile}  className="close-mobile"/>
            <img alt="" src={props.product.photo} />
                <h2>{props.product.name}</h2>
                <p>{props.product.short}</p>
                <p>{props.product.long}</p>
                <div className="price-tag-mobile">
                    <p>Valor Unitário R$ {props.product.price ? props.product.price.toFixed(2) : " "}</p>                    
                        
                        
                    </div>
                    <form style={{display: props.varProduct || props.plusBurger? 'flex' : 'none', justifyContent: 'center', alignItems: 'center',flexDirection: 'column', marginBottom: "10px"}}>
                            <label>Escolha o ponto: </label>

                            <select style={{width: '200px'}} onChange={(e)=>props.handleMeatPoint(e.target.value)}>
                                <option value="" selected="selected">-</option>
                                <option value="Mal Passada">Mal Passada</option>
                                <option value="Mal para o ponto">Mal para o ponto</option>
                                <option value="Ao ponto">Ao ponto</option>
                                <option value="Bem Passada">Bem Passada</option>
                            </select>
                    </form>

                    <p></p>

                    <form style={{display: props.varProduct ? 'block' : 'none'}}>
                    <p>Acompanhamentos</p>
            {extras.map(extra =>(
                    <div>
                        
                        <div className="extra-span" >
                                    <p style={{marginLeft: '0px', marginTop: '0px'}} >
                                    <IoIosRemove onClick={()=>{decreaseOneExtra(extra)}} style={{ fontSize: '1.5em', marginTop: '0px', marginRight: '5px'}} />
                                    {/* {getOccurrence(props.extrasCart, extra)} */}
                                    {getOccurrence(props.extrasCart, extra)}
                                    <GrFormAdd style={{fontSize: '1.5em', marginLeft: '5px'}} onClick={()=>{addToExtraCart(extra)}}  />
                                    
                                </p>
                                {extra.name } <b>R$ {extra.price.toFixed(2)}</b>
                            </div>
                    </div>
                ))} 
              

            </form>

            <form style={{display: props.plusBurger ? 'block' : 'none'}}>
            <p>Adicionais</p>
            {burgerExtra.map(extra =>(
                    <div>
                        
                        <div className="extra-span" onClick={()=>{addOneExtra(extra)}}>
                        <div><HiCheck style={{color: 'green', fontSize: '1.5em', display: extra.onCart ? 'block' : 'none'}} /></div>
                                {extra.name} <b>R$ {extra.price.toFixed(2)}</b>

                            </div>
                    </div>
                ))} 

            </form>

            <form style={{display: props.sushiExtra ? 'block' : 'none'}}>
            <p>Adicionais</p>
            {sushiExtra.map(extra =>(
                    <div>
                        
                        <div className="extra-span" >
                                    <p style={{marginLeft: '0px', marginTop: '0px'}} >
                                    <IoIosRemove onClick={()=>{decreaseOneExtra(extra)}} style={{ fontSize: '1.5em', marginTop: '0px', marginRight: '5px'}} />
                                    {getOccurrence(props.extrasCart, extra)}
                                    <GrFormAdd style={{fontSize: '1.5em', marginLeft: '5px'}} onClick={()=>{addToExtraCart(extra)}}  />
                                    
                                </p>
                                {extra.name } <b>R$ {extra.price.toFixed(2)}</b>
                            </div>
                    </div>
                ))} 

            </form>

            <form style={{display: props.varProduct ? 'block' : 'none'}}>
            <p>Adicionais</p>
            {extraAdds.map(extra =>(
                    <div>
                        
                        <div className="extra-span"  >
                        {/* <div><HiCheck style={{color: 'green', fontSize: '1.5em', display: extra.onCart ? 'block' : 'none'}} /></div> */}
                                <p style={{marginLeft: '0px', marginTop: '0px'}}>
                                    <IoIosRemove onClick={()=>{decreaseOneExtra(extra)}} style={{ fontSize: '1.5em', marginTop: '0px', marginRight: '5px'}} />
                                    {/* {getOccurrence(props.extrasCart, extra)} */}
                                    {getOccurrence(props.extrasCart, extra)}
                                    <GrFormAdd style={{fontSize: '1.5em', marginLeft: '5px'}} onClick={()=>{addToExtraCart(extra)}}  />
                                    
                                </p>
                                <div >{extra.name}</div> <b>R$ {extra.price.toFixed(2)}</b>
                                
                            </div>
                    </div>
                ))} 

            </form>
            <form className="obs-product" style={{display: props.plusBurger ? 'flex' : 'none'}}>
                
                <label>Observação</label>
                <input type="text" value={props.observation} placeholder="Ex. Sem cebola..." onChange={(e)=>{handleObs(e.target.value)}}></input>
            </form>

            <p style={{textDecoration: props.oldPrice ? 'line-through': 'none', fontSize: '0.8em'}}>{props.oldPrice ? 'R$' + props.oldPrice.toFixed(2): ''}  </p>


                <div className="flex-row">
                        <div className="product-mobile-quantity">                            
                            <IoIosRemove style={{fontSize: '1.5em', marginRight: '5px'}} onClick={decreaseOne}   />
                            <input type="number" style={{height: '20px'}} value={quantity} />
                            <GrFormAdd style={{fontSize: '1.5em', marginLeft: '5px'}} onClick={addOne}  />

                        </div>
                    
                    <h4 style={{marginTop: "30px", textAlign: 'right', marginRight: "20px"}}> {'subtotal R$ ' + (props.subtotal * quantity).toFixed(2)}</h4>
                    </div>

                    <span style={{alignSelf: 'center', justifySelf: 'flex-end'}} onClick={()=>{addToCart(props.product)}}
                   >Adicionar ao pedido</span>
                                               
            
        </div>
    )
}
