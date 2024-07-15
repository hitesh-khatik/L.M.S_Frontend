import { Button } from "bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";
import Pix from "./pexels-abby-chung-371167-1106468.jpg";

export default function Adminpanel() {
  const navigate = useNavigate();

  const HandleBooksCategory = () => {
    navigate("/BooksCategory");
  };

  const HandleBooks = () => {
    navigate("/Books");
  };

  return (
    <div>
      <center>
        <img
          src={Pix}
          alt="avatar"
          style={{ width: "90vw", height: "100vh", marginLeft: "10vw" }}
        />
      </center>
      <br />
      <br />
      <div
        className="offcanvas offcanvas-start show"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h3 className="offcanvas-title" id="offcanvasLabel">
            Admin Panel
          </h3>
        </div>
        <div className="offcanvas-body">
          <h5 onClick={HandleBooksCategory}>
            Book Category Management <i class="fa-solid fa-pen-to-square"></i>
          </h5>
          <br />
          <h5 onClick={HandleBooks}>
            Book Management <i class="fa-solid fa-pen-to-square"></i>
          </h5>
        </div>
      </div>
    </div>
  );
}
