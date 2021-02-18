import React, {useEffect, useState} from 'react';
import './components.css';
import './css/checkout.css';
import InputMask from 'react-input-mask';
import axios from 'axios';

import clock from '../assets/Foto-Loading-PNG.png'
import denied from '../assets/denied.png'


// import { IoAddCircleSharp, IoBasketOutline} from "react-icons/io5";
import { IoIosRemoveCircle, IoIosCloseCircle, IoMdMenu, IoIosPricetag } from "react-icons/io";
import {BiChevronLeftCircle} from 'react-icons/bi'

export default function Payment(props) {

    const[frete, setFrete] = useState(0);
    const[final, setFinal] = useState(0);
    
    // const[cardFinal, setCardFinal] = useState(0)

    const[motoboy, setMotoboy] = useState(false)

    const[phone, setPhone] = useState('')
    const[adress, setAdress] = useState('')

    const[deliver, setDeliver] = useState(false)

    const[name, setName]= useState('');

    const[newName, setNewName]= useState('')
    const[cardNumber, setCardNumber]= useState(0);
    const[secureCode, setSecureCode]= useState('')
    const[expMonth, setExpMonth]= useState('')
    const[expYear, setExpYear]= useState('')
    const[method, setMethod] = useState('')
    const[option, setOption] = useState('')
    const[nb, setNb] = useState('')
    const[houseNumber, setHouseNumber] = useState('')
    const[reference, setReference] = useState('')

    const[loading, setLoading] = useState(false)

    
    const[doDeliver, setDoDeliver] = useState(false)
    const[dontDeliver, setDontDeliver] = useState(false)


    const[cep, setCep] = useState(0)
    const[cepRes, setCepRes] = useState({})

    const[payByApp, setPayByApp] = useState(false)

    const[takeAway, setTakeAway] = useState(false)

    const [input, setInput] = useState({adress: '', name: '', phone: ''})

    const[motoboyCard, setMotoboyCard] = useState(false)
    const[motoboyMoney, setMotoboyMoney] = useState(false)

    const[change, setChange] = useState('')

    const date = new Date()

   

    const [payButton, setPayButton] = useState(false)
    const[payButtonText, setPayButtonText] = useState('')

    const[cardPayment, setCardPayment] = useState(false)

    const[paymentError, setPaymentError] = useState(false)

    const[invalidCep, setInvalidCep] = useState(false)

    

    // const[confirmation, setConfirmation] = useState(false)

    useEffect(() => {

        //TODO response from payment

    },[])

    const checkDelivery = () =>{

        setInvalidCep(false)
        
            

        switch (cepRes.bairro) {
            case 'Balneário':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(4)
                break;

            case 'Canto':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(4)              
                break;

            case 'Coloninha':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(4)              
                break;

            case 'Jardim Atlântico':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(4)               
                break;

            case 'Sapé':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(5)             
                break;

            case 'Barreiros':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(5)         
                break;

            case 'Campinas':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(6)             
                break;

            case 'Santos Dumont':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro) 
                setFrete(6)             
                break;

            case 'Monte Cristo':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro) 
                setFrete(6)              
                break;

            case 'Kobrasol':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(7)             
                break;

            case 'Bom Abrigo':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro) 
                setFrete(7)              
                break;

            case 'Abraão':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro) 
                setFrete(6)              
                break;

            case 'Itaguaçu':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)    
                setFrete(7)            
                break;

            case 'Coqueiros':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)  
                setFrete(6)              
                break;

            case 'Capoeiras':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(5)              
                break;

            case 'Centro':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(7)               
                break;

            case 'Agronômica':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)  
                setFrete(7)             
                break;

            case 'Trindade':                
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)  
                setFrete(9)              
                break;

            case 'Bosque das Missões':
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro) 
                setFrete(7)               
                break;


            case 'Estreito':
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro) 
                setFrete(4)               
                break;


            





            default:
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;
        }

    

        

        setFinal(parseFloat(props.total) + parseInt(frete))
        console.log(final)


    }




    const handleNameChange = (name) =>{setName(name)}

    const handleCardNumberChange = (cardNumber) =>{

        var arr = cardNumber.split("-")
        setCardNumber(arr.join(""))

        
    }

    const handleChangeName = (name) =>{
        setNewName(name)
    }

    const handleSecureCodeChange = (secureCode) =>{setSecureCode(secureCode)}

    const handleExpMonthChange = (expMonth) =>{
        let arr = expMonth.split('/')

        console.log(arr)
        
        setExpMonth(arr[0])
        setExpYear(arr[1])
        }



   

    const handlePaymentError = () =>{
        setPaymentError(true)
        setLoading(false)
    }

    const handlePaymentSubmission = (e) =>{
        setLoading(true)

        //todo parseint expmonth and year
        if(deliver && newName === ""){
            alert('Precisamos do seu nome para dar entrada no pedido')
        }

        else if(deliver && nb === ""){
            alert('Digite um cep válido')
        }



        else if(deliver && adress === ""){
            alert('Precisamos do seu endereço para entregar seu pedido')
        }

        else if(phone === "" || phone === "55" || phone === " " || !phone){
            alert('Precisamos do seu telefone para dar entrada no pedido')
        }

        else{
        e.preventDefault();
        let t = (parseFloat(props.total) + parseInt(frete)) * 100;

        var Payment = {
            method: method,
            name: name,
            cardNumber: cardNumber,
            secureCode: secureCode,
            expMonth: expMonth,
            expYear: expYear,
            total: t,
            code: date.getTime(),
            option: option
        }

        axios.post('https://delivery-deborba.herokuapp.com/delivery/makepayment', Payment)
        .then(res=>
            res.status === 200 ? placeOrder()//handle success
            : console.log('fail') //handle failure

            

            )
        .catch(err =>
           !err ? setLoading(false) : handlePaymentError()
        )
        }

        

        
            //todo catch error and display error message
        

        

    }

   

    const handlePhone = (phoneNumber) =>{       

        let str = phoneNumber.replace(/[^\d.-]/g, '')
        console.log(str)
        
        setPhone(parseInt(str))

    }

    

    const handleHouseNumber = (houseNumber) =>{
        setHouseNumber(houseNumber)
        console.log(houseNumber)
    }

    const handleReference = (reference) =>{
        setReference(reference)
    }

    const handleDeliver = () =>{
        deliver ? setDeliver(false) : setDeliver(true)
        setTakeAway(false)
        setDontDeliver(false)

    }



    

    const placeOrder = () =>{

        



        if(newName === ""){
            alert('Precisamos do seu nome para dar entrada no pedido')
        }

        else if(phone === "" || phone === "55" || phone === " " || !phone){
            alert('Precisamos do seu telefone para dar entrada no pedido')
        }

        else if(deliver && nb === ""){
            alert('Digite um cep válido')
        }

        else if(newName === ""){
            alert('Precisamos do seu nome para dar entrada no pedido')
        }

        else if(deliver && adress === ""){
            alert('Precisamos do seu endereço para entregar seu pedido')
        }


        else{
            var order = {
                name: newName,
                phone: phone,
                adress: adress +' '+ houseNumber + ' ' + reference,
                neighborhood: nb,
                paid: true,
                cart: props.cart,
                total: parseFloat(props.total) + parseInt(frete),
                deliver: deliver,
                readyToDelivery: false,
                onRoute: false,
                option: option === 'Motoboy-Dinheiro' ? option + ' Troco ' + change : option 
            }
    
            //TODO if response OK POST order to backend

            props.foo()
    
            props.handleSuccess()

            

            props.setCart([])
            props.setExtrasCart([])
            props.setTotal(0)
    
            axios.post('https://delivery-deborba.herokuapp.com/delivery/placeOrder', order)
    
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err.res)
            })
        }




    }

    const handleTakeAway = () =>{
        takeAway ? setTakeAway(false) : setTakeAway(true)
        setDeliver(false)
        // setOption('Take Away')
        setDontDeliver(false)
        handlePayButton('Take Away')
    }

    const handlePayByApp = () =>{
        payByApp ? setPayByApp(false) : setPayByApp(true)
        setMotoboy(false)
        setMotoboyCard(false)
        setMotoboyMoney(false)
        setPayButton(false)
    }

    const handleInvalidCep = () =>{
        invalidCep ? setInvalidCep(false) : setInvalidCep(true)
    }

    const handleCep = (cep) =>{

            setCep(cep)
        
        
            axios.get('https://viacep.com.br/ws/'+ cep + '/json/')
            .then(res => setCepRes(res.data))

            console.log(cepRes)
        

       

    }

    const handleMotoboy = () =>{
        motoboy ? setMotoboy(false) : setMotoboy(true)
        setCardNumber(0)

    }

    const handlePayButton = (payoption) =>{
        setFinal(parseFloat(props.total) + parseInt(frete))
        console.log(final)

        if(payoption === 'Credit'){
            setPayButtonText('Pagar e enviar')
            setPayButton(true)
            setOption(payoption)
            setMethod('credit')
            console.log(payByApp)
            setCardPayment(true)
        }

        else if(payoption === 'Debit'){
            setPayButtonText('Pagar e enviar')
            setPayButton(true)
            setOption(payoption)
            setMethod('debit')
            setCardPayment(true)
        }

        else if(payoption === 'Take Away'){
            setPayButtonText('Enviar pedido')
            
            setOption(payoption)
            
        }

        else if(payoption === 'Motoboy-Dinheiro'){
            setPayButtonText('Enviar pedido')
            setOption(payoption)

            setPayButton(true)
            setMotoboyMoney(true)
            setMotoboyCard(false)

        }

        else if(payoption === 'Motoboy-Cartão'){
            setPayButtonText('Enviar pedido')
            setOption(payoption)

            setPayButton(true)
            setMotoboyCard(true)
            setMotoboyMoney(false)

        }


    }

    




    //TODO handle submit with handlerrors for invalid form
    //TODO warnings over input fields
    //TODO animation on submit




    
    return (

        <div className="payment">
            <BiChevronLeftCircle onClick={props.foo}  className="adddecbutton modalclose" style={{color: '#fc4041', position: 'fixed', top: '40px', left: '15px'}}/>
            <div className="flex-column">
                
                <p>{'seu total até aqui R$' + props.total.toFixed(2)}</p>
            </div>
            <p style={{alignSelf: "flex-start", fontSize: "0.8em"}}>Como você quer receber seu pedido?</p>
            <div className='flex-row'>
                <span onClick={handleTakeAway} style={{backgroundColor: takeAway ? '#6b6e7e' : '#f9f9f9', color: takeAway ? 'white' : '#6b6e7e'}} className="delivery-button">Retirar pessoalmente</span>
                <span onClick={handleDeliver} style={{backgroundColor: deliver ? '#6b6e7e' : '#f9f9f9', color: deliver ? 'white' : '#6b6e7e'}} className="delivery-button">Receber em casa</span>
            </div>

            <div style={{display: takeAway ? 'flex' : 'none', width: '90vw', alignItems: 'center'}} className="flex-column">

            <p style={{
                alignSelf: "flex-start", 
                fontSize: "0.8em",
                marginTop: "20px",
                marginBottom: "0",
                marginLeft: '10px'
                
                }}>seus dados</p>

            <div  className="flex-column" style={{marginLeft: '30px'}}>

                
                <form>
                    <label>Nome</label>
                    <input style={{marginBottom: '0px'}} onChange={(e)=>{handleChangeName(e.target.value)}} type="text"></input>
                    <label>Telefone</label>
                    <InputMask onChange={(e)=>{handlePhone(e.target.value)}} mask="+55 (99) 9 9999 9999" />

                </form>
                <p>nossa localização</p>
                <iframe title="como chegar" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.3520798105333!2d-48.582322652887726!3d-27.582612065885712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952737df8bef2e61%3A0x8e4c61b6be4b7ba6!2sR.%20Jos%C3%A9%20C%C3%A2ndido%20da%20Silva%2C%20192%20-%20Balneario%2C%20Florian%C3%B3polis%20-%20SC%2C%2088075-250!5e0!3m2!1spt-BR!2sbr!4v1612711996407!5m2!1spt-BR!2sbr"
                    width="205" height="200" frameborder="0" 
                    allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
                </div>

                <div style={{display: takeAway ? 'flex' : 'none'}} className="flex-column">
                    
                    <span className="payment-button" 
                    onClick={cardPayment? handlePaymentSubmission : placeOrder} >
                       {payButtonText}
                       </span>
                       <div className="flex-column" style={{display: loading ? 'flex' : 'none', width: '220px', alignItems: 'center'}}>
                            <img src={clock} alt="loading" className="clock-loading" />
                            <h4>Só um Segundo...</h4>
                            <p>enquanto validamos o seu pagamento</p>
                        </div>
                        <div className="flex-column" style={{display: paymentError ? 'flex' : 'none', width: '220px', alignItems: 'center', marginLeft: '20px'}}>
                            <img src={denied} style={{width: '50px', marginTop: '20px'}} alt="loading"  />
                            <h4>Houve um problema...</h4>
                            <p>seu pagamento não pode ser processado, escolha outra forma de pagamento ou pague ao receber seu pedido</p>


                        </div>
   
                       <p style={{marginLeft: '20px', marginTop: '10px'}} onClick={props.foo}>voltar ao menu?</p>

                   </div>

                


                
            </div>
            <div style={{display: deliver ? 'flex' : 'none', width: '90vw', alignItems: 'center'}} className="flex-column">

            <p style={{
                alignSelf: "flex-start", 
                fontSize: "0.8em",
                marginTop: "20px",
                marginBottom: "0",
                marginLeft: '10px'
                
                }}>seus dados</p>

            <div  className="flex-column" style={{marginLeft: '40px', width: '220px'}}>

                
                <form>
                    <label>Nome</label>
                    <input style={{marginBottom: '0px'}} onChange={(e)=>{handleChangeName(e.target.value)}} type="text"></input>
                    <label>Telefone</label>
                    <InputMask onChange={(e)=>{handlePhone(e.target.value)}} mask="+55 (99) 9 9999 9999" />
                    <label>CEP</label>
                    <input value={cep} onChange={(e)=>{handleCep(e.target.value)}} />
                    <p style={{fontSize: '0.7em', marginTop: '-10px'}}>{invalidCep ? 'Cep Inválido ou você está fora da nossa área de entrega' : ''}</p>
                    <p onClick={cepRes.bairro ? checkDelivery : handleInvalidCep} style={{color: cepRes.bairro ? '#fc4041' : '#6b6e7e'}}>+ adicionar cep</p>
                    <div className="flex-column" style={{display: doDeliver ? 'flex' : 'none'}}>
                        <p style={{width: '200px', textAlign: 'left'}}>{adress}</p>
                        <p>{'Bairro '+ nb}</p>
                        <label>número</label>
                        <p style={{fontSize: '0.8em'}}>* importante</p>
                        <input onChange={(e)=>{handleHouseNumber(e.target.value)}} placeholder="Ex. 123-b" />
                        <label>referência</label>
                        <input onChange={(e)=>{handleReference(e.target.value)}} placeholder="Ex. apto 201" />
                        <p>{'Entrega R$ ' + (parseFloat(frete)).toFixed(2)}</p>
                        <p>{'Total geral R$ ' + (parseFloat(frete) + parseFloat(props.total)).toFixed(2)}</p>

                    </div>


                </form>
                </div>
                <p style={{
                alignSelf: "flex-start", 
                fontSize: "0.8em",
                marginTop: "20px",
                marginBottom: "0",
                marginLeft: '10px'
                
                }}>você prefere pagar...</p>
                <div className='flex-row' style={{marginLeft: '20px'}}>
                    <span onClick={handlePayByApp} style={{backgroundColor: cardNumber ? '#6b6e7e' : '#f9f9f9', color: cardNumber ? 'white' : '#6b6e7e'}} className="delivery-button">pelo app</span>
                    <span style={{backgroundColor: motoboy ? '#6b6e7e' : '#f9f9f9', color: motoboy ? 'white' : '#6b6e7e'}} onClick={handleMotoboy} className="delivery-button">na entrega</span>
                </div>

                <div className="flex-column" style={{display: motoboy? 'flex' : 'none',marginLeft: '25px'}}>
                <p style={{
                alignSelf: "flex-start", 
                fontSize: "0.8em",
                marginTop: "20px",
                marginBottom: "0",
                marginLeft: '-20px'}}>
                    o método de pagamento será?
                </p>

                    <div className='flex-row' style={{ marginLeft: '20px'}}>
                        <span style={{backgroundColor: motoboyCard ? '#6b6e7e' : '#f9f9f9', color: motoboyCard ? 'white' : '#6b6e7e'}} onClick={()=>{handlePayButton('Motoboy-Cartão')}}  className="delivery-button">cartão</span>
                        <span style={{backgroundColor: motoboyMoney ? '#6b6e7e' : '#f9f9f9', color: motoboyMoney ? 'white' : '#6b6e7e'}} onClick={()=>{handlePayButton('Motoboy-Dinheiro')}} className="delivery-button">dinheiro</span>
                    </div>

                </div>


                <form style={{display: motoboyMoney ? 'flex' : 'none', width: '220px'}}> 
                <p style={{
                alignSelf: "flex-start", 
                fontSize: "0.8em",
                marginTop: "20px",
                marginBottom: "0",
                marginLeft: '10px'}}>
                    troco?
                </p>               
                    <input onChange={(e)=>{setChange(e.target.value)}} placeholder="Ex. Troco para 100" />
                </form>





                


                
            </div>

            <div className="card-modal" style={{display: payByApp ? 'flex' : 'none'}} >
            <BiChevronLeftCircle onClick={handlePayByApp}  style={{color: '#fc4041', top: '110px', fontSize: '2em',left: '20px', position: 'absolute'}}/>
                   <form className="credit-card">
                 <h3>Dados do seu Cartão</h3>
                 <div className="flex-row">
                     <div className="flex-column">
                         <label>Número do seu cartão</label>
                         <InputMask value={cardNumber}onChange={(e)=> handleCardNumberChange(e.target.value)} mask="9999-9999-9999-9999" required/>
                     </div>
                     <div className="flex-column">
                         <label>CVV</label>
                         <InputMask style={{width: '50px'}} onChange={(e)=> handleSecureCodeChange(e.target.value)} id="cvv" mask="999" required/>
                     </div>
                 </div>

                 <div className="flex-row">
                     <div className="flex-column">
                         <label>Nome impresso no cartão</label>
                         <input onChange={(e)=> handleNameChange(e.target.value)} type="text" />
                     </div>

                     <div className="flex-column">
                     <label>Vencimento:</label>
                     <InputMask onChange={(e)=>{handleExpMonthChange(e.target.value)}} 
                     placeholder="ex. 08/2024"
                     style={{width: '70px'}}
                     mask="99/9999"
                     />
                     
                        

                        
                     </div>
                    
                    
                 </div>
                

                 {/* <input className="submit-button" type="submit" value="Enviar" onClick={handlePaymentSubmission}  /> */}

                 <p style={{color: '#fc4041'}} onClick={handlePayByApp} >+ adicionar cartão</p>


             </form>      
            </div>


            <div style={{display: cardNumber ? 'flex' : 'none'}} className="flex-column">
                    <p style={{
                    alignSelf: "flex-start", 
                    fontSize: "0.8em",
                    marginTop: "20px",
                    marginBottom: "0",
                    marginLeft: '-30px'
                    
                    }}>pagar com ... e enviar o pedido</p>

                <div className='flex-row' style={{marginLeft: '20px'}}>
                    <span onClick={()=>handlePayButton('Credit')} style={{backgroundColor: method === 'credit' ? '#6b6e7e' : '#f9f9f9', color: method === 'credit' ?'white' :'#6b6e7e' }}  className="delivery-button">crédito</span>
                    <span onClick={()=>handlePayButton('Debit')} style={{backgroundColor: method === 'debit' ? '#6b6e7e' : '#f9f9f9', color: method === 'debit' ?'white' :'#6b6e7e' }} className="delivery-button">débito</span>
                </div>


                    

                </div>

                <div className="flex-column" style={{display: dontDeliver ? 'flex' : 'none',  marginLeft: '20px', marginRight: '20px'}}>
                        {/* <p style={{width: '200px', textAlign: 'left'}}>{'Rua '+ adress}</p>
                        <p>{'Bairro '+ nb}</p> */}
                        <p style={{color: 'red', fontWeight: '800'}}>infelizmente este endereço está fora da nossa área de entregas</p>

                </div>

                <div style={{display: payButton ? 'flex' : 'none'}} className="flex-column">
                    
                    <span className="payment-button" 
                    onClick={cardPayment? handlePaymentSubmission : placeOrder} style={{display: payButton ? 'flex' : 'none'}} >
                       {payButtonText}
                       </span>
                       <div className="flex-column" style={{display: loading ? 'flex' : 'none', width: '220px', alignItems: 'center'}}>
                            <img src={clock} alt="loading" className="clock-loading" />
                            <h4>Só um Segundo...</h4>
                            <p>enquanto validamos o seu pagamento</p>
                        </div>
                        <div className="flex-column" style={{display: paymentError ? 'flex' : 'none', width: '220px', alignItems: 'center', marginLeft: '20px'}}>
                            <img src={denied} style={{width: '50px', marginTop: '20px'}} alt="loading"  />
                            <h4>Houve um problema...</h4>
                            <p>seu pagamento não pode ser processado, escolha outra forma de pagamento ou pague ao receber seu pedido</p>


                        </div>
   
                       <p onClick={props.foo}>voltar ao menu?</p>

                   </div>

                   


            




        </div>

        // <div className="payment">
        //     <IoIosCloseCircle onClick={props.foo}  className="adddecbutton modalclose" style={{color: 'white', marginTop:"-10px", marginBottom: '20px'}}/>
        //     <h3>Entrega e Pagamento</h3>
            
            
        //     <form>
        //         <label>Nome</label>
        //         <input onChange={(e)=>{handleChangeName(e.target.value)}} type="text"></input>
        //         <div className="flex-row">
        //             <div className="flex-column">
        //             <label>CEP:</label>                    
        //                 <input style={{marginRight: '-15px'}} onChange={(e)=> handleAdress(e.target.value)} type='number' />
        //             </div>

                    

        //         </div>
                
        //         <label>TELEFONE:</label>
        //             <InputMask onChange={(e)=>{handlePhone(e.target.value)}} mask="+55 (99) 9 9999 9999" />
                
        //     </form>

            
        //     <p>Entrega: R$ {frete.toFixed(2)}</p>
        //     <h3>Total: R$ {final.toFixed(2)}</h3>

            
        //     <form onChange={(e)=>{handlePaymentMethod(e.target.value)}}>
        //         <label>Metodo de pagamento:</label>
        //         <label>
        //             <input type="radio" name="pay" value="credit" id="credit" />
        //             Online: Cartão de Crédito
        //         </label>
        //         <label>
        //             <input type="radio" name="pay" value="debit" id="debit" />
        //             Online: Cartão de Débito
        //         </label>
        //         <label>
        //             <input type="radio" name="pay" value="motoboy" id="motoboy" />
        //             Pagar ao Motoboy
        //         </label>
        //     </form>

      
            
        //     <form className="debit-card" style={{display: debit? 'flex' : 'none'}}>
        //         <h3>Cartão de Débito</h3>
        //         <div className="flex-row">
        //             <div className="flex-column">
        //                 <label>Número do seu cartão</label>
        //                 <InputMask onChange={(e)=> handleCardNumberChange(e.target.value)} mask="9999-9999-9999-9999" required/>
        //             </div>
        //             <div className="flex-column">
        //                 <label>CVV</label>
        //                 <InputMask onChange={(e)=> handleSecureCodeChange(e.target.value)} id="cvv" mask="999" required/>
        //             </div>
        //         </div>

        //         <div className="flex-row">
        //             <div className="flex-column">
        //                 <label>Nome impresso no cartão</label>
        //                 <input onChange={(e)=> handleNameChange(e.target.value)} type="text" />
        //             </div>

        //             <div className="flex-column">
        //             <label>Vencimento:</label>
        //                 <div className="flex-row">
        //                     <select onChange={(e)=> handleExpMonthChange(e.target.value)}>
        //                         <option value="" selected="selected">-</option>
        //                         <option value="1">Jan</option>
        //                         <option value="2">Fev</option>
        //                         <option value="3">Mar</option>
        //                         <option value="4">Abr</option>
        //                         <option value="5">Mai</option>
        //                         <option value="6">Jun</option>
        //                         <option value="7">Jul</option>
        //                         <option value="8">Ago</option>
        //                         <option value="9">Set</option>
        //                         <option value="10">Out</option>
        //                         <option value="11">Nov</option>
        //                         <option value="12">Dez</option>
        //                     </select>
        //                     <select onChange={(e)=>{handleExpYearChange(e.target.value)}}>
        //                         <option value="" selected="selected">-</option>
        //                         <option value="2021">2021</option>
        //                         <option value="2022">2022</option>
        //                         <option value="2023">2023</option>
        //                         <option value="2024">2024</option>
        //                         <option value="2025">2025</option>
        //                         <option value="2026">2026</option>
        //                         <option value="2027">2027</option>
        //                         <option value="2028">2028</option>
        //                     </select>
        //                 </div>                        
        //             </div>                
        //         </div>



        //         <input className="submit-button" type="submit" value="Enviar" onClick={handlePaymentSubmission} />


        //     </form>

        //     <form className="motoboy" style={{display: motoboy? 'flex':'none'}}>
        //         <form onChange={(e)=>{handleMotoboyOption(e.target.value)}}>
        //             <label>Metodo de pagamento:</label>
        //             <label>
        //                 <input type="radio" name="motoboy-pay" value="motoboy-card" id="motoboy-card" />
        //                 Cartão
        //             </label>
        //             <label>
        //                 <input type="radio" name="motoboy-pay" value="motoboy-money" id="motoboy-money" />
        //                 Dinheiro
        //             </label>
        //         </form>

        //         <input className="submit-button" type="submit" value="Enviar" onClick={handlePaymentSubmission}  />
        //     </form>

        //     <span className="alert" style={{display: showAlert ? 'block' : 'none'}}>Pagamento Confirmado!</span>
            
        // </div>
    )
}
