import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import Home from './Home'
import Checkout from "./Checkout";
import Login from './Login'
import Payment from './Payment'
import {useEffect} from 'react'
import {auth} from './firebase'
import { useStateValue } from "./StateProvider";
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

//server side rendering nextjs
//Router - higher order component 
//Route - 

const promise = loadStripe('pk_test_51JcBx8SHsgZFwewrZolEYxoNcWFvPdipVnHhNvrKqfCUq6Hvwz18gOrujDjp4Fw0WCVhgjIpfOXIDgml7LyTPAOi00rsJkpH0n')

function App() {

  const [{},dispatch]=useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/payment">
            <Header/>
            <Elements stripe={promise}>
            <Payment/>
            </Elements>
          </Route>
          <Route path="/login">
            <Login/></Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
