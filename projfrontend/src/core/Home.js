import React from 'react'
import "../styles.css"
import { API } from "../backend"
import Base from "./Base"
 
export default function Home(){
    console.log("API IS",API)
    return (
        <Base title="HOME PAGE" description="Welcome to the T-Shirt Store" >
            <div className="row">
                <div className="col-4 text-center">
                 <button className="btn btn-success text-center">TEST</button>
                </div>
                <div className="col-4 text-center">
                <button className="btn btn-success text-center" >TEST</button>
                    </div>
                <div className="col-4 text-center">
                <button className="btn btn-success text-center">TEST</button> 
                </div>
            </div>
        </Base>
    )
}