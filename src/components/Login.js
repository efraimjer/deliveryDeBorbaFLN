import React from 'react'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import './components.css'

import hand from '../assets/67328.png'

export default function Login(props) {
    return (
        <div>
            <img src={hand} className="hand" alt="hand"/>
            <h4>Faça Login com sua conta do Google</h4>
    <GoogleLogin
        clientId="968915938754-mtvfctuiu7b7380tllgpi3cb1s8m5r6l.apps.googleusercontent.com"
        buttonText="Entrar"
        onSuccess={props.foo}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        

        />

    <h4>Faça Login com sua conta do Facebook</h4>

  <FacebookLogin
      appId="715122555793895"
      autoLoad={false}
      isMobile={false}
      icon="fa-facebook"
      fields="name,email,picture"
      textButton="Entrar"
      onClick={props.foo2}
      callback={props.foo2} />
        </div>
    )
}
