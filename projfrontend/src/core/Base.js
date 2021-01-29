import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My Desription",
  className = "bg-white text-white p-4",
  children
}) => (
  <div>
    <Menu/>
    
    <div className="container-fluid">
      <div className="jumbotron bg-white text-success text-center">
        <h2 className="font-weight-bold text-lg text-success"> {title}</h2>
        <h5 className="font-weight-bold text-danger">{description}</h5>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="footer bg-white mt-auto py-3">
      <div className="container-fluid bg-success text-white text-center py-3">
        <h5>Feel Free To Reach Out ......</h5>
        <a href="mailto:vishuchhabra1016@gmail.com"><button className="btn btn-warning btn-lg"><h6>Contact Us</h6></button></a>
      </div>
      <div className="container">
        <h6 className="text-success">
          An Amazing <span className="text-danger ">T-Shirt</span> Store
        </h6>
      </div>
    </footer>
  </div>

);

export default Base;
