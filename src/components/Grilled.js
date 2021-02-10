import React, {useEffect, useState} from 'react';
import './components.css';
import { IoIosArrowDropright} from "react-icons/io";
import { GiSteak } from "react-icons/gi";
import axios from 'axios';
import burger from '../assets/cil_burger.png'

import photo from '../assets/hamburguer.png'

export default function Grilled(props) {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        axios.get('https://delivery-deborba.herokuapp.com/delivery/stakes')
            .then(res=>{
                setMenu(res.data.sort())
            })
    })

    var checkAvailability = require('../utils/utils').checkAvailability;

    const available = menu.filter(prod => checkAvailability(prod));



    return (
        <div >
            {/* <div className="burger-desc">
                <h3>
                    <em>Todos acompanham batata e maionese.</em>
                </h3>

            </div> */}
            {available.map(item =>(
                        <div className="product-box" onTouchStart={()=>{props.foo(item)}} onClick={()=>{props.foo(item)}}>
                            <div className="img-box">
                                <GiSteak className="food-icon" />
                            </div>
                            <div>
                                <h4>{item.name} </h4>
                                <p>{item.short}</p>
            
                            </div>
                            <div className="chevron" >
                                  <IoIosArrowDropright className="chevron-arrow-right" />        
                            </div>
                        </div>
                       
            ))}
            

                  
            
        </div>
    )
}
