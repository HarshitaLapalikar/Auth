import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopTen  from '../TopTen/Topten';

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
                  
                   <TopTen/>

                    <Link to='/' onClick={(e) => this.logoutHandler(e)}>Logout</Link>

                 
            </div>
        );
    }
}

export default Home;