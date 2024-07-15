import { React, useState } from "react";
import { useParams } from "react-router-dom";
import {AddBooks} from "../Endpoints";
export default function BookAddform() {
  const [Url, setUrl] = useState("");

  const [Bookname, setBookname] = useState("");

  const [Discrip, setDiscrip] = useState("");

  const [prize, setprize] = useState("");

  const { id } = useParams();

  var obj ={
    catid: id,
    imageUrl : Url,
    name : Bookname,
    decription : Discrip,
    prize : prize
 }
  const HandleAddBook = async () => {
    if (!Url.length || !Bookname.length || !Discrip.length || !prize.length) {
      alert("Please Fill  All Field");
      return;
    }
      
    try{
        debugger;
        const result = await  AddBooks(obj);
        if(result.errorCode == 0){
          alert(result.message);
         
        }else{
          alert(result.message);
        }
        
      }catch(error){
        alert("server error");
      }
  };

  return (
    <div>
      <h2>Add Books</h2>
      <br />
      <center>
        <div className="col-lg-3">
          <input
            type="text"
            value={Url}
            onChange={(e) => setUrl(e.target.value)}
            className="form-control"
            placeholder="Enter Url "
          />
        </div>
        <br />
        <div className="col-lg-3">
          <input
            type="text"
            value={Bookname}
            onChange={(e) => setBookname(e.target.value)}
            className="form-control"
            placeholder="Enter Book name"
          />
        </div>
        <br />
        <div className="col-lg-3">
          <input
            type="text"
            value={Discrip}
            onChange={(e) => setDiscrip(e.target.value)}
            className="form-control"
            placeholder="Enter Discription"
          />
        </div>
        <br />
        <div className="col-lg-3">
          <input
            type="text"
            value={prize}
            onChange={(e) => setprize(e.target.value)}
            className="form-control"
            placeholder="Enter Prize"
          />
        </div>
        <br />
        <button onClick={HandleAddBook} className="btn btn-success">
          Add Book
        </button> {""}
       
      </center>
    </div>
  );
}
