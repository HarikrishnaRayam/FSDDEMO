import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import env from "react-dotenv";
import axios from "axios";
function Create() {
  let [businessName, setBusinessName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [pincode, setPincode] = useState("");
  let navigate = useNavigate("");
  let handleSubmit = async () => {
    let res = await axios.post(env.API_URL, {
      businessName,
      email,
      mobile,
      address,
      city,
      state,
      pincode,
    });
    if (res.data.statusCode == 200) {
      navigate("/");
    }
  };

  return (
    <>
      <form>
        <div className="form-group">
          <label>Business Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Business Name"
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile Number"
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter State"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Pin Code</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Pin Code"
            onChange={(e) => setPincode(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default Create;
