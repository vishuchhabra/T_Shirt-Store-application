import React,{useEffect,useState} from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./card";
import { getProducts } from "./helper/coreapicalls";


export default function Home() {

  const [products ,setProducts] = useState([])
  const [error ,setError]= useState(false)

  const loadAllProduct = ()=>{
    getProducts().then(
      data =>{
        if(data.error){
          setError(data.error)

        }
        else{
          setProducts(data)
        }
      }
    )
  }

useEffect(()=>{
     loadAllProduct()
  },[])

    

  return (
    <Base title="Just Having Satisfied Customers Isn’t Good Enough Anymore" description="- Ken Blanchard - Mollie Beck">
      <div className="row text-center">
        <div className="col-12 text-center">
       <h3 className="text-success">
        Hey , We Are Selling Here .....
       </h3>
       </div>
       <div className="row">
         {products.map((product, index)=>{
           return(
             <div key={index} className="col-lg-4 col-md-6 mb-4 mt-4">
              <Card product={product}/>
             </div>
           )
         })}
       </div>
      </div>
    </Base>
  );
}
