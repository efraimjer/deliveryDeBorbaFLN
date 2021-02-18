import {React, useState, useEffect} from 'react'

import { FaHamburger, FaCandyCane } from "react-icons/fa";
import { GiSteak, GiTacos, GiSushis } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import borbaburger from '../assets/borbaburger.png'

import './css/nav-mobile.css'

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
    

    const[menuItem, setMenuItem] = useState({entries: false, burger: false, steaks: false, sushi: false, drinks: false, desserts: false})

    const iconMenuClick = (menu) =>{

        props.setShowPromo(false)
        props.handleTabClick(menu)

        switch (menu) {
        
        case 'Entradas':
            setMenuItem({entries: true, burger: false, steaks: false, sushi: false, drinks: false, desserts: false })
  

            
            break;
        
        case'Burger':
        setMenuItem({entries: false, burger: true, steaks: false, sushi: false, drinks: false, desserts: false })

            break;

        case 'Steaks':
            setMenuItem({entries: false, burger: false, steaks: true, sushi: false, drinks: false, desserts: false })

            break;

        case 'Sushi':
            setMenuItem({entries: false, burger: false, steaks: false, sushi: true, drinks: false, desserts: false })
            break;
        
        case 'Bebidas':
            setMenuItem({entries: false, burger: false, steaks: false, sushi: false, drinks: true, desserts: false })
            break;
        
        case 'Sobremesas':
            setMenuItem({entries: false, burger: false, steaks: false, sushi: false, drinks: false, desserts: true })
            break;


        default: break;
        }
    }

    const addPromo = () =>{
        var borbaBurger = {
            "code": 51,
            "name": "Hot Filadelphia",
            "short": "08un",
            "long": "",
            "photo": "https://letecacom.live/images/deborba/hot.jpeg",
            "pontuation": null,
            "price": 10.99,
            "isAvailable": true,
            "table": "PADRÃO",
            "mode": "Todos",
            "group": "Especiais Sushi"
            
        }

        // props.setShowPromo(false)

        props.addProduct(borbaBurger)
        setMenuItem({entries: false, burger: false, steaks: false, sushi: true, drinks: false, desserts: false })
    }
    


    return (
        <div>
            <div className="nav-on-cart">
                <Link onClick={()=>iconMenuClick("Entradas")} className={menuItem.entries ? "link-nav-on-cart link-nav-cart-active" : "link-nav-on-cart"} to="/entradas">
                    <GiTacos className="nav-icon"/>
                    Entradas
                </Link>
                <Link onClick={()=>iconMenuClick("Burger")} className={menuItem.burger ? "link-nav-on-cart link-nav-cart-active" : "link-nav-on-cart"} to="/burger">
                    <FaHamburger className="nav-icon"/>
                    Burger</Link>
                <Link onClick={()=>iconMenuClick("Steaks")} className={menuItem.steaks ? "link-nav-on-cart link-nav-cart-active" : "link-nav-on-cart"} to="/grelhados">
                    <GiSteak className="nav-icon"/>
                    Steaks</Link>
                <Link onClick={()=>iconMenuClick("Sushi")} className={menuItem.sushi ? "link-nav-on-cart link-nav-cart-active" : "link-nav-on-cart"} to="/sushi">
                    <GiSushis className="nav-icon"/>
                    Sushi</Link>
                <Link onClick={()=>iconMenuClick("Bebidas")} className={menuItem.drinks ? "link-nav-on-cart link-nav-cart-active" : "link-nav-on-cart"} to="/drinks">
                    <BiDrink className="nav-icon"/>
                    Bebidas</Link>
                <Link onClick={()=>iconMenuClick("Sobremesas")} className={menuItem.desserts ? "link-nav-on-cart link-nav-cart-active" : "link-nav-on-cart"} to="/sobremesas">
                    <FaCandyCane className="nav-icon"/>
                    Sobremesas</Link>
            </div>

            <div onClick={addPromo} style={{display: props.showPromo ? 'block' : 'none'}}>
                            <h3>Promo do dia</h3>
                            <img src={'https://letecacom.live/images/deborba/banner%20site.jpg'} style={{width: '80vw'}} alt="" />
            </div>
    </div>
    )
}

