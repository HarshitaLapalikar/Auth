import React, { Component } from 'react';
import {show_topten} from './TopTenAction'
import { connect } from 'react-redux';




class TopTen extends Component {
    componentDidMount = () => {

        this.props.show_topten(this.props.history);
            
    }

render (){
                
          const { topten_dish, loading} = this.props;
          if(loading){
                      return(
                       <div>Loading...</div>
                      )
                    }
          else {
          console.log(topten_dish, 'topten_dishes');
          return topten_dish.map(function(dish){
              return(
                     <div>
                     <h1> Top Ten Dishes are- </h1>               
                       {    
                          <li key={dish.id}>
                          {dish.dish_name}
                          <br/>
                          {dish.restaurant_name}
                          <br/>
                          {dish.location}
                           </li>
                        }
                     </div>
                    )       
                 })
          }                
        } 
    }

        const mapDispatchToProps = dispatch =>{
             return{
                 show_topten : () => dispatch(show_topten())
                }
        }


       const mapStateToProps = (state) => {
           return{
                topten_dish : state.topten.topten_dish,
                loading:state.topten.loading
           }
   }

    
export default connect (mapStateToProps, mapDispatchToProps) (TopTen);