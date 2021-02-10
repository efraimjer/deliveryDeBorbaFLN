import React, {useEffect, useState} from 'react';
import './components.css';
import './css/checkout.css';
import InputMask from 'react-input-mask';
import axios from 'axios';

// import { IoAddCircleSharp, IoBasketOutline} from "react-icons/io5";
import { IoIosRemoveCircle, IoIosCloseCircle, IoMdMenu, IoIosPricetag } from "react-icons/io";

export default function Payment(props) {

    const[frete, setFrete] = useState(0);
    const[final, setFinal] = useState(0);
    // const[cardFinal, setCardFinal] = useState(0)

    const[debit, setDebit]= useState(false)    
    const[credit, setCredit] = useState(false)
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

    const date = new Date()

    const[showAlert, setShowAlert] = useState(false);

    // const[confirmation, setConfirmation] = useState(false)

    useEffect(() => {

        //TODO response from payment

    })


    const handlePaymentMethod = (method) =>{
        if(method === 'credit'){
            setCredit(true)
            setDebit(false)
            setMotoboy(false)
            setMethod('credit')
        }
        else if(method === 'debit'){
            setDebit(true)
            setCredit(false)
            setMotoboy(false)
            setMethod('debit')
        }

        else if(method ==='motoboy'){
            setDebit(false)
            setCredit(false)
            setMotoboy(true)
            setMethod('motoboy')
        }

        else{setCredit(false)
            setDebit(false)}
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

    const handleExpMonthChange = (expMonth) =>{setExpMonth(expMonth)}

    const handleExpYearChange = (expYear) =>{setExpYear(expYear)}

    const handleMotoboyOption = (option) =>{setOption(option)}

    const handlePaymentSubmission = (e) =>{

        //todo parseint expmonth and year

        if(nb === ""){
            alert('Selecione um bairro')
        }

        else if(newName === ""){
            alert('Precisamos do seu nome para dar entrada no pedido')
        }

        else if(adress === ""){
            alert('Precisamos do seu endereço para entregar seu pedido')
        }

        else{
            e.preventDefault();
        let t = parseInt(final * 100);
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
        .catch(err=>
            console.log(err)
        )
        }

        
            //todo catch error and display error message
        

        

    }

    const handleShipment = (price) =>{

        switch (price.value[2]) {
            case "A":
                setNb('Take Away')
                console.log('Take Away')
                
                break;
            case 'B':
                setNb('Centro')
                console.log('Centro')
                break;
            case "C":
                    setNb('Estreito')
                    console.log('Estreito')
                    
                    break;
            case 'D':
                    setNb('Trindade')
                    console.log('Trindade')
                    break;            
            case "E":
                    setNb('Balneário')
                    console.log('Balneário')
                    
                    break;
            case 'F':
                    setNb('Canto')
                    console.log('Canto')
                    break;            
            case "G":
                    setNb('Coloninha')
                    console.log('Coloninha')
                    
                    break;
            case 'H':
                    setNb('Jardim Atlântico')
                    console.log('jd')
                    break;

            case "I":
                    setNb('Sapé')
                    console.log('Sapé')
                        
                    break;
            case 'J':
                    setNb('Barreiros')
                    console.log('Barreiros')
                    break;
            case 'K':
                setNb('Campinas')
                console.log('Camp')
                break;

            case 'M':
                setNb('Santos Dumont')
                console.log('st d')
                break;

            case 'N':
                    setNb('Monte Cristo')
                    console.log('mt c')
                    break;
            case 'L':
                setNb('Kobrasol')
                console.log('Kobra')
                break;
            
            case 'P':
                setNb('Bom Abrigo')
                console.log('b a')
                break;
            
            case 'Q':
                setNb('Abrãao')
                console.log(nb)
                break;

            case 'R':
                setNb('Itaguaçu')
                console.log(nb)
                break;
            
            case 'S':
                setNb('Coqueiros')
                console.log(nb)
                break;

            case 'T':
                setNb('Agronomica')
                console.log(nb)
                break;

            case 'U':
                setNb('Capoeiras')
                console.log(nb)
                break;

            case 'Z':
                setNb('')
                alert('Selecione um Bairro, se o Bairro não estiver na lista, infelizmente está fora da nossa zona de entrega');
                break;

            case '':
                setNb('1')
                alert('Selecione um Bairro');
                console.log(nb.lenght())
                break;
        
            default:

                break;
        }



        //TODO implement deliver status true or false

        handleDeliver(price.value[0])
        setFrete(parseInt(price.value[0]))

        setFinal(props.total + parseInt(price.value[0]))


    }

    const handlePhone = (phoneNumber) =>{       

        let str = phoneNumber.replace(/[^\d.-]/g, '')
        console.log(str)
        
        setPhone(parseInt(str))

    }

    const handleAdress =(adress) =>{
        setAdress(adress)

        //TODO implement sum of adress + neighborhood
    }

    const handleDeliver = (deliver) =>{
        if(deliver === 0){
            setDeliver(false)
        }
        else {setDeliver(true)}
    }



    const handleAlert = () =>{
        setShowAlert(true)

        setTimeout(()=>{
            setShowAlert(false)
        }, 3000)
    }

    const placeOrder = () =>{

        if(nb === ""){
            alert('Selecione um bairro')
        }

        else if(newName === ""){
            alert('Precisamos do seu nome para dar entrada no pedido')
        }

        else if(adress === ""){
            alert('Precisamos do seu endereço para entregar seu pedido')
        }

        else{
            var order = {
                name: newName,
                phone: phone,
                adress: adress,
                neighborhood: nb,
                paid: true,
                cart: props.cart,
                total: final,
                deliver: deliver,
                readyToDelivery: false,
                onRoute: false,
                option: option
            }
    
            //TODO if response OK POST order to backend
    
            handleAlert()
    
            axios.post('https://delivery-deborba.herokuapp.com/delivery/placeOrder', order)
    
            .then(res=>{
                console.log(res.data)
            })
            .catch(err=>{
                console.log(err.res)
            })
        }




    }




    //TODO handle submit with handlerrors for invalid form
    //TODO warnings over input fields
    //TODO animation on submit




    
    return (
        <div className="payment">
            <IoIosCloseCircle onClick={props.foo}  className="adddecbutton modalclose" style={{color: 'white', marginTop:"-10px", marginBottom: '20px'}}/>
            <h3>Entrega e Pagamento</h3>
            
            
            <form>
                <label>Nome</label>
                <input onChange={(e)=>{handleChangeName(e.target.value)}} type="text"></input>
                <div className="flex-row">
                    <div className="flex-column">
                    <label>ENDEREÇO:</label>                    
                        <input style={{marginRight: '-15px'}} onChange={(e)=> handleAdress(e.target.value)} type='text' />
                    </div>
                    <div className="flex-column">
                    <label>Bairros Atendidos:</label>                    
                        <select onChange={(e)=>handleShipment(e.target)}>
                            <option value={[0, "Z"]} selected="selected">-</option>
                            <option value={[0.0, 'A']}>Take Away</option>
                            <option value={[7, 'B']}>Centro</option>
                            <option value={[4, 'C']}>Estreito</option>
                            <option value={[9, 'D']}>Trindade</option>
                            <option value={[4, 'E']}>Balneário</option>
                            <option value={[4, 'F']}>Canto</option>
                            <option value={[4, 'G']}>Coloninha</option>
                            <option value={[4, 'H']}>Jardim Atlântico</option>
                            <option value={[5, 'I']}>Sapé</option>
                            <option value={[5, 'J']}>Barreiros</option>
                            <option value={[6, 'K']}>Campinas</option>
                            <option value={[6, 'M']}>Santos Dumont</option>
                            <option value={[6, 'N']}>Monte Cristo</option>
                            <option value={[7, 'L']}>Kobrasol</option>
                            <option value={[7, 'P']}>Bom Abrigo</option>
                            <option value={[7, 'Q']}>Abrãao</option>
                            <option value={[7, 'R']}>Itaguaçu</option>
                            <option value={[6, 'S']}>Coqueiros</option>
                            <option value={[7, 'T']}>Agronomica</option>
                            <option value={[2, 'U']}>Capoeiras</option>
                    



                        </select>
                    </div>
                </div>
                
                <label>TELEFONE:</label>
                    <InputMask onChange={(e)=>{handlePhone(e.target.value)}} mask="+55 (99) 9 9999 9999" />
                
            </form>

            
            <p>Entrega: R$ {frete.toFixed(2)}</p>
            <h3>Total: R$ {final.toFixed(2)}</h3>

            
            <form onChange={(e)=>{handlePaymentMethod(e.target.value)}}>
                <label>Metodo de pagamento:</label>
                <label>
                    <input type="radio" name="pay" value="credit" id="credit" />
                    Online: Cartão de Crédito
                </label>
                <label>
                    <input type="radio" name="pay" value="debit" id="debit" />
                    Online: Cartão de Débito
                </label>
                <label>
                    <input type="radio" name="pay" value="motoboy" id="motoboy" />
                    Pagar ao Motoboy
                </label>
            </form>

            <form className="credit-card" style={{display: credit? 'flex' : 'none'}}>
                <h3>Cartão de Crédito</h3>
                <div className="flex-row">
                    <div className="flex-column">
                        <label>Número do seu cartão</label>
                        <InputMask onChange={(e)=> handleCardNumberChange(e.target.value)} mask="9999-9999-9999-9999" required/>
                    </div>
                    <div className="flex-column">
                        <label>CVV</label>
                        <InputMask onChange={(e)=> handleSecureCodeChange(e.target.value)} id="cvv" mask="999" required/>
                    </div>
                </div>

                <div className="flex-row">
                    <div className="flex-column">
                        <label>Nome impresso no cartão</label>
                        <input onChange={(e)=> handleNameChange(e.target.value)} type="text" />
                    </div>

                    <div className="flex-column">
                    <label>Vencimento:</label>
                        <div className="flex-row">
                            <select onChange={(e)=> handleExpMonthChange(e.target.value)}>
                                <option value="" selected="selected">-</option>
                                <option value="1">Jan</option>
                                <option value="2">Fev</option>
                                <option value="3">Mar</option>
                                <option value="4">Abr</option>
                                <option value="5">Mai</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Ago</option>
                                <option value="9">Set</option>
                                <option value="10">Out</option>
                                <option value="11">Nov</option>
                                <option value="12">Dez</option>
                            </select>
                            <select onChange={(e)=>{handleExpYearChange(e.target.value)}}>
                                <option value="" selected="selected">-</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                            </select>
                        </div>

                        
                    </div>
                    
                    
                </div>
                

                <input className="submit-button" type="submit" value="Enviar" onClick={handlePaymentSubmission}  />


            </form>
            
            <form className="debit-card" style={{display: debit? 'flex' : 'none'}}>
                <h3>Cartão de Débito</h3>
                <div className="flex-row">
                    <div className="flex-column">
                        <label>Número do seu cartão</label>
                        <InputMask onChange={(e)=> handleCardNumberChange(e.target.value)} mask="9999-9999-9999-9999" required/>
                    </div>
                    <div className="flex-column">
                        <label>CVV</label>
                        <InputMask onChange={(e)=> handleSecureCodeChange(e.target.value)} id="cvv" mask="999" required/>
                    </div>
                </div>

                <div className="flex-row">
                    <div className="flex-column">
                        <label>Nome impresso no cartão</label>
                        <input onChange={(e)=> handleNameChange(e.target.value)} type="text" />
                    </div>

                    <div className="flex-column">
                    <label>Vencimento:</label>
                        <div className="flex-row">
                            <select onChange={(e)=> handleExpMonthChange(e.target.value)}>
                                <option value="" selected="selected">-</option>
                                <option value="1">Jan</option>
                                <option value="2">Fev</option>
                                <option value="3">Mar</option>
                                <option value="4">Abr</option>
                                <option value="5">Mai</option>
                                <option value="6">Jun</option>
                                <option value="7">Jul</option>
                                <option value="8">Ago</option>
                                <option value="9">Set</option>
                                <option value="10">Out</option>
                                <option value="11">Nov</option>
                                <option value="12">Dez</option>
                            </select>
                            <select onChange={(e)=>{handleExpYearChange(e.target.value)}}>
                                <option value="" selected="selected">-</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                            </select>
                        </div>                        
                    </div>                
                </div>



                <input className="submit-button" type="submit" value="Enviar" onClick={handlePaymentSubmission} />


            </form>

            <form className="motoboy" style={{display: motoboy? 'flex':'none'}}>
                <form onChange={(e)=>{handleMotoboyOption(e.target.value)}}>
                    <label>Metodo de pagamento:</label>
                    <label>
                        <input type="radio" name="motoboy-pay" value="motoboy-card" id="motoboy-card" />
                        Cartão
                    </label>
                    <label>
                        <input type="radio" name="motoboy-pay" value="motoboy-money" id="motoboy-money" />
                        Dinheiro
                    </label>
                </form>

                <input className="submit-button" type="submit" value="Enviar" onClick={handlePaymentSubmission}  />
            </form>

            <span className="alert" style={{display: showAlert ? 'block' : 'none'}}>Pagamento Confirmado!</span>
            
        </div>
    )
}
