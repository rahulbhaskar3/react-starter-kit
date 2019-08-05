import React, {Component} from 'react';
const axios = require('axios');
const config = require('../config/config');
const statusCodes = require('../config/statusCodes');
const errMessages = require('../config/errMessages');
class Home extends Component{
	constructor(props){
		super(props);
		this.state = {email: "", password: "", loginErr: ""};
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}
	
	handleEmailChange(e) {
		this.setState({email: e.target.value});
	}
	handlePasswordChange(e) {
	   this.setState({password: e.target.value});
	}
	
	handleLogin() {
		axios.post(config.BASE_API_URL+'api/login', {
			email: this.state.email,
			password: this.state.password
		})
		.then(function (response) {
			if(response.status === statusCodes.ok){
				localStorage.auth = JSON.stringify(response.data);
				this.props.history.push("/users");
			}else{
				this.setState({loginErr: errMessages.loginErr});
			}
		})
		.catch(function (error) {
			console.log(error);
		});
	}
	
	render(){
		return(
		<form>
		  <div className="form-group">	
			<input type="text" name="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} />
		  </div>
		  <div className="form-group">	
			<input type="password" name="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
		  </div>
          <button type="button" className="btn btn-primary" onClick={this.handleLogin}>Login</button>
        </form>
		);
	}
}

export default Home;
