import React, {useEffect, useState} from 'react';
import './components.css'

import axios from 'axios';
import ReactLoading from 'react-loading'







export default function Burger(props) {

    const [menu, setMenu] = useState([]);
    const [isDone, setIsDone] = useState(false)

    useEffect(()=>{
        axios.get('https://delivery-deborba.herokuapp.com/delivery/burger')
            .then(res=>{
                setMenu(res.data.sort())
            })
            .then(setIsDone(true))
    }, [])

    //implement a way to use filter(is available)
    const isAvailable = (prod) =>{
        return prod.isAvailable;
    }

    var checkAvailability = require('../utils/utils').checkAvailability;

    const available = menu.filter(prod => checkAvailability(prod))

    

    return (
        <div onCLick="">

            <h4 style={{width: '90vw', textAlign: 'justify'}}>Todos os Burgers vão acompanhados de fritas, maionese e molho agridoce</h4>

            {!isDone ? <ReactLoading type={"bubles"}  color={"#fa8072"} height={"32px"} width={"32px"} /> : (
                <div>
                {available.map(item =>(
                            <div className="product-box" onClick={()=>{props.foo(item)}} >
                            <div className="img-box">
                                <img src={item.photo} alt=""></img>
                            </div>
                            <div>
                                <h4>{item.name} </h4>
                                <p>{item.short}</p>
                                <p ><b>R$ {item.price.toFixed(2)}</b></p>
            
                            </div>


                            
                        </div>
                       
            ))}
            </div>
            )}
            

                  
            
        </div>
    )
}
