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
    <Base title="Home Page" description="Welcome To The T-shirt Store">
      <div className="row text-center">
        <div className="col-12 text-center">
       <h1 className="text-white">
        Hey , We Are Selling Here .....
       </h1>
       </div>
       <div className="row">
         {products.map((product, index)=>{
           return(
             <div key={index} className="col-lg-4 mb-4 mt-4">
              <Card product={product}/>
             </div>
           )
         })}
       </div>
      </div>
    </Base>
  );
}
