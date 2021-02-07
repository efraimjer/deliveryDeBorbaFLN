import {React, useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

  import {GrInstagram, GrFacebookOption} from "react-icons/gr"
  import {ImWhatsapp} from "react-icons/im"
  import {MdAccountBox} from "react-icons/md"
  import {GiHamburgerMenu} from "react-icons/gi"

  import video from '../assets/show.mp4'
  import logo from '../assets/logo-pb-solid.png'
  import whitelogo from '../assets/logo.png'
  import moto from '../assets/motoboy.png'
  import map from '../assets/route.jpg'
  import earlyImg from '../assets/earlycommer.jpg'

  import helder from '../assets/helder.jpg'
  import daniel from '../assets/daniel.jpg'

  import './css/lp.css'

export default function LandingPage() {

    const[showModal, setShowModal] = useState(false)
    const[early, setShowEarly] = useState(false)
    const[showNavBurger, setShowNavBurger] = useState(false)

    var date = new Date()

    var hour = date.getHours()

    console.log(hour)

    const isOpen = () =>{
        if(hour > 18 && hour < 23){
            return "/menu"
        }

        else return "/"

        
    }

    const showEarlyAdvice = () =>{
        if(hour < 18 || hour > 23){
            setShowEarly(true)
        }

    }

    const handleBurgerClick = () =>{
        showNavBurger ? setShowNavBurger(false) : setShowNavBurger(true);
    }

    const handleModal = () =>{showModal ? setShowModal(false) : setShowModal(true)}

    const handleEarlyModal = () =>{setShowEarly ? setShowEarly(false) : setShowEarly(true)}

    return (
        <div className="body">
            <div className="nav-lp">
                <div className="social-media">
                    <a href="https://www.instagram.com/deborbadelivery" rel="noreferrer" target="_blank">
                       <GrInstagram />
                    </a>
                    <a href="https://www.facebook.com/deborbadelivery" rel="noreferrer" target="_blank">
                       <GrFacebookOption />
                    </a>
                    <a href="">
                       <ImWhatsapp />
                    </a>

                </div>

                <div className="hamburger-button" onClick={handleBurgerClick}>
                    <GiHamburgerMenu />
                </div>

                <div className="nav-burger" onClick={handleBurgerClick} style={{display: showNavBurger ? "flex" : "none"}}>
                    <Link to={isOpen} onClick={showEarlyAdvice}>
                        Faça seu Pedido
                    </Link>
                    <a href="#">

                        Promoções</a>
                    <a href="#about">Quem somos</a>

                    <a href="#" onClick={handleModal}>Área de entrega</a>
                        

                </div>

                <div className="nav-bar">
                    <Link to={isOpen} onClick={showEarlyAdvice}>

                        Faça seu Pedido
                    </Link>
                    <a href="#">
                        
                        Promoções</a>
                    <a href="#about">Quem somos</a>

                    <a href="#" onClick={handleModal}>
                        
                        Área de entrega</a>
                   

                </div>

            </div>
            <div className="reception">
                <div className="logo-lp">
                    <img alt="logo" src={logo}></img>
                </div>
                <h2>O melhor Delivery que você irá provar</h2>
                <h1>FLORIANOPÓLIS - SC</h1>
                <div className="moto-bg">
                    <img alt="mobotoy doodle" src={moto}></img>
                </div>

            </div>


            <div className="grid">
                <div className="grid-box">
                    <h2>BURGER</h2>
                    <p>Burgers artesanais bom blend de carne Angus, grelhados e complementados 
                        com as melhores combinações possíveis.
                    </p>
                    <div className="burger-grid-box"></div>

                </div>

                <div className="grid-box">
                    <h2>STEAK</h2>
                    <p>Nossas carnes são assadas ao estilo Americano e levam um mix especial de temperos naturais.
Todos os steaks são acompanhados de molho Barbecue.
 A gramatura dos produtos equivale ao peso in natura.</p>
                <div className="steak-grid-box"></div>

                    
                </div>

                <div className="grid-box">
                    <h2>SUSHI</h2>
                    <p>Receitas exclusivas feitas pelo nosso chef com a intenção de acabar com sua zona de conforto.</p>
                    <div className="sushi-grid-box"></div>
                </div>

            </div>


            <div className="sunday-special">
                
            </div>
            <div className="video-box">
                <div className="menu-button">
                    <p>De segunda a sábado, das 18:30 às 23:30, você tem disponível um cardápio variado com <b>steaks, hamburgers e sushis</b>, que você pede no nosso aplicativo.</p>
                    <p>Sábados e domingos você conta com <b>costela e frango assado</b> para o seu almoço, disponíveis na modalidade take away (retirados em nosso endereço).</p>
                    <p>Trabalhamos com <b>TAKE AWAY:</b> Você pode escolher retirar seus pedidos em nosso espaço, conhecer a equipe e ver a mágica acontecendo.</p>
                    <p>Conheça nossa área de pedidos exclusiva</p>
                    <Link to={isOpen} onClick={showEarlyAdvice}>
                        Entrar
                    </Link>
                </div>
                <video width="1366" height="800" loop autoPlay={true} muted>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

            <div className="about"id="about">
                <div className="about-box">
                    <img alt="daniel" src={daniel}></img>
                </div>
                <div className="about-box-midle">
                    <h1>Quem Somos</h1>
                    <p></p>
                </div>
                <div className="about-box">
                    <img alt="helder" src={helder}></img>
                </div>

            </div>

            <div className="footer-lp">
                <div className="footer-map">
                    <h3>Como chegar</h3>
                    <iframe title="como chegar" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.3520798105333!2d-48.582322652887726!3d-27.582612065885712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737df8bef2e61%3A0x8e4c61b6be4b7ba6!2sR.%20Jos%C3%A9%20C%C3%A2ndido%20da%20Silva%2C%20192%20-%20Balneario%2C%20Florian%C3%B3polis%20-%20SC%2C%2088075-250!5e0!3m2!1spt-BR!2sbr!4v1612711996407!5m2!1spt-BR!2sbr"
                    width="280" height="200" frameborder="0" 
                    allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="footer-social-media">
                    <a href="https://www.instagram.com/deborbadelivery" rel="noreferrer" target="_blank">
                       <GrInstagram />
                    </a>
                    <a href="https://www.facebook.com/deborbadelivery" rel="noreferrer" target="_blank">
                       <GrFacebookOption />
                    </a>
                    <a href="">
                       <ImWhatsapp />
                    </a>

                </div>
                <div className="working-hours">
                    <h2>Horário</h2>
                    <h3>Seg - Sáb 18:30hs às 23:30hs</h3>
                    <h3>Sáb - Dom 11:30hs às 13hs*</h3>
                    <p>*COSTELA E FRANGO ASSADO COM ACOMPANHAMENTOS</p>
                </div>
                <div className="footer-logo">
                    <img alt="logo" src={whitelogo}></img>
                </div>


            </div>

            <div className="sub-footer">
                <p>All rights reserved <b>DH Gastronomia</b></p>
                <p>Desenvolvido por <a href="https://www.letecacom.live"><b>Leteca Comunicação</b></a></p>
            </div>
            <div class="lp-modal" style={{display: showModal ? 'flex' : 'none'}} onClick={handleModal}>
                <img alt="rotas" src={map}></img>
                <div
                className='routes-list'>
                    <h3>Bairros e regiões atendidos pelo nosso Delivery</h3>
                    <div>
                        <ul>
                            <li>Balneário</li>
                            <li>Canto</li>
                            <li>Coloninha</li>
                            <li>Jardim Atlântico</li>
                            <li>Sapé</li>
                            <li>Barreiros</li>
                            <li>Campinas</li>
                            <li>Santos Dumont</li>
                            <li>Monte Cristo</li>
                            <li>Kobrasol</li>
                            
                        </ul>
                        <ul>
                            <li>Bom Retiro</li>
                            <li>Abraão</li>
                            <li>Itaguaçu</li>
                            <li>Coqueiros</li>
                            <li>Capoeiras</li>
                            <li>Centro</li>                        
                            <li>Agronômica</li>
                            <li>Trindade</li>
                            <li>Bosque das missões</li>
                        </ul>
                    </div>

                    <Link to={isOpen} onClick={showEarlyAdvice} className="lp-modal-button">Fazer Pedido</Link>

                </div>

                

            </div>

            <div class="lp-modal" style={{display: early ? 'flex' : 'none'}} onClick={handleEarlyModal}>
                <img style={{width: "400px", height:"400px"}} alt="rotas" src={earlyImg}></img>             
                

            </div>
        </div>
    )
}
