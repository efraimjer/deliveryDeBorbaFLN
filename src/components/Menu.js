import React, {useEffect, useState} from 'react';
import './components.css';
import Sushi from './Sushi'
import LandingPage from './LandingPage'
import Burger from './Burger'
import Entries from './Entries'
import Grilled from './Grilled'
import Drinks from './Drinks'
import Checkout from './Checkout'
import Product from './Product'
import Productmobile from './Productmobile'
import Payment from './Payment';
import Sunday from './Sunday'
import Desserts from './Desserts'


// import { IoAddCircleSharp, IoBasketOutline} from "react-icons/io5";
import { IoIosRemoveCircle, IoIosCloseCircle, IoMdMenu } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import Logo from '../assets/logo-pb-solid.png'


import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link,
    BrowserHistory,
    Switch,
    useHistory

  } from "react-router-dom";
import { FaThermometerHalf } from 'react-icons/fa';

export default function Menu(props) {
    
    const [x, setX] = useState({});
    const [product, setProduct] = useState({name: '', short: '', price: '', img:'', qty: 0});
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [show, setShow] = useState(false);
    const [subtotal, setSubtotal] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [q, setQ] = useState(1);
    const [pMobile, setpMobile] = useState(false);
    const [tabName, setTabName] = useState("");
    const [p, setP] = useState("");
    const[varProduct, setVarProduct] = useState(false);
    const[showAlert, setShowAlert] = useState(false);
    const[plusBurger, setPlusBurger] = useState(false);
    const[sushiExtra, setSushiExtra] = useState(false);

    const[extrasCart, setExtrasCart] = useState([])

    const[extraPrice, setExtraPrice] = useState(0);

    const[click, setClick] = useState(false);

    const[mobileNav, setMobileNav] = useState(false);
    const[closeOrder, setCloseOrder] = useState(false);

    const history = useHistory();
    

    useEffect(()=>{
        displayProduct();

    })

   const displayProduct = (props) =>{
        setProduct(x);
        setQuantity(q);
        setSubtotal(product.price? product.price * quantity : 0)
        setCart(cart)
        console.log("quantity " + quantity)
   }

    const addProduct = (props) =>{
        setX(props);
        setQ(1)
        console.log(props.photo)

        if(window.innerWidth < 600){
            setpMobile(true)
        }

        displayExtras(props)


    }

    const displayExtras = (props) =>{
        if(props.group === 'Steaks'){
            setVarProduct(true)
            setPlusBurger(false)
            setSushiExtra(false)  
        }

        else if(props.group === 'Burguers'){
            setPlusBurger(true)
            setVarProduct(false)
            setSushiExtra(false)
            console.log(x)
        }

        else if(props.group === 'Combinados Sushi' || props.group === "Especiais Sushi" ){
            setPlusBurger(false)
            setVarProduct(false)
            setSushiExtra(true)
        }

        else { 
            setVarProduct(false)
            setPlusBurger(false)
            setSushiExtra(false)
        }


        
    }

    const handleMeatPoint = (props) =>{
        setP(props)
    }

    const handlePlusBurger = (props) =>{
        setP(props);
        setExtraPrice(5)

        if(props === ""){
            setExtraPrice(0)
        }

    }

    const handleTabClick = (props) =>{
        setTabName(props);

        // if(props === 'Steaks'){
        //     setVarProduct(true)
        //     setPlusBurger(false)
        //     setSushiExtra(false)
            
        //     console.log(x)
        // }

        let fakeProduct = {
            name: "",
            price: 0,
            photo: "",
            short: "",
            long: "",
            group:""
        }

        if(window.innerWidth > 600){
            addProduct(fakeProduct)
        }

        
        
        if(props === 'Burger'){
            setPlusBurger(false)
            setVarProduct(false)
            setSushiExtra(false)
            console.log(x)
        }
        
        else { 
            setVarProduct(false)
            setPlusBurger(false)
            setSushiExtra(false)
        }
    }

    const addToCart = ( props, qyantidade) =>{

        props.extrasCart = extrasCart;
        let extrasPrice = 0;

        for(let i=0; i < props.extrasCart.length; i++){
            extrasPrice += props.extrasCart[i].price;
            console.log(extrasPrice)
        }

        props.extrasPrice = extrasPrice;

        if(varProduct || plusBurger){
            props.point = p;
        }
        else{props.point = ""}

        for(let i = 0; i < quantity; i++){
            setCart(current => [...current, props])
            setTotal(current=> current + props.price + extrasPrice)
            console.log("type total " + total)
        }

        if(window.innerWidth < 600){
            setpMobile(false)
        }

        handleButtonClicked()

        handleAlert()

        setExtrasCart([])
    }

    const removeFromCart = (props) =>{
        cart.splice(cart.indexOf(props), 1)

        setTotal(current => current-props.price-props.extrasPrice)

        if(total < 0){
            setTotal(0)
        }

    }

    const addOne = ()=>{
        setQ(current=> current + 1)
    }

    const decreaseOne = ()=>{
        if(q > 1){
        setQ(current=> current - 1)
        }
        else setQ(1)
    }

    const showModal = () =>{
        show ? setShow(false) : setShow(true)
        setCloseOrder(false)
    }

    const showMobileNav = () =>{
        mobileNav ? setMobileNav(false) : setMobileNav(true);
        
    }

    const showPmobile = () =>{
        pMobile ? setpMobile(false) : setpMobile(true)
    }

    const handleAlert = () =>{
        setShowAlert(true)

        setTimeout(()=>{
            setShowAlert(false)
        }, 3000)
    }

    const handleButtonClicked = () =>{

        setClick(true)
        console.log("click")

        setTimeout(()=>{
            setClick(false)
        }, 3000)

    }

    const handleCloseOrder = () =>{
        setCloseOrder(true)
        console.log(props.user)
    }

    const CheckoutOrClose = () =>{
        return closeOrder ?     
        <Payment 
        user={props.user}
        total={total}
        cart={cart}
        foo={showModal}
        /> 
        :
        <Checkout 
        total={total}
        cart={cart}
        foo={showModal}
        remove={removeFromCart}
        handleCloseOrder={handleCloseOrder}/>   

    }

    const ShowSundayOffer = () =>{
        var date = new Date()
        console.log("day"+date.getDay())



        if(date.getDay() === 0 || date.getDay() === 6){
            return <div className="drinks-button">
                        <h3><Link onClick={()=>handleTabClick("Domingo")} className="link" to="/sunday">Fim de Semana</Link></h3>
                    </div>


        }

        else{return null}
    }


    //todo default route with promo
    

    
    
    // console.log(cart)
    return (
        <div className="box">
            <Router>
                
                <div className="container" >

                    <div className="top-mobile">
                        <div>
                            <IoMdMenu className="mobile-icon" onClick={showMobileNav} />
                            <FiShoppingBag className="mobile-icon" onClick={()=>{setShow(true)}}/>
                            <p className="basket-counter-mobile">{cart.length}</p>
                        </div>

                        <h2>{tabName}</h2>

                    </div>

                    <div className="nav-mobile" onClick={showMobileNav} style={{display:  mobileNav ? 'flex' : 'none'}}>
                        <h3><Link onClick={()=>handleTabClick("Entradas")} className="link" to="/entradas">Entradas</Link></h3>                        
                        <h3><Link onClick={()=>handleTabClick("Burger")} className="link" to="/burger">Burger</Link></h3>
                        <h3><Link onClick={()=>handleTabClick("Steaks")} className="link" to="/grelhados">Grelhados</Link></h3>
                        <h3><Link onClick={()=>handleTabClick("Sushi")} className="link" to="/sushi">Sushi</Link></h3>
                        <h3><Link onClick={()=>handleTabClick("Bebidas")} className="link" to="/drinks">Bebidas</Link></h3>
                        <h3><Link onClick={()=>handleTabClick("Sobremesas")} className="link" to="/sobremesas">Sobremesas</Link></h3>
                        <p className="logged-two" style={{color: 'white'}}><em>Bem Vindo: </em></p>
                        <p className="logged" style={{color: 'white'}}>{props.user.name}</p>
                    </div>




                    <div className="nav">
                        <img alt="logo de Borba" src={Logo} />

                            <div className="entries-button">
                                <h3><Link onClick={()=>handleTabClick("Entradas")} className="link" to="/entradas">Entradas</Link></h3>
                            </div>

                            <div className="burger-button">
                                <h3><Link onClick={()=>handleTabClick("Burger")} className="link" to="/burger">Burger</Link></h3>
                            </div>

                            <div className="grilled-button">
                                <h3><Link onClick={()=>handleTabClick("Steaks")} className="link" to="/grelhados">Steaks</Link></h3>
                            </div>

                            <div className="sushi-button">
                                <h3><Link onClick={()=>handleTabClick("Sushi")} className="link" to="/sushi">Sushi</Link></h3>
                            </div>

                            <div className="drinks-button">
                                <h3><Link onClick={()=>handleTabClick("Bebidas")} className="link" to="/drinks">Bebidas</Link></h3>
                            </div>

                            <div className="drinks-button">
                                <h3><Link onClick={()=>handleTabClick("Sobremesas")} className="link" to="/sobremesas">Sobremesas</Link></h3>
                            </div>

                            <ShowSundayOffer />




                        <div>
                            <p className="basket-counter">{cart.length}</p>
                            <FiShoppingBag className="basket-icon" onClick={showModal}/>
                        </div>
                        <p className="logged-two"><em>Bem Vindo: </em></p>
                        <p className="logged">{props.user.name}</p>

                    </div>
                    <div className="card">
                        <Switch>
                        <Route exact path="/entradas">
                            <Entries foo={addProduct} />
                        </Route>

                        

                        <Route path="/sushi">
                            <Sushi foo={addProduct} />
                        </Route>
                        <Route path="/burger">
                            <Burger foo={addProduct} />
                        </Route>
                        <Route path="/grelhados">
                            <Grilled foo={addProduct} />
                        </Route>
                        <Route path="/drinks">
                            <Drinks foo={addProduct} />
                        </Route>

                        <Route path="/sobremesas">
                            <Desserts foo={addProduct} />
                        </Route>

                        <Route path="/sunday">
                            <Sunday foo={addProduct} />
                        </Route>

                        {/* <Route path="/"><LandingPage /></Route> */}
                        </Switch>

                        <span className="alert" style={{display: showAlert ? 'block' : 'none'}}>Item adicionado com sucesso!</span>
                        
      
                    </div>

            <Productmobile
                product={product}
                quantity={quantity}
                subtotal={subtotal}
                addOne={addOne}
                decreaseOne={decreaseOne}
                addToCart={addToCart}
                showPmobile ={showPmobile}
                pMobile={pMobile}
                handleMeatPoint={handleMeatPoint}
                varProduct={varProduct}
                handlePlusBurger={handlePlusBurger}
                extraPrice={extraPrice}
                plusBurger={plusBurger}
                sushiExtra={sushiExtra}
                click={click}
                setExtrasCart={setExtrasCart}
                extrasCart={extrasCart}

            />

            <Product
                product={product}
                quantity={quantity}
                subtotal={subtotal}
                
                addOne={addOne}
                decreaseOne={decreaseOne}
                addToCart={addToCart}
                handleMeatPoint={handleMeatPoint}
                handlePlusBurger={handlePlusBurger}
                extraPrice={extraPrice}
                varProduct={varProduct}
                plusBurger={plusBurger}
                sushiExtra={sushiExtra}
                click={click}
                setExtrasCart={setExtrasCart}
                extrasCart={extrasCart}
                
                />



            </div>
            
            

            </Router>
            
            <div style={{display:  show ? 'flex' : 'none'}} className="modal">

                <CheckoutOrClose />

            </div>
        </div>

    )
}
