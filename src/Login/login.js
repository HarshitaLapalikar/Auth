import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../Redux/action'

class Login extends Component {
        state = {
            phone_number: "",
            password : ""
        }

        handleSignIn = (e) => {
            e.preventDefault();

            console.log(this.state.phone_number, this.state.password);
             const values ={
                phone_number: this.state.phone_number,
                password : this.state.password
             }
             this.props.auth(this.state, values);
        }
     
        handlePnumber = (e) => {
            this.setState({phone_number : e.target.value});
        }
             
        handlePassword = (e) => {
            this.setState({password: e.target.value});
        }


    render(){
        return(
        
                <div>
                    <center>
                    <h1> Login Here </h1>
                <form > 
                 
                         <div >
                             <label >Phone Number:</label>
                                <input  type="text" 
                                        placeholder='Phone Number'
                                        onChange = {(e) => this.handlePnumber(e)} />
                                </div>
                                <div>
                                         <label >Password:</label>
                                        <input  type="password" 
                                            placeholder = ' Password'
                                            onChange = {(e) => this.handlePassword(e)}  />
                         </div>
                         <br/>
                                <button type="submit"
                                onClick={(e)=> this.handleSignIn(e)}>Sign-In</button>
               
                 </form> 
                 </center>
                </div>



        );
    }
}
    const mapDispatchToProps = dispatch => {
        return{
           auth : (values) => dispatch(auth(values)) 
        };
    };
       


export default connect (null, mapDispatchToProps) (Login);