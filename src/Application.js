import React, {Component} from 'react';
import Semester from './components/semester';
import Incomplete from './components/incomplete';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';

import './Application.css';

class Main extends Component{
    render(){
        const logo ={
            fontFamily: "cursive",
            fontSize: "50px",
            fontStyle: "italic",
            color:"blue"
        };
        const logosub={
            fontFamily:"sans-serif",
            color:"white",
            fontStyle: "italic"
        };

        return(
            <div>
                <h1 style={{textAlign:"center"}}><span style={logo}>GP</span><span style={logosub}>meter</span></h1>
                <Router>
                <Switch>
                    <Route path="/" exact component={Buttons} />
                    <Route path="/semester" component={Semester}/>
                    <Route path="/incomplete" component={Incomplete}/>
                </Switch>
            </Router>
            </div>
        );
    }
    
}

class Buttons extends Component{
    render(){
        return(

            <div className="nav">
                <Link to="/semester">
                <button className="nav-buttons">Single Semester</button>
                </Link>
                <br/>
                <Link to="/incomplete">
                <button className="nav-buttons">Single Session</button>
                </Link>
                <br/>
                <Link to="/incomplete">
                <button className="nav-buttons">Cummulative</button>
                </Link>
            </div>

        );
    }
}
export default Main;