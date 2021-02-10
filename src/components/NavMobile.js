import {React, useState, useEffect} from 'react'

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    BrowserHistory,
    Switch,
    useHistory

  } from "react-router-dom";


export default function NavMobile(props) {
    return (
        <div>
            <h3><Link onClick={()=>props.handleTabClick("Entradas")} className="link" to="/entradas">Entradas</Link></h3>                        
            <h3><Link onClick={()=>props.handleTabClick("Burger")} className="link" to="/burger">Burger</Link></h3>
            <h3><Link onClick={()=>props.handleTabClick("Steaks")} className="link" to="/grelhados">Steaks</Link></h3>
            <h3><Link onClick={()=>props.handleTabClick("Sushi")} className="link" to="/sushi">Sushi</Link></h3>
            <h3><Link onClick={()=>props.handleTabClick("Bebidas")} className="link" to="/drinks">Bebidas</Link></h3>
            <h3><Link onClick={()=>props.handleTabClick("Sobremesas")} className="link" to="/sobremesas">Sobremesas</Link></h3>
            <p className="logged-two" style={{color: 'white'}}><em>Bem Vindo: </em></p>
            <p className="logged" style={{color: 'white'}}>{props.user}</p>
            
        </div>
    )
}

