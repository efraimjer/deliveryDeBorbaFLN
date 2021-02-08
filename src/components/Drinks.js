import React, {useEffect, useState} from 'react';
import './components.css';
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import { BiDrink } from "react-icons/bi";
import axios from 'axios';
import burger from '../assets/cil_burger.png'

import photo from '../assets/hamburguer.png'

export default function Drinks(props) {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        axios.get('https://delivery-deborba.herokuapp.com/delivery/drinks')
            .then(res=>{
                setMenu(res.data.sort())
            })
    })

    var checkAvailability = require('../utils/utils').checkAvailability;

    const available = menu.filter(prod => checkAvailability(prod))

    return (
        <div >
            {/* <div className="burger-desc">
                <h3>
                    <em>Todos acompanham batata e maionese.</em>
                </h3>

            </div> */}
            {available.map(item =>(
                        <div className="product-box" >
                            <div className="img-box">
                               <BiDrink className="food-icon"/>
                            </div>
                            <div>
                                <h4>{item.name} </h4>
                                <p>{item.short}</p>
            
                            </div>
                            <div className="chevron" onClick={()=>{props.foo(item)}}>
                                  <IoIosArrowDropright className="chevron-arrow-right" />        
                            </div>
                        </div>
                       
            ))}
            

                  
            
        </div>
    )
}
