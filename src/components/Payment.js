import  {React,useEffect, useState} from 'react';
import './components.css';
import './css/checkout.css';
import InputMask from 'react-input-mask';
import axios from 'axios';

import clock from '../assets/Foto-Loading-PNG.png'
import denied from '../assets/denied.png'




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
    const[cardNumber, setCardNumber]= useState("");
    const[secureCode, setSecureCode]= useState('')
    const[expMonth, setExpMonth]= useState('')
    const[expYear, setExpYear]= useState('')
    const[method, setMethod] = useState('')
    const[option, setOption] = useState('')
    const[nb, setNb] = useState('')
    const[city, setCity] = useState('')
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

    const[discount, setDiscount] = useState(0)
    const[coupon, setCoupon] = useState(false)

    const[payBtnClass, setPayBtnClass] = useState("payment-button")


    // const[confirmation, setConfirmation] = useState(false)

    useEffect(() => {

        //TODO response from payment

    },[])

    const checkDelivery = () =>{

        setInvalidCep(false)
        
            

        switch (cepRes.bairro) {
            case 'Balneário':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(4)
                setCity(cepRes.localidade)               
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Canto':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(7)
                setCity(cepRes.localidade)               
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Coloninha':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(4)
                setCity(cepRes.localidade)               
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Jardim Atlântico':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setCity(cepRes.localidade)
                setFrete(4)               
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Sapé':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(4)
                setCity(cepRes.localidade)               
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Barreiros':                
            if(cepRes.localidade === 'São José'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(4)
                setCity(cepRes.localidade)               
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Campinas':                
            if(cepRes.localidade === 'São José'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(5) 
                setCity(cepRes.localidade)              
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Santos Dumont':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(5)    
                setCity(cepRes.localidade)           
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Monte Cristo':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(5)    
                setCity(cepRes.localidade)           
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Kobrasol':                
            if(cepRes.localidade === 'São José'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(5)
                setCity(cepRes.localidade)               
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Bom Abrigo':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(6)     
                setCity(cepRes.localidade)          
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Abraão':                
            if(cepRes.localidade === 'Florianópolis'){
                setDoDeliver(true)
                setDontDeliver(false)
                setNb(cepRes.bairro)                
                setAdress(cepRes.logradouro)
                setFrete(5)     
                setCity(cepRes.localidade)          
                break;
                
            }

            else{
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;

            }

            case 'Itaguaçu':                

                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)    
                    setFrete(6)      
                    setCity(cepRes.localidade)      
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Coqueiros':                
             
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)  
                    setFrete(5)   
                    setCity(cepRes.localidade)            
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Capoeiras':                
             
                
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(4) 
                    setCity(cepRes.localidade)
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;
                }

            case 'Centro':  
                
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(7)    
                    setCity(cepRes.localidade)           
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }


            case 'Agronômica':                

                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)  
                    setCity(cepRes.localidade)             
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Trindade':                
          
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)   
                    setCity(cepRes.localidade)            
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Bosque das Missões':
           
                if(cepRes.localidade === 'São José'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(7)   
                    setCity(cepRes.localidade)            
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }


            case 'Estreito':              
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(4)  
                    setCity(cepRes.localidade)             
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Saco dos Limões':
       
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)    
                    setCity(cepRes.localidade)          
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Córrego Grande':
              
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)      
                    setCity(cepRes.localidade)         
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Itacorubi':
               
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)       
                    setCity(cepRes.localidade)        
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Santa Mônica':
             
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)          
                    setCity(cepRes.localidade)     
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }
            
            case 'Pantanal':
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)       
                    setCity(cepRes.localidade)        
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Carvoeira':
                if(cepRes.localidade === 'Florianópolis'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)     
                    setCity(cepRes.localidade)          
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Roçado':
                if(cepRes.localidade === 'São José'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(6)      
                    setCity(cepRes.localidade)         
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Bela Vista':
                if(cepRes.localidade === 'São José'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(6)      
                    setCity(cepRes.localidade)         
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Ipiranga':
                if(cepRes.localidade === 'São José'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(7)    
                    setCity(cepRes.localidade)           
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Jardim Cidade de Florianópolis':
                if(cepRes.localidade === 'São José'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(6)    
                    setCity(cepRes.localidade)           
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Nossa Senhora do Rosário':
                if(cepRes.localidade === 'São José'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)  
                    setCity(cepRes.localidade)             
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            case 'Areias':
                if(cepRes.localidade === 'São José'){
                    setDoDeliver(true)
                    setDontDeliver(false)
                    setNb(cepRes.bairro)                
                    setAdress(cepRes.logradouro)
                    setFrete(8)       
                    setCity(cepRes.localidade)        
                    break;
                    
                }

                else{
                    setDontDeliver(true)
                    setDoDeliver(false)
                    setDeliver(false)
                    setPayButton(false)
                    break;

                }

            default:
                setDontDeliver(true)
                setDoDeliver(false)
                setDeliver(false)
                setPayButton(false)
                break;
        }

    

        

        setFinal(parseFloat(props.total) + parseInt(frete))
        


    }

    const setLocalStorage = (key, value) =>{
        
        localStorage.setItem(key, JSON.stringify(value));

          
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

        
        
        setExpMonth(arr[0])
        setExpYear(arr[1])
        }
    const handlePaymentError = () =>{
        setPaymentError(true)
        setLoading(false)
        setTimeout(() => {
            props.foo()
        }, 5000);
    }

    const handlePaymentSubmission = (e) =>{
        

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
        setLoading(true);
        
        e.preventDefault();
        let t = Math.round((parseFloat(props.total) + parseInt(frete)) * 100);

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

    }

    const handlePhone = (phoneNumber) =>{       

        let str = phoneNumber.replace(/[^\d.-]/g, '')
        
        
        setPhone(parseInt(str))

    }

    const handleHouseNumber = (houseNumber) =>{
        setHouseNumber(houseNumber)
        
    }

    const handleReference = (reference) =>{
        setReference(reference)
    }

    const handleDeliver = () =>{
        deliver ? setDeliver(false) : setDeliver(true)
        setTakeAway(false)
        setDontDeliver(false)

    }

    const orderSuccess = (order) =>{

        setLoading(false)
        


        setLocalStorage('order', order)
        props.setCart([])
        props.setExtrasCart([])
        props.setTotal(0)

        props.foo()

        props.handleSuccess()



    }

    const orderError = ()=>{
        alert('Ops... algo deu errado, tente novamente!');
        

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
            setLoading(true)
            
            var order = {
                name: newName,
                phone: phone,
                adress: adress +' '+ houseNumber + ' ' + reference+' ' + city,
                cep: cep,
                neighborhood: nb,
                paid: true,
                frete: frete,
                cart: props.cart,
                total: (parseFloat(props.total) - parseFloat(discount)) + parseInt(frete),
                deliver: deliver,
                readyToDelivery: false,
                onRoute: false,
                time: date.toLocaleString(),
                option: option === 'Motoboy-Dinheiro' ? option + ' Troco ' + change : option 
            }
    
            //TODO if response OK POST order to backend


    
            axios.post('https://delivery-deborba.herokuapp.com/delivery/placeOrder', order)
    
            .then(()=>{
                orderSuccess(order)
            })
            .catch(()=>{
                orderError()
                
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

    const addCardNumber = () =>{
        if(cardNumber.length < 16){
            alert("Número de cartão inválido!")
        }
        else{handlePayByApp() }

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

           
        

       

    }

    const handleMotoboy = () =>{
        motoboy ? setMotoboy(false) : setMotoboy(true)
        setCardNumber(0)

    }

    const handlePayButton = (payoption) =>{
        setFinal(parseFloat(props.total) + parseInt(frete))
        

        if(payoption === 'Credit'){
            setPayButtonText('Pagar e enviar')
            setPayButton(true)
            setOption(payoption)
            setMethod('credit')
            
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

    const handleCoupon = (coupon) =>{
        switch (coupon.toUpperCase()) {
            case 'MULHER21':
                setDiscount((props.total/100)*10)
                setCoupon(true)

                
                break;
        
            default:
                break;
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
                {/* <form>
                    <label>Você possui cupom de desconto?</label>
                    <input onChange={(e)=>{handleCoupon(e.target.value)}}></input>
                    <p style={{display: coupon ? 'block' : 'none'}}>Cupom Encontrado! </p>
                    <p style={{display: coupon ? 'block' : 'none', color: '#fc4041', fontWeight: '800'}}>Total: R$ {props.total - discount} </p>
                </form> */}
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
                    <input style={{marginBottom: '0px'}} onChange={(e)=>{handleChangeName(e.target.value)}} placeholder="Nome Completo" type="text"></input>
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
                            <p>enquanto validamos o seu pedido</p>
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
                    <input style={{marginBottom: '0px'}} onChange={(e)=>{handleChangeName(e.target.value)}} placeholder="Nome Completo" type="text"></input>
                    <label>Telefone</label>
                    <InputMask onChange={(e)=>{handlePhone(e.target.value)}} mask="+55 (99) 9 9999 9999" />
                    <label>CEP</label>
                    <input value={cep} onChange={(e)=>{handleCep(e.target.value)}} />
                    <p style={{fontSize: '0.7em', marginTop: '-10px'}}>{invalidCep ? 'Cep Inválido ou você está fora da nossa área de entrega' : ''}</p>
                    <p onClick={cepRes.bairro ? checkDelivery : handleInvalidCep} style={{color: cepRes.bairro ? '#fc4041' : '#6b6e7e'}}>+ adicionar cep</p>
                    <div className="flex-column" style={{display: doDeliver ? 'flex' : 'none'}}>
                        <p>{city}</p>
                        <p style={{width: '200px', textAlign: 'left'}}>{adress}</p>
                        <p>{'Bairro '+ nb}</p>
                        <label>número</label>
                        <p style={{fontSize: '0.8em'}}>* importante</p>
                        <input onChange={(e)=>{handleHouseNumber(e.target.value)}} placeholder="Ex. 123-b" />
                        <label>referência</label>
                        <input onChange={(e)=>{handleReference(e.target.value)}} placeholder="Ex. apto 201" />
                        <p>{'Entrega R$ ' + (parseFloat(frete)).toFixed(2)}</p>
                        <p>{'Total geral R$ ' + (parseFloat(frete) + (parseFloat(props.total)-parseFloat(discount))).toFixed(2)}</p>

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

                 <p style={{color: '#fc4041'}} onClick={addCardNumber} >+ adicionar cartão</p>


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
                            <p>enquanto validamos o seu pedido</p>
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
        
        // </div>
    )
}
