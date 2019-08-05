import React from 'react';
import Header from './components/header';
import Home from './components/home';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');
class App extends React.Component{
	constructor(props){
		super(props);
		this.state={title : "Home"}
	}
	
	getTitle(){
		console.log('in title');
	}
	
	render() {
	  return (
		<div className="App">		  
		  <Home onClick="{this.getTitle}" />
		  <Footer />
		</div>
	  );
	}
}


export default App;
