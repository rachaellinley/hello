import React, { Component } from 'react';
import { connect } from 'react-redux';
import {registerUser } from "../../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";


class Register extends Component {
    constructor () {
        super();
        this.state = {
           
            username: "",
            password: ""
        }

    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleRegister = () => {
        const {registerUser} = this.props;
        const { username, password } = this.state;
        registerUser({username, password })
    }


render() {
    if(this.props.user_id){
        return(
            <Redirect to={`/profile/${this.props.user_id}`} />
        )
    }
   
    return (
        <div >
            <h1> Register </h1>

            <input name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
            <input name="password" placeholder="password" value= {this.state.password} onChange={this.handleChange}/>
            <button onClick={this.handleRegister}>Register</button>
           
        </div>
    )
}
}

const mapStateToProps = reduxState => {
    return {
      user_id: reduxState.authReducer.user_id
    }
  }
  
  export default connect(mapStateToProps, { registerUser })(Register);