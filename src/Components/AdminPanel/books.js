import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { Bookdetails } from "../Endpoints";
import { BooksCategory } from "../Endpoints";
import { useNavigate } from "react-router-dom";
export default function Books() {
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

  // const { id } = useParams();

  // const [Books, setBooks] = useState([]);

  // var obj = {
  //   id: id,
  // };
  
  const HandleAddBook = (catid) => {
    navigate(`/BookAddform/${catid}`);
  };

  const HandleEditBook = (catid) => {
    navigate(`/EditBooDetailspage/${catid}`);
  };

  return (
    <div>
      <h1>Books Category</h1>
      <center>
        <br />
        {categories.length > 0 ? (
          categories.map((category) => (
            <div key={category.catid}>
              <h6>{category.categoryName} <button  onClick={() => HandleAddBook(category.catid)} className="btn btn-success">Add</button>{" "}
              <button  onClick={() => HandleEditBook(category.catid)} className="btn btn-primary">Edit Book</button></h6>
             
              <br />
            </div>
          ))
        ) : (
          <p>No categories found</p>
        )}
      </center>
      {/*      
      <div
        className="offcanvas offcanvas-start show"
        tabIndex={-1}
        id="offcanvas"
        aria-labelledby="offcanvasLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasLabel">
            Books
          </h2>
        </div>
        <div className="offcanvas-body">
          <h6>
            Add Books <i class="fa-solid fa-pen-to-square"></i>
          </h6>
        </div>
      </div> */}
    </div>
  );
}
