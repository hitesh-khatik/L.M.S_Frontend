import React, { useEffect, useState } from "react";
import { Bookdetails } from "./Endpoints";
import { useParams } from "react-router-dom";
// import book from "./th (1).jpeg";
export default function BooksDetails() {
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

  return (
    <div>
      <center>
      <h1>Books</h1>
      </center>
     
      <div className="container" >
      {Books.length > 0 ? (
          Books.map((Book) => (
            <div key={Books.bookId}>
              <img src={Books.imageUrl} alt="avatar" style={{ width: 150 ,marginTop:"2vh" }} />
              <br />
              <h4>{Book.name}</h4>
              <h5>{Book.decription}</h5>
              <h3> ₹{Book.prize}</h3>
              <button className="btn btn-primary">Buy Now</button>{" "}
              <button className="btn btn-success">Add to Cart</button>
              <br />
            </div>
          ))
        ) : (
          <p>No Books found</p>
        )}
      </div>
    </div>
  );
}
