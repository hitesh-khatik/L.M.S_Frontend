
import React, { useEffect, useState } from "react";
import { Bookdetails } from "../Endpoints";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import { deleteBook } from "../Endpoints";
export default function EditBooDetailspage() {
    const navigate = useNavigate();
    debugger;
    const { id } = useParams();
    const [Books, setBooks] = useState([]);
    var obj = {
      id: id,
    };
    
    useEffect(() => {
      async function fetchData() {
        try {
          const result = await Bookdetails(obj);
          console.log("Fetched Data:", result.data);
  
          setBooks(result.data);
          console.log("Books", Books);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);


    const HandleEdit = (bookid ,id) => {
        navigate(`/BookEditForm/${bookid}/${id}`);
    }

    
    const HandleDelete =  async(bookid) => {
      var obj ={
      id : bookid
      }
      try {
        const result = await deleteBook(obj);
        alert("Book Deleted Sucessfully");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    
  return (
    <div>
      <div className="container">
        <h1>Books</h1>
      </div>

      <center>
        {Books.length > 0 ? (
          Books.map((Book) => (
            <div key={Books.bookId}>
              <img
                src={Books.imageUrl}
                alt="avatar"
                style={{ width: 150, marginTop: "2vh" }}
              />
              <br />
              <h4>{Book.name}</h4>
              <h5>{Book.decription}</h5>
              <h3> ₹{Book.prize}</h3>
              <button onClick={() => HandleEdit(Book.bookId ,id)} className="btn btn-primary">Edit Book</button>{" "}
              <button onClick={() => HandleDelete(Book.bookId , id) } className="btn btn-success">Delete Book </button>
              <br />
            </div>
          ))
        ) : (
          <p>No Books found</p>
        )}
      </center>
    </div>
  );
}
