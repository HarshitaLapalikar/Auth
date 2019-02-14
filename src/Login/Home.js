import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{

        logoutHandler = (e) => {
            // this.props.history.push('/login')
            localStorage.removeItem("token");
            console.log(localStorage.getItem('token'), "token");
        }

    render(){
        return(
            <div>
                   <h1> You are now logged in </h1> <br/>



                    <Link to='/' onClick={(e) => this.logoutHandler(e)}>Logout</Link>

                 
            </div>
        );
    }
}

export default Home;