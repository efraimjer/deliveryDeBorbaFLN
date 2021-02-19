import React, {useEffect, useState} from 'react';
import './components.css';
import Sushi from './Sushi'

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

import NavMobile from './NavMobile'




import clock from '../assets/Foto-Loading-PNG.png'


import { FiShoppingBag } from "react-icons/fi";
import {FaArrowLeft} from 'react-icons/fa'
import Logo from '../assets/logo-pb-solid.png'
import checked from '../assets/checked.png'

import {
    Route,
    HashRouter,
    
   
    Link,
    Redirect,
 
    Switch,
    useHistory

  } from "react-router-dom";

export default function Menu(props) {

    
    
    const [x, setX] = useState({});
    const [product, setProduct] = useState({name: '', short: '', price: '', img:'', qty: 0});
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [] );
    const [total, setTotal] = useState(JSON.parse(localStorage.getItem('total')) ? JSON.parse(localStorage.getItem('total')) : 0);
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

    const[loading, setLoading] = useState(false)
    const[arrival, setArrival] = useState(false)

    

    const[observation, setObservation] = useState('')

    const [success, setSuccess] = useState(false)

    const [showPromo, setShowPromo] = useState(true)

    const[pcAlert, setPcAlert] = useState(false)

    

    

   

    const history = useHistory();
    

    useEffect(()=>{
        displayProduct();
        setLocalStorage('cart', cart)
        setLocalStorage('total', total)

        if(window.innerWidth > 800){
            setPcAlert(true)
        }
        


    })

    useEffect(()=>{
        
        if(window.innerWidth < 600){
            handleArrival()
        }

        

    }, [])

   const displayProduct = (props) =>{
        setProduct(x);
        setQuantity(q);
        setSubtotal(product.price? product.price * quantity : 0)
        setCart(cart)
        
   }

    const addProduct = (props) =>{
        
        setExtrasCart([])
        setObservation('')
        setP('')

        setX(props);
        setQ(1)
        

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

        

    

        

        setMobileNav(false)
        setTabName(props);

        handleLoading()


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
            setPlusBurger(true)
            setVarProduct(false)
            setSushiExtra(false)
            
        }
        
        else { 
            setVarProduct(false)
            setPlusBurger(false)
            setSushiExtra(false)
        }
    }

 
    const setLocalStorage = (key, value) =>{
        
        localStorage.setItem(key, JSON.stringify(value));

        localStorage.setItem(key, JSON.stringify(value))

        
        

        

        
    }


    const addToCart = (props) =>{


        let cartProduct = {
            name: props.name,
            code: props.code,
            subTotal: props.subTotal,
            quantity: props.quantity,
            table: props.table,
            mode: props.mode,
            group: props.group,
            extrasCart: extrasCart,
            point: p,
            observation: observation
        };

        let extrasPrice = 0;
        var hereQty = 0
        



      

        

        cartProduct.quantity += hereQty;
  
        
        cartProduct.extrasCart = extrasCart;
        
        for(let i=0; i < cartProduct.extrasCart.length; i++){
            cartProduct.extrasCart[i].quantity = cartProduct.quantity;
        }

        

        for(let i=0; i < cartProduct.extrasCart.length; i++){
            extrasPrice += cartProduct.extrasCart[i].price * cartProduct.extrasCart[i].quantity;
            
            
        }

        cartProduct.extrasPrice = extrasPrice;
       

        if(varProduct){
            cartProduct.point = p;
            
        }
        if(plusBurger){
            cartProduct.observation = observation;
            
        }  

        setCart(current => [...current, cartProduct])
        setTotal(current=> current + cartProduct.subTotal + extrasPrice )
        
        if(window.innerWidth < 600){
            setpMobile(false)
        }
        
        


        handleButtonClicked()

        handleAlert()
  


    

    }

    const removeFromCart = (props) =>{
        cart.splice(cart.indexOf(props), 1)
        // cart.extrasCart = []

        setTotal(current => current-props.subTotal - props.extrasPrice)

        if(total < 0){
            setTotal(0)
        }

    }

    const removeExtra = (cart, checkCart, extra) =>{
        //todo correct bug on delete value
        cart.subTotal -= checkCart[checkCart.indexOf(extra)].price * checkCart[checkCart.indexOf(extra)].quantity;
        
        setTotal(current => current - (checkCart[checkCart.indexOf(extra)].price * checkCart[checkCart.indexOf(extra)].quantity))

        checkCart.splice(checkCart.indexOf(extra), 1)

        

        

       

        
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

        // setTimeout(()=>{
        //     setShowAlert(false)
        // }, 3000)
    }

    const handleButtonClicked = () =>{

        setClick(true)
        

        setTimeout(()=>{
            setClick(false)
        }, 3000)

    }

    const handleCloseOrder = () =>{
        setCloseOrder(true)
        
    }

    const handleSuccess = ()=>{
        setSuccess(true)

        setTimeout(() => {
            
            setSuccess(false)
        }, 3000);
    }

    const CheckoutOrClose = () =>{
        return closeOrder ?     
        <Payment 
        user={props.user}
        total={total}
        cart={cart}
        foo={showModal}
        setCart={setCart}
        setExtrasCart={setExtrasCart}
        setTotal={setTotal}
        handleSuccess={handleSuccess}
        /> 
        :
        <Checkout 
        total={total}
        cart={cart}
        foo={showModal}
        remove={removeFromCart}
        removeExtra={removeExtra}
        handleCloseOrder={handleCloseOrder}/>   

    }

    const ShowSundayOffer = () =>{
        var date = new Date()
        



        if(date.getDay() === 0 || date.getDay() === 6){
            return <div className="drinks-button">
                        <h3><Link onClick={()=>handleTabClick("Domingo")} className="link" to="/sunday">Fim de Semana</Link></h3>
                    </div>


        }

        else{return null}
    }

    const handleLoading = () =>{
        setLoading(true)

        setTimeout(()=>{
            setLoading(false)
        }, 3000)


    }

    const handleArrival = () =>
    {
        setArrival(true)
        setTimeout(()=>{
            setArrival(false)
        }, 2000)
    }

    //todo default route with promo



    
    
    
    return (
        <div className="box">
            <HashRouter history={props.history}>
                
                <div className="container" >

                    <div className="top-mobile">
                        <div>

                            <Link to="/menu" ><FaArrowLeft className="mobile-icon" style={{color: 'white'}} /></Link>
                        </div>

                        <h2>{tabName}</h2>

                    </div>

                    <div className="nav-mobile" onClick={showMobileNav} style={{display:  mobileNav ? 'flex' : 'none'}}>
                        <h3><Link onClick={()=>handleTabClick("Entradas")} className="link" to="/entradas">Entradas</Link></h3>                        
                        <h3><Link onClick={()=>handleTabClick("Burger")} className="link" to="/burger">Burger</Link></h3>
                        <h3><Link onClick={()=>handleTabClick("Steaks")} className="link" to="/grelhados">Steaks</Link></h3>
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

                        <NavMobile
                            handleTabClick={handleTabClick}
                            addProduct={addProduct}
                            showPromo={showPromo}
                            setShowPromo={setShowPromo}
                            
                            />


                        



                        
                        {/* todo promo banner */}



                        <Switch>
                        <Route path="/entradas">
                            <Entries foo={addProduct} />
                        </Route>

                        

                        <Route exact path="/sushi">
                            <Sushi foo={addProduct} />
                        </Route>
                        <Route exacct path="/burger">
                            <Burger foo={addProduct} />
                        </Route>
                        <Route  exact path="/grelhados">
                            <Grilled foo={addProduct} />
                        </Route>
                        <Route exact path="/drinks">
                            <Drinks foo={addProduct} />
                        </Route>

                        <Route exact path="/sobremesas">
                            <Desserts foo={addProduct} />
                        </Route>

                        <Route exact path="/sunday">
                            <Sunday foo={addProduct} />
                        </Route>

                        <Redirect from="*" to="/" />

                        
                        </Switch>

                        <div className="alert" style={{display: cart.length > 0 ? 'flex' : 'none'}} onClick={()=>{setShow(true)}}>
                            <FiShoppingBag className="mobile-icon" />
                            <p className="basket-counter-mobile">{cart.length}</p>
                            <p>VER CARRINHO</p>
                            <p>{'R$ ' + total.toFixed(2)}</p>
                        </div>
                        
      
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
                setObservation={setObservation}
                observation={observation}
                cart={cart}
                setCart={setCart}
                p={p}

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
            
            

            
            
            <div style={{display:  show ? 'flex' : 'none'}} className="modal">
                <CheckoutOrClose />
            </div>

            <div className="loading-modal" style={{display: loading ? 'flex' : 'none'}} >
                <img src={clock} alt="loading" className="clock-loading" />
                <h4>Só um Segundo...</h4>
                <p>Estamos buscando o cardápio para você!</p>
            </div>

            {handleArrival}

            </HashRouter>

            <div className="confirmation-modal" style={{display: success ? 'flex' : 'none'}} >
                <img src={checked} alt="" style={{width: '100px'}} />
                <p>seu pedido foi enviado com sucesso</p>
                <p>logo enviaremos a confirmação quando ele estiver pronto</p>

            </div>

            <div className="pcALertModal" style={{display: pcAlert ? 'flex' : 'none'}}>
                <img src={Logo} alt=""></img>
                <h1>Esse aplicativo só é acessível por dispositivos móveis</h1>

            </div>

        </div>

    )
}
