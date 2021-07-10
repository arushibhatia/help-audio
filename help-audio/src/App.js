import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <header>
        <nav class="navbar">
          <ul class="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/recordings">Recordings</Link></li>
            <li><Link to="/location">Location</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div class="btns">
        <button id="textBtn" onClick="textContacts()">TEXT A FRIEND</button>
        <br/>
        <br/>
        <button id ="fakeCall" onClick="fakeCallToUser()">FAKE CALL</button>
        <br/>
        <br/>
        <button id ="locationTracker" onClick="trackLocation()">SHARE MY LOCATION</button>
      </div>
       {/* <input type="checkbox" id="audio1" name="Audio 1"> */}
        {/* <label for="audio1"> <audio 1> </udio>
          <audio controls src="./song.mp3"></audio> 
        </label>
        <br>
        <input type="checkbox" id="audio2" name="Audio 2" value="Audio 2">
        <label for="audio2"> <Audio 2> </Audio><audio controls src="./song.mp3"></audio> </label><br>
        
        <input type="checkbox" id="audio3" name="Audio 3" value="Audio 3">
        <label for="audio2"> <Audio 3> </Audio><audio controls src="./song.mp3"></audio> </label><br>
        
        <input type="checkbox" id="audio4" name="Audio 4" value="Audio 4">
        <label for="audio4"> <Audio 4> </Audio><audio controls src="./song.mp3"></audio> </label><br> */}
      <footer>Built by HackHers &copy 2021</footer>
    </div>
      
  )
}

function Contacts() {
  return (
    <div class="container">
        <header class= "header"> 
            <form class= "search-bar">
                <input type="search-name" class="contact-search" name="search-area" placeholder="Search" />
            </form>
            <i class="fas fa-plus-circle add"></i> 
        </header>
        <section class= "contacts-library">
            <ul class="contacts-list">
                <div class="contact-section">
                    <li class="list__item">
                      <p class="contact-name">Jackie</p>
                      <p class="relationship">Friend</p>
                    </li>
                    <li class="list__item">
                        {/* phone and message icon */}
                        <i class="fas fa-phone"></i>
                        <i class="fas fa-comments"></i>
                    </li>
                </div>  
                <hr />
                <div class="contact-section">
                    <li class="list__item">
                        <p class="contact-name">Malika</p>
                        <p class="relationship">Friend</p>
                    </li>
                    <li class="list__item">
                        {/* phone and message icon */}
                        <i class="fas fa-phone"></i>
                        <i class="fas fa-comments"></i>
                    </li>
                </div>  
                <hr />
                <div class="contact-section">
                  <li class="list__item">
                    <p class="contact-name">Sonya</p>
                    <p class="relationship">Friend</p>
                  </li>

                  <li class="list__item">
                      {/* phone and message icon  */}
                      <i class="fas fa-phone"></i>
                      <i class="fas fa-comments"></i>
                  </li>
                </div>  
                <hr />

                <div class="contact-section">
                        <li class="list__item">
                          <p class="contact-name">Arushi</p>
                          <p class="relationship">Friend</p>
                        </li>
    
                        <li class="list__item">
                            {/* phone and message icon */}
                            <i class="fas fa-phone"></i>
                            <i class="fas fa-comments"></i>
                        </li>
                    </div>  
                    <hr />

                    <div class="contact-section">
                            <li class="list__item">
                                <p class="contact-name">Sona</p>
                                <p class="relationship">Friend</p>
                            </li>
                            <li class="list__item">
                                {/*phone and message icon */}
                                <i class="fas fa-phone"></i>
                                <i class="fas fa-comments"></i>
                            </li>
                        </div>  
                        <hr />
                        <div class="contact-section">
                            <li class="list__item">
                                <p class="contact-name">Vinitha</p>
                                <p class="relationship">Friend</p>
                            </li>
                            <li class="list__item">
                                    {/* phone and message icon */}
                                    <i class="fas fa-phone"></i>
                                    <i class="fas fa-comments"></i>
                            </li>
                        </div>  
        <hr />              
            </ul>
        </section>

    </div>

  )
}
export default App;
