import { React, useState } from "react";
import { useParams } from "react-router-dom";
import {editBooCategory} from "../Endpoints";
export default function EditCategoryform() {
  const { id } = useParams();
  const [catdetail, setcatdetail] = useState([]);
  var obj = {
    catid: id,
    categoryName : catdetail,
  };
  const HandleEdit = async () => {
    if (!catdetail.length) {
      alert("Please Enter Category Name");
      return;
    }
    debugger;

    try {
      const result = await editBooCategory(obj);
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
      <h1>Edit Book Category</h1>
      <center>
        <div className="col-lg-3">
          <lablel> Category Name </lablel>
          <br />
          <br />
          <input
            type="text"
            value={catdetail}
            onChange={(e) => setcatdetail(e.target.value)}
            className="form-control"
            placeholder="Enter Category name"
          />
        </div>
        <br />
        <button onClick={HandleEdit} className="btn btn-success">
          Edit
        </button>
      </center>
    </div>
  );
}
