import React, { Component } from 'react';
import Login from "../Login/Login";
import Register from "../Register/Register";



class GuestLanding extends Component {
    constructor () {
        super();
        this.state = {
            
        }
    }

render() {
    return (
        <div>
            
                
            <Login />
        
            <Register />
     
          
        </div>
    )
}
}

export default GuestLanding;