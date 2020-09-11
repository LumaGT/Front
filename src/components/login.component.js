import React, { Component } from "react";
import {loginUser} from '../Actions/authActions'
export default class Login extends Component {
   
        constructor(props){
           
            super(props);
            this.state = {
                password: '',
                username: ''
            };
           
            }
            
        
        handleName =(e)=> { this.setState({username: e.target.value}) }
        handleLastName=(e)=> { this.setState({password: e.target.value}) }




        handleSubmit=()=> { 
            const userData = {
                username: this.state.username,
                password: this.state.password
            };
           loginUser(userData);
            console.log(userData)
          }


    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="Enter username"   onChange={(e)=>this.handleName(e)} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password"  onChange={(e)=>this.handleLastName(e)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                       
                    </div>
                </div>

                <button type="submit"  onClick={this.handleSubmit} className="btn btn-primary btn-block">Submit</button>
               
            </form>
        );
    }
    
}
