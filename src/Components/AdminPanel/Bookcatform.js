import React, { useState } from "react";
import {AddBooksCategory} from "../Endpoints"
export default function Bookcatform() {
  const [cat, setcat] = useState("");
  const[Action,setAction] = useState(false); 
  
  const HandleAddcat = async ()=>{
    debugger;
    var obj ={
      categoryName : cat,
      
    }
    if(!cat.length ){
      alert("Please Enter Category name")
      return;
  }
  try{
    const result = await  AddBooksCategory(obj);
    if(result.errorCode == 0){
      alert(result.message);
     
    }else{
      alert(result.message);
    }
    
  }catch(error){
    alert("server error");
  }

  }

  return (
    <div>
      {Action ? <h1>Edit Book Category</h1> :<h1>Add Book Category</h1>}
      
      <center>
      <div className="col-lg-3">
      <lablel className="form-lablel" >Category Name </lablel>
      <br />
      <br />
      <input
        type="text"
        value={cat}
        onChange={(e) => setcat(e.target.value)}
        className="form-control"
        placeholder="Enter Category name"
      />
      </div>
      <br/>
      <button onClick={HandleAddcat} className="btn btn-success">Add</button>
      </center>
    </div>
  );
}
