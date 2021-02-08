import React, {useEffect, useState} from 'react';
import './components.css'
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import axios from 'axios';
import burger from '../assets/cil_burger.png'
import { FaCandyCane } from "react-icons/fa";

export default function Desserts(props) {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        axios.get('https://delivery-deborba.herokuapp.com/delivery/desserts')
            .then(res=>{
                setMenu(res.data.sort())
            })
    })

    //implement a way to use filter(is available)
    const isAvailable = (prod) =>{ 
        return prod.isAvailable;
    }

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
                                <FaCandyCane className="food-icon" />
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