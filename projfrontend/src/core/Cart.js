import React,{useEffect,useState} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { loadCart } from "./helper/CartHelper";
import { isAutheticated } from "../auth/helper";



const  Cart = ()=> {

    const [products ,setProducts] = useState([])

    const [reload , setReload ] = useState(false)
 


    
    useEffect(()=>{
       setProducts(loadCart())
    },[reload ])
    const loadAllProducts = () =>{
        return(
            <div>
                <h2>Your Cart !! </h2>
                
                { products &&  products.map((product ,index)=>{
                    return(
                        <div className="text-center mb-4">
                    <Card
                    key={index}
                    product={product}
                    addtoCart={false}
                    removeFromCart={true}
                    setReload={setReload}
                    reload={reload}
                    />
                    </div>
                    )

                })}
            </div>
        )
    }
    const loadCheckout = () =>{
        return(
            <div>
                <h2>This Seection for checkout </h2>
            </div>
        )
    }





    

  return (
    <Base title="Cart Page" description="Ready TO CheckOut">
      <div className="row">
          <div className="col-5" >
            {loadAllProducts()}
          </div>
          <div className="col-2"></div>
          <div className="col-5">

              {loadCheckout()}
              
          </div>
   
      </div>
    </Base>
  );
}

export default Cart
