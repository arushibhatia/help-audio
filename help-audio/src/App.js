import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
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
      <Nav />
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
      <footer>Built by HackHers &copy 2021</footer>
    
    </div>
    </Router>
    </Container>
     );
   }

   const Home = () => (
     <div>
       <br/><br/>
       <div class="btns">
         <button id="textBtn" onClick="textContacts()">TEXT A FRIEND</button>
        <br/>
         <br/>
         <button id ="fakeCall" onClick="fakeCallToUser()">FAKE CALL</button>
        <br/>
         <br/>
         <button id ="locationTracker" onClick="trackLocation()">SHARE MY LOCATION</button>
       </div>
     </div>
   )
   
 
// function Home() {
//   return (
//     <div>
//      
       /* <input type="checkbox" id="audio1" name="Audio 1"> */
        /* <label for="audio1"> <audio 1> </udio>
          <audio controls src="./song.mp3"></audio> 
        </label>
        <br>
        <input type="checkbox" id="audio2" name="Audio 2" value="Audio 2">
        <label for="audio2"> <Audio 2> </Audio><audio controls src="./song.mp3"></audio> </label><br>
        
        <input type="checkbox" id="audio3" name="Audio 3" value="Audio 3">
        <label for="audio2"> <Audio 3> </Audio><audio controls src="./song.mp3"></audio> </label><br>
        
        <input type="checkbox" id="audio4" name="Audio 4" value="Audio 4">
        <label for="audio4"> <Audio 4> </Audio><audio controls src="./song.mp3"></audio> </label><br> */
    
      
 
// function Contacts() {
//   return (
//     <div class="container">
//         <header class= "header"> 
//             <form class= "search-bar">
//                 <input type="search-name" class="contact-search" name="search-area" placeholder="Search" />
//             </form>
//             <i class="fas fa-plus-circle add"></i> 
//         </header>
//         <section class= "contacts-library">
//             <ul class="contacts-list">
//                 <div class="contact-section">
//                     <li class="list__item">
//                       <p class="contact-name">Jackie</p>
//                       <p class="relationship">Friend</p>
//                     </li>
//                     <li class="list__item">
//                         {/* phone and message icon */}
//                         <i class="fas fa-phone"></i>
//                         <i class="fas fa-comments"></i>
//                     </li>
//                 </div>  
//                 <hr />
//                 <div class="contact-section">
//                     <li class="list__item">
//                         <p class="contact-name">Malika</p>
//                         <p class="relationship">Friend</p>
//                     </li>
//                     <li class="list__item">
//                         {/* phone and message icon */}
//                         <i class="fas fa-phone"></i>
//                         <i class="fas fa-comments"></i>
//                     </li>
//                 </div>  
//                 <hr />
//                 <div class="contact-section">
//                   <li class="list__item">
//                     <p class="contact-name">Sonya</p>
//                     <p class="relationship">Friend</p>
//                   </li>

//                   <li class="list__item">
//                       {/* phone and message icon  */}
//                       <i class="fas fa-phone"></i>
//                       <i class="fas fa-comments"></i>
//                   </li>
//                 </div>  
//                 <hr />

//                 <div class="contact-section">
//                         <li class="list__item">
//                           <p class="contact-name">Arushi</p>
//                           <p class="relationship">Friend</p>
//                         </li>
    
//                         <li class="list__item">
//                             {/* phone and message icon */}
//                             <i class="fas fa-phone"></i>
//                             <i class="fas fa-comments"></i>
//                         </li>
//                     </div>  
//                     <hr />

//                     <div class="contact-section">
//                             <li class="list__item">
//                                 <p class="contact-name">Sona</p>
//                                 <p class="relationship">Friend</p>
//                             </li>
//                             <li class="list__item">
//                                 {/*phone and message icon */}
//                                 <i class="fas fa-phone"></i>
//                                 <i class="fas fa-comments"></i>
//                             </li>
//                         </div>  
//                         <hr />
//                         <div class="contact-section">
//                             <li class="list__item">
//                                 <p class="contact-name">Vinitha</p>
//                                 <p class="relationship">Friend</p>
//                             </li>
//                             <li class="list__item">
//                                     {/* phone and message icon */}
//                                     <i class="fas fa-phone"></i>
//                                     <i class="fas fa-comments"></i>
//                             </li>
//                         </div>  
//         <hr />              
//             </ul>
//         </section>

//     </div>

//   )
// }
export default App;
