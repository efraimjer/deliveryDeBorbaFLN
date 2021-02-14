import React, {useEffect, useState} from 'react';
import './components.css';
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import { GiTacos } from "react-icons/gi";
import axios from 'axios';

import sushi from '../assets/maki_sushi-11.png'
import photo from '../assets/sushi.jpg'
import chevron from '../assets/bi_chevron-right.png'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

export default function Entries(props) {

    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        axios.get('https://delivery-deborba.herokuapp.com/delivery/entries')
            .then(res=>{
                setMenu(res.data.sort())
            })
    },[])

    var checkAvailability = require('../utils/utils').checkAvailability;

    const available = menu.filter(prod => checkAvailability(prod))

    return (
        <div>
            {/* <div className="sushi-desc">
                <h3>
                    <em>Sem cream com acréscimo de 20%.</em>
                </h3>
            </div> */}
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
        )
}
