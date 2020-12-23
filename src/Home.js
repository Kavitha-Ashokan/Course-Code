import React, { Component } from 'react';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Form from './Form';
import PickOption from './PickOption';
import VisibilityToggle from './Visibility-Toggle';
import './form.css';

 class Home extends Component {
    render() {
        return (
            <div>
                <center>
                <h1>Code There</h1>
                <Router>
                        <Link className="link" to="">Home</Link><br/>
                        <Link className="link" to="/form">Form</Link><br/>
                        <Link className="link" to="/pickup">Pick Option</Link><br/>
                        <Link className="link" to="/toggle">Visibility Toggle</Link>
                    <Switch>
                        <Route path="/form" component={Form}/>
                        <Route path="/pickup" component={PickOption}/>
                        <Route path="/toggle" component={VisibilityToggle}/>
                    </Switch>
                </Router>
                </center>
            </div>
        )
    }
}
export default Home;