
import './App.css';
import React, {useEffect, useState} from 'react'



import Menu from './components/Menu'
import Login from './components/Login'
import LandingPage from './components/LandingPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";

function App() {

  const[user, setUser] = useState("");
  const[x, setX] = useState("")

  const history = useHistory();

useEffect(()=>{

  displayUser()

 

})

const isLogged = () =>{
  return user ? <Menu user={user} history={history} /> : <Menu user={user} />  
}

  const displayUser = (props) =>{
    setUser(x)
  }


  const responseGoogle =(response)=>{

    setX(response.profileObj);
    console.log('logged in')

  }

  const responseFacebook =(response)=>{
    setX(response)
    console.log(x)
  }
  return (
    
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <LandingPage/>
            </Route>
            <Route exact path="/menu">
              {isLogged}
            </Route>
          </Switch>



        </Router>


      </div>
  
  );
}

export default App;
