import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";
import { BooksCategory } from "../Endpoints";
import { deleteBookCategory } from "../Endpoints";
import { useParams } from "react-router-dom";

export default function AdminBooksCategory() {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await BooksCategory();
        console.log("Fetched categories: ", result);

        setCategories(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);

        setCategories([]);
      }
    }

    fetchData();
  }, []);
  const addbookcategory = () => {
    navigate("/Bookcatform");

  };

  const HandleEdit = (catid) => {
    navigate(`/EditCategoryform/${catid}`);
    console.log(catid);

  };
  
  const HandleDelete =  async (catid) => {
    var id = {
      id: catid,
    };
    
    try {
      debugger;
      const result = await deleteBookCategory(id);
      if (result.errorCode == 0) {
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("server error");
    }
  };
  return (
    <div>
      <center>
        <h1>Books Category Management</h1>
        <br />
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.catid}>
              <h6>{category.categoryName} <button  onClick={() => HandleEdit(category.catid)} className="btn btn-primary">Edit</button>{" "}
              <button  onClick={() => HandleDelete(category.catid)} className="btn btn-danger">Delete</button></h6>
             
                
              
              <br />
            </div>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </center>
      <div></div>

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
          <h6 onClick={addbookcategory}>
            Add Books Category <i class="fa-solid fa-pen-to-square"></i>
          </h6>
        </div>
      </div>
    </div>
  );
}
