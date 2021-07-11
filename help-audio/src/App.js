import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contacts from './components/Contacts'
import Location from './components/Location'
import Recordings from './components/Recordings'
import Settings from './components/Settings'
import Login from './components/Login'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import React from "react"
import Signup from "./components/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./contexts/AuthContext"
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"
import UpdateProfile from "./components/UpdateProfile"


function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
    >
    <Router>
    <div className="app">
      <Header />
      <AuthProvider>
      <Switch>
      <PrivateRoute exact path="/components/dashboard" component={Dashboard} />
      <PrivateRoute path="/update-profile" component={UpdateProfile} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/components/login"  component={Login}/>
      <Route path="/components/settings"  component={Settings}/>
      <Route path="/components/recordings"  component={Recordings}/>
      <Route path="/components/location"  component={Location}/>
      <Route path="/components/contacts"  component={Contacts}/>
      <Route path="/components/about"  component={About}/>
      <Route path ="/" exact component={Home}/>
      
      </Switch>
      </AuthProvider>
      <footer>Built by HackHers copyright 2021</footer>
    
    </div>
    </Router>
    </Container>
  );
}


function Home() {
  const textContacts = () => {
    // get the person's contacts from the Firebase database
    console.log("texting");
    // turn the object (key: contact name, value: object phone number) into an array of phone numbers
    // let allContacts = {}; // database contacts object
    // let phoneNumArr = Object.values(allContacts);
    // let sendString = userName + " feels like they are in danger and has auto alerted you of this via our app. Please call them and stay on the line until they are safe."
    // for(phoneNum in phoneNumArr) {
    //     console.log(phoneNum);
    //  fetch("https://textbelt.com/text", {
    //     method: "post",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       phone: phoneNum,
    //       message: sendString,
    //       key: "4722fe44d79de99464d8437aea8875e7154670fboiE5L1hQg6rwtgWJLJrcWX3iz",
    //     }),
    //   })
    //     .then((response) => {
    //       return response.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //     });
  }
  return (
    <div>
    <br/><br/>
    <div class="btns">
      <button id="textBtn" onClick={textContacts}>TEXT A FRIEND</button>
    <br/>
      <br/>
      <button id ="fakeCall" onClick="fakeCallToUser()">FAKE CALL</button>
    <br/>
      <br/>
      <button id ="locationTracker" onClick="trackLocation()">HOTLINE</button>
    </div>
  </div>
  );
} 

   
export default App;
