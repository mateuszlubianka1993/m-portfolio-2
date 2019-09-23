import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';

const App = () => {
    return(
        <div className="app-container">
            <BrowserRouter>
                <div>
                    <NavBar />
                    <Switch>
                       <Route path="/" exact component={Home} /> 
                       <Route path="/about" component={About} />
                       <Route path="/contact" component={Contact} /> 
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
