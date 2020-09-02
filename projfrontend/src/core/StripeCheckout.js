import React,{useState,useEffect} from 'react'
import { isAutheticated } from '../auth/helper'
import { cartEmpty, loadCart } from './helper/CartHelper'
import {Link} from 'react-router-dom'
import  StripeCheck from  "react-stripe-checkout"
import { API } from '../backend'
import {createOrder } from './helper/orderHelper'


const StripeCheckout = (
    {products ,setReload = f=> f, reload= undefined}
) =>{

    const [data ,setData] = useState({
        loading:false,
        success:false,
        error:"",
        address:""
    })
    
    const token = isAutheticated() &&  isAutheticated().token
    const userId = isAutheticated() &&  isAutheticated().user._id
  
    const getFinalPrice = () =>{

        let amount =0 ;
            if(products){
            products.map ( p =>{
                amount = amount + p.price
            })
        }  
        return amount 
    }

    const makePayment = (token) =>{
        const body = {
            token ,
            products
        }
        const headers ={
            "Content-Type":"application/json"
        }
        return fetch(`${API}/stripepayment`,{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        }).then(response =>{
            
            const {status}= response
            console.log("Payment Successfully Completed")
            console.log("STATUS",status)
           

            const orderData = {
                products: products,
                
            }

            //for storig the order in the data base
            //  createOrder(userId, token, orderData);
            
            cartEmpty(() =>{
                console.log("Did we git as crash")
            })
            setReload(!reload )
        })
        .catch(err =>console.log(err))
    }

    const showStripeButton = () =>{
        return isAutheticated() ? (
            <StripeCheck stripeKey="pk_test_51HMpxgA45ZcvZKqDUVyBnoJMZBOxbWhUpH4cgxNjssLHhkHksiKPMlJIP76cbUE0NfHYVtZlb7mDKQfbtFa4NMuP00MDs9BKEN"
            token={makePayment}
            amount={getFinalPrice()*100}
            name="Buy T-  Shirts"
            shippingAddress 
            billingAddress>

          <button className="btn btn-success">Pay With Stripe</button>  </StripeCheck>
        ):(
            <Link to="/signin"><button className="btn btn-warning">Signin</button></Link> 
        )
    }

    return (
        <div>
            <h2 className="text-white">price {getFinalPrice()}</h2>
            <br/>
            <br/>
            {showStripeButton()}
        </div>
    )
}


export default StripeCheckout