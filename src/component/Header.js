import React from "react";
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();
  return (
    <>
      <h2 style={{ backgroundColor: "#beced1", textAlign: "center" }}>
        Business Center
      </h2>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => navigate("/create")}
      >
        Create Business
      </button>
    </>
  );
}

export default Header;
