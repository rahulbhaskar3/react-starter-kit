import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Users from './components/users';
import Contact from './components/contact'; 
import {PrivateRoute}  from './helpers/privateRoute';

const routing = (
	<Router>
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">Demo App</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				  </button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
					  <li className="nav-item active">						
						<Link className="nav-link" to="/">Home</Link>
					  </li>
					  <li className="nav-item">
						<Link className="nav-link" to="/users">Users</Link>
					  </li>
					  <li className="nav-item">
						<Link className="nav-link" to="/contact">Contact</Link>
					  </li>
					  
					</ul>
					<form className="form-inline my-2 my-lg-0">
					  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>  		  
			</nav>
			<Route exact path="/" component={App} />
			<PrivateRoute path="/users" component={Users} />
			<Route path="/contact" component={Contact} />

			
  </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
