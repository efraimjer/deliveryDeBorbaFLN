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
            "code": 33,
            "name": "Combo 03",
            "short": "60 peças",
            "long": "Filadelphia de salmão(10un), Sashimi de salmão(10un), Folha de Arroz, salmão, palmito, cheese e cebolinha(10un), Folha de Arroz, salmão, atum, cheese e cebolinha(10un), Niguiri de Salmão(10un), Gunkan jow(10un)",
            "photo": "http://efraimjer.tk/deborba/app/combo3.jpg",
            "pontuation": null,
            "price": 149.9,
            "isAvailable": true,
            "table": "PADRÃO",
            "mode": "Todos",
            "group": "Combinados Sushi"
            
        }

        // props.setShowPromo(false)

        props.addProduct(borbaBurger)
        setMenuItem({entries: false, burger: false, steaks: false, sushi: true, drinks: false, desserts: false })
    }

    var date = new Date()
    


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
                            <h3>Mais Recomendados</h3>
                            <img src={'http://efraimjer.tk/deborba/app/banner%20site.jpg'} style={{width: '80vw'}} alt="" />
            </div>

            <div className='flex-column' style={{display: props.showPromo ? 'flex' : 'none',justifyContent: 'space-between', alignItems: 'center', width: '90vw'}}>
                <h3>Horário de Atendimento</h3>
                <p style={{display: date.getHours() < 18 || date.getHours() > 23 ? 'block' : 'none', color: 'red', margin: '0px -10px 0px -10px' }}>fechado agora</p>

                <div className="flex-row" style={{marginLeft: '20px',justifyContent: 'space-between', width: '90vw', height: '25px'}}>
                    <p>Segunda Feira</p>
                    <p>18:30 às 23:30</p>
                </div>
                <div className="flex-row" style={{marginLeft: '20px',justifyContent: 'space-between', width: '90vw', height: '25px'}}>
                    <p>Terça Feira</p>
                    <p>18:30 às 23:30</p>
                </div>
                <div className="flex-row" style={{marginLeft: '20px',justifyContent: 'space-between', width: '90vw', height: '25px'}}>
                    <p>Quarta Feira</p>
                    <p>18:30 às 23:30</p>
                </div>
                <div className="flex-row" style={{marginLeft: '20px',justifyContent: 'space-between', width: '90vw', height: '25px'}}>
                    <p>Quinta Feira</p>
                    <p>18:30 às 23:30</p>
                </div>
                <div className="flex-row" style={{marginLeft: '20px',justifyContent: 'space-between', width: '90vw', height: '25px'}}>
                    <p>Sexta Feira</p>
                    <p>18:30 às 23:30</p>
                </div>
                <div className="flex-row" style={{marginLeft: '20px',justifyContent: 'space-between', width: '90vw', height: '25px'}}>
                    <p>Sábado</p>
                    <p>11:30 às 14:00</p>
                    <p>18:30 às 23:30</p>
                </div>
                <div className="flex-row" style={{marginLeft: '20px',justifyContent: 'space-between', width: '90vw', height: '25px'}}>
                    <p>Domingo</p>
                    <p>11:30 às 14:00</p>
                </div>

            </div>
            <div className='flex-column' style={{display: props.showPromo ? 'flex' : 'none',justifyContent: 'space-between', alignItems: 'center', width: '90vw'}}>
                <h4>Dh Gastronomia Ltda</h4>
                <a href="https://bit.ly/deBorbaDelivery">whatsapp 48 3206 3826 </a>
                <a href="mailto:deborbadelivery.com.br">deborbadelivery.com.br</a>

            </div>

            
    </div>
    )
}

