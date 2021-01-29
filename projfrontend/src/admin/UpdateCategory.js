import React, { useState } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
import { updatethisCategory} from "./helper/adminapicall";

const UpdateCategory = ( {match}) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading ,setLoading] = useState(false)

  const { user, token } = isAutheticated();

  const goBack = () => (
    <div className="mt-5">
      <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard" >
        Admin Home
      </Link>
    </div>
  );

  const handleChange = event => {
    setError("");
    setName(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setLoading(true);

    //backend request fired
    
    updatethisCategory(match.params.categoryId, user._id, token,{name}).then(data => {
      if (data.error) {
        setError(true);
        setLoading(false)
      } else {
        setError("");
        setSuccess(true);
        setName("");
        setLoading(false)
      }
    });
  };
  const loadingMessage = () => {
    return (
      loading && (
        <div className="alert alert-success">
          <h2>Loading...</h2>
        </div>
      )
    );
  };


  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category Updated Successfully</h4>;
    }
  };

  const warningMessage = () => {
    if (error) {
      console.log(error)
      return <h4 className="text-danger">Failed To Update Category</h4>;
    }
  };

  const myCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead">Rename Category Name </p>
        <input
          type="text"
          className="form-control my-3"
          onChange={handleChange}
          value={name}
          autoFocus
          required
          placeholder="For Ex. Summer"
        />
        <button onClick={onSubmit} className="btn btn-outline-success">
          Update Category
         </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Update Category Here"
      description="Add New Name For Category"
      className="container bg-success p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
          {loadingMessage()}
          {successMessage()}
          {warningMessage()}
          {myCategoryForm()}
          {goBack()}
        </div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
