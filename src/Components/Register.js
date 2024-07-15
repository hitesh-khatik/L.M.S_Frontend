import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "./Endpoints";

export default function Register() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const navigate = useNavigate();

  const HandleRegister = async () => {
    var obj = {
      name: name,
      mobile: mobile,
      email: email,
      userName: userName,
      password: password,
    };

    if (
      !name.length ||
      !mobile.length ||
      !email.length ||
      !userName.length ||
      !password.length
    ) {
      alert("Please fill all the field");
      return;
    }
    if (mobile.length != 10) {
      alert("Please Enter 10 digit Mobile number");
      return;
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
      alert("Invalid email address");
      return;
    }
    if (cpassword != password) {
      alert("password does not match");
      return;
    }

    try {
      debugger;
      const result = await registerUser(obj);

      if (result.errorCode == 0) {
        alert(result.message);
        navigate("/Login");
      } else {
        alert(result.message);
        return;
      }
    } catch (error) {
      alert("server error");
    }
  };
  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 5 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                     
                     <input
                        value={name}
                        type="text"
                        id="form3Example1cg"
                        placeholder="Enter Your Name"
                        onChange={(e) => setname(e.target.value)}
                        className="form-control form-control-lg"
                      />
                      
                    </div>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        value={mobile}
                        placeholder="Enter Your Mobile"
                        type="number"
                        id="form3Example1cg"
                        onChange={(e) => setmobile(e.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        value={email}
                        placeholder="Enter Your Email"
                        type="email"
                        id="form3Example3cg"
                        onChange={(e) => setemail(e.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        value={userName}
                        placeholder="Enter Your Username"
                        type="text"
                        id="form3Example4cg"
                        onChange={(e) => setuserName(e.target.value)}
                        className="form-control form-control-lg"
                      />
                      
                    </div>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        value={password}
                        placeholder="Enter Your Password"
                        type="password"
                        id="form3Example4cg"
                        onChange={(e) => setpassword(e.target.value)}
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        value={cpassword}
                        placeholder="Re-enter Your Password"
                        type="password"
                        id="form3Example4cdg"
                        onChange={(e) => setcpassword(e.target.value)}
                        className="form-control form-control-lg"
                      />
                      
                    </div>
                    <NavLink  className="fw-bold text-body">Forget Password ?{" "} </NavLink>
                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        onClick={HandleRegister}
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <NavLink to="/Login" className="fw-bold text-body">
                        <u>Login here</u>
                      </NavLink>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
