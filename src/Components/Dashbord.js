import React from "react";
import { useNavigate } from "react-router-dom";

export default function Dashbord() {
  const navigate = useNavigate();
  const HandleLogout = () => {
    // if (confirm('Are you sure you want to logout?')) {
    window.localStorage.removeItem("Token");
    alert("Logout Successfully");
    navigate("/Login");
    // }
  };
  const HandleProfile = () => {
    navigate("/Profile");
  };
  const HandleHome = () => {
    navigate("/Home");
  };

  return (
    <div className="Dashboard">
      <center>
        <h1> User Dashboard </h1>
        
      </center>
      <center>
        <div className="container profile  dashIcons">
          <h6 onClick={HandleHome} >Book Store</h6>
          {/* <i onClick={HandleHome} class="fa-solid fa-house"></i> */}
          {/* <i onClick={HandleProfile} class="fa-solid fa-user"></i> */}
          <h6 onClick={HandleProfile} >Profile</h6>
          <i
            onClick={HandleLogout}
            class="fa-solid fa-arrow-right-from-bracket"
          ></i>
        </div>
      </center>
    </div>
  );
}
