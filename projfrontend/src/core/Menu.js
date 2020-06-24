import React,{Fragment} from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#FFFFFF" };
  } else {
    return { color: "#2ecc72" };
  }
};

const Menu = ({ history }) => (
  <div className="mb-5">
    <ul className="nav nav-tabs bg-dark fixed-top">
      <li className="nav-item">
        <Link style={currentTab(history, "/")} className="nav-link" to="/">
           <h4> Home</h4>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          style={currentTab(history, "/cart")}
          className="nav-link"
          to="/cart"
        >
          <h4>Cart</h4>
          
        </Link>
      </li>
      {isAutheticated() && isAutheticated().user.role===0 && (
         <li className="nav-item">
         <Link
           style={currentTab(history, "/user/dashboard")}
           className="nav-link"
           to="/user/dashboard"
         >
           <h4>Dashboard</h4>
          
         </Link>
       </li>
      )}
      {
        isAutheticated() &&  isAutheticated().user.role===1  && (
          <li className="nav-item">
          <Link
            style={currentTab(history, "/admin/dashboard")}
            className="nav-link"
            to="/admin/dashboard"
          >
            <h4>Dashboard</h4>

          </Link>
        </li>  
        )
      }
      {!isAutheticated()  &&(
         <Fragment>
         <li className="nav-item">
           <Link
             style={currentTab(history, "/signup")}
             className="nav-link"
             to="/signup"
           >
             <h4>Signup</h4>
             
           </Link>
         </li>
         <li className="nav-item">
           <Link
             style={currentTab(history, "/signin")}
             className="nav-link"
             to="/signin"
           >
             <h4>Sign In</h4>
             
           </Link>
         </li>
         </Fragment>
      )}
      {isAutheticated() && (
         <li className="nav-item">
        <span style={{"color":"#f1c40f"}} className="nav-link  " onClick={
          ()=> {
            signout(()=>{
              history.push("/")
            })
          }
        }>
          <h4>Signout</h4>
        
        </span>

      </li>
      ) }
      
    </ul>
  </div>
);

export default withRouter(Menu);
