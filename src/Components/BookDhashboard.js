import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BooksCategory } from "./Endpoints";
import Book from "./pexels-element5-1370298.jpg";

export default function BookDashboard() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await BooksCategory();
        console.log("Fetched categories:", result);

        setCategories(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);

        setCategories([]);
      }
    }

    fetchData();
  }, []);

  const HandleBooks = (catid) => {
    debugger;
    navigate(`/BooksDetails/${catid}`);
  };

  return (
    <div>
      <center>
        <img
          src={Book}
          alt="avatar"
          style={{ width: "90vw", height: "100vh", marginLeft: "30vw" }}
        />
      </center>
      <div
        className="offcanvas offcanvas-start show"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasLabel">
            Books Category
          </h2>
         
        </div>
        <div className="offcanvas-body">
          {categories.length > 0 ? (
            categories.map((category) => (
              <div key={category.catid}>
                <h6 onClick={() => HandleBooks(category.catid)}>
                  {category.categoryName}
                </h6>
                <br />
              </div>
            ))
          ) : (
            <p>No categories found</p>
          )}
        </div>
      </div>
    </div>
  );
}
