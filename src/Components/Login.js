import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {Loginuser} from "./Endpoints";

export default function Login() {

const navigate = useNavigate();
const[Username , setUsername] = useState("");
// const[isAdmin , setisAdmin] = useState(false);

const[Password , setPassword] = useState("");

const[ShowPassword,setShowPassword] = useState(true);

const HandlePassWord = () => {
  setShowPassword(!ShowPassword);
}

const handleLogin = async ()=>{
  var obj ={
    userName : Username,
    password : Password,
  }
    if(!Username.length || !Password.length){
        alert("Please Enter in both field")
        return;
    }
    try{
      const result = await  Loginuser(obj);
      if(result.res.errorCode == 0){
        // alert(result.res.message);
        window.localStorage.setItem('Token', JSON.stringify(result.res.data));
        console.log(result.res.data)
        navigate("/Dashboard");
      }else{
        alert(result.res.message);
      }
      
    }catch(error){
      alert("server error");
    }
}

  return (
    <section className="vh-100" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" >
          <div className="card-body p-5 text-center">
            <h3 className="mb-5">Log in</h3>
           
            {/* <select className="form-select" aria-label="Default select example">
              <option selected>Select Role</option>
              <option onClick={()=>setisAdmin(true)} value="1">Admin</option>
              <option onClick={()=>setisAdmin(false)} value="2">User</option>
            </select>
            <br/> */}
            <div data-mdb-input-init="" className="form-outline mb-4">
              <input
              value={Username}
                type="text"
                id="typeEmailX-2"
                className="form-control form-control-lg"
                placeholder="Enter Username"
                onChange={(e) =>setUsername(e.target.value)}
              />
            </div>
            <div data-mdb-input-init="" className="form-outline mb-4 position-relative">
              <input
                type={ShowPassword ? "password" :"text"}
                value={Password}
                id="typePasswordX-2"
                className="form-control form-control-lg"
                placeholder="Enter Password"
                onChange={(e) =>setPassword (e.target.value)}
              />
              <div  className="position-absolute top-4 right-4 ">
               {ShowPassword ? <i class="fa-regular fa-eye-slash " onClick={HandlePassWord}></i> : <i class="fa-regular fa-eye" onClick={HandlePassWord}></i>}
              </div>
            </div>
            <div className="form-check d-flex justify-content-start mb-4">
             
              <NavLink className="form-check-label" htmlFor="form1Example3">
               Forget Password ?
              </NavLink>
            </div>
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-primary btn-lg btn-block"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
            <br/>
            <br/>
            don't have an account ?
            <NavLink to="/register" className="text-decoration-none">
          Register Here 
        </NavLink>
            <hr className="my-4" />
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-lg btn-block btn-primary"
              style={{ backgroundColor: "#3b5998" }}
              type="submit"
            >
              <i className="fab fa-google me-2" /> Sign in with google
            </button>
            <br/>
            <br/>
            
            <button
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-lg btn-block btn-primary mb-2"
              style={{ backgroundColor: "#3b5998" }}
              type="submit"
            >
              <i className="fab fa-facebook-f me-2" />
              Sign in with facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
