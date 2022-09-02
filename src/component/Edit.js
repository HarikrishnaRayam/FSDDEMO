import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import env from "react-dotenv";
import axios from "axios";
function Edit(props) {
  let params = useParams();
  let [businessName, setBusinessName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [address, setAddress] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [pincode, setPincode] = useState("");
  let navigate = useNavigate();
  let handleSubmit = async () => {
    let res = await axios.put(`${env.API_URL}${params.id}`, {
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
  let getData = async () => {
    let res = await axios.get(`${env.API_URL}${params.id}`);
    setBusinessName(res.data.data.businessName);
    setEmail(res.data.data.email);
    setMobile(res.data.data.mobile);
    setAddress(res.data.data.address);
    setCity(res.data.data.city);
    setState(res.data.data.state);
    setPincode(res.data.data.pincode);
  };
  useEffect(() => {
    getData();
  }, []);
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
            value={businessName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Mobile Number"
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>
        <div className="form-group">
          <label>State</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter State"
            onChange={(e) => setState(e.target.value)}
            value={state}
          />
        </div>
        <div className="form-group">
          <label>Pin Code</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Pin Code"
            onChange={(e) => setPincode(e.target.value)}
            value={pincode}
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

export default Edit;
