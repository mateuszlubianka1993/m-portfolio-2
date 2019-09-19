import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';

const App = () => {
    return(
        <div className="app-container">
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                       <Route path="/" exact component={Home} /> 
                       <Route path="/about" component={About} /> 
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
