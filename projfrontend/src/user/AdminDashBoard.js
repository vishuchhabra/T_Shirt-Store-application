import React from 'react'
import Base from "../core/Base"
import {isAutheticated} from  "../auth/helper/index"
import { Link } from 'react-router-dom'

const AdminDashBoard =()=>{
    const  {user: {name, email ,role}} = isAutheticated()

    const adminLeftSide = ()=>{
      return (
        <div className="card">
            <h4 className="card-header bg-dark text-white ">Admin Navigation</h4>
            <ul className="List-group">
             <li className="List-group-item">
                 <Link to="/admin/create/product" className="nav-link text-success "> Create Categories</Link>

             </li>
             <li className="List-group-item">
                 <Link to="/admin/create/category" className="nav-link text-success "> Create Product</Link>

             </li>
             <li className="List-group-item">
                 <Link to="/admin/products" className="nav-link text-success "> Manage Products</Link>

             </li>
             <li className="List-group-item">
                 <Link to="/admin/orders" className="nav-link text-success "> Create Orders</Link>

             </li>
            </ul>
        </div>
      )
    }
    
    const adminRightSide = ()=>{
       return(
          <div>
              <h1>Hii Admin</h1>
          </div> 
       )
    }


    return (
        <Base title="WelCome to Admin Area" description="Manage all of your products here"
        className="container bg-success p-4">
            <div className="row">
                <div className="col-3">
                    
                {adminLeftSide()}
                </div>
                <div className="col-9">
                {adminRightSide()}
                </div>
            </div>
      

        </Base>
    )
}

export default AdminDashBoard