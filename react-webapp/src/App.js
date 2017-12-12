import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import logo from './logo.svg';
import './Blog.css';

//import Button from './Button'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Ossa from "./Ossa";
import Blog from "./Blog";
import Hack from "./Hack";
import Login from "./Login";
import OssaSymbol from "./OssaSymbol";
//import Stuff from "./Stuff";
//import Contact from "./Contact";
class App extends Component {
state = {

}


  render() {
    return (
    //  <div>

    /*  <div>

      <div className="wholepage">


        <div className="top-bar">
          <div className="display0">
            <button className="ossa" onClick ={()=> this.OssaAction()}>Ossa</button>
            <li><a href=""></a></li>
          </div>
          <div className="display1">
            <button className="ossaSymbol" onClick ={()=> this.OssaAction()}></button>
            <li><a href=""></a></li>
          </div>
          <div className="display2">
            <button className="HomeSymbol" onClick ={()=> this.HomeAction()}>Home</button>
            <li><a href=""></a></li>
          </div>
          <div className="display3">
            <button className="BlogSymbol" onClick ={()=> this.BlogAction()}>Blog</button>
          </div>

          <div className="display4">
            <button className="HackSymbol" onClick ={()=> this.HackAction()}>Hackathon</button>
          </div>
          <div className="display5">
            <button className="LoginSymbol" onClick ={()=> this.LoginAction()}>Login</button>
          </div>
        </div>
        <div className="middle-bar">
          <text className="textinside">INTELMARK?</text>
              <text className="textinside1">OSSA?</text>
        </div>
        <div className="white">
        </div>
        <rectangle className="white-item">
        <div className="inside-white1">GENERATING BLOCKCHAIN</div>
        <div className="inside-white2">Build with Proffer @ Hackathon & Summit, Nov 10-13</div>
        <div className="inside-white3">$17,000 in prizes for your blockchain apps and smart contracts.
Participate in person (IIT Delhi) or remotely.
</div>


        </rectangle>

       </div>
       <BrowserRouter>
        <Route path="/" component={enthu}/>
        </BrowserRouter>

       </div>
      */
      <HashRouter>
      <div>

         <div className="top-bar">
           <button className="ossa"><NavLink to="/ossa"></NavLink></button>
           <button className="BlogSymbol"><NavLink to="/blog">BLOG</NavLink></button>
           <button className="HackSymbol"><NavLink to="/hack">HACKATHON</NavLink></button>
          <button className="LoginSymbol"><NavLink to="/login">LOGIN</NavLink></button>
          <button className="ossaSymbol"><NavLink to="/OssaSymbol"></NavLink></button>
          </div>
         <div className="content">
         <Route exact path="/ossa" component={Ossa}/>
         <Route exact path="/blog" component={Blog}/>
         <Route exact path="/hack" component={Hack}/>
         <Route exact path="/login" component={Login}/>
         <Route exact path="/OssaSymbol" component={OssaSymbol}/>
          </div>
       </div>
       </HashRouter>
          //  </div>

    );
  }
}

export default App;
