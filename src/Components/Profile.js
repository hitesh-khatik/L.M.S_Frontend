import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { Userprofile } from "./Endpoints";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [userdata, setuserdata] = useState(null);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  const token = JSON.parse(window.localStorage.getItem("Token")).token;
  const decodedToken = jwtDecode(token);
  const UserId = decodedToken.Userid;
  console.log("UserId", UserId);

  let obj = {
    UserId: parseInt(UserId),
  };

  useEffect(() => {
    if (token) {
      const fetchUserData = async () => {
        try {
          const result = await Userprofile(obj);
          setuserdata(result.data);
          setloading(false);
        } catch (error) {
          console.error("Error fetching user data:", error);
          setloading(false);
        }
      };

      fetchUserData();
    } else {
      setloading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="dashIcons">
        <h5>Loading...</h5>
      </div>
    );
  }

  if (!userdata) {
    return (
      <div className="dashIcons">
        <h5>No user data available</h5>
      </div>
    );
  }
  return (
    <div>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col"></div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="IMG_20230510_233033_750.jpg"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: 150 }}
                  />
                  <h5 className="my-3">{userdata.username}</h5>
                  <p className="text-muted mb-1">Full Stack Developer</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary"
                    >
                      Follow
                    </button>
                    <button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-outline-primary ms-1"
                    >
                      Message
                    </button>
                  </div>
                </div>
              </div>
              <div className="card mb-4 mb-lg-0">
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush rounded-3">
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fas fa-globe fa-lg text-warning" />
                      <p className="mb-0">Hitesh_Khatik</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i className="fab fa-github fa-lg text-body" />
                      <p className="mb-0">Hitesh_Khatik</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-twitter fa-lg"
                        style={{ color: "#55acee" }}
                      />
                      <p className="mb-0">@Hitesh_Khatik</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-instagram fa-lg"
                        style={{ color: "#ac2bac" }}
                      />
                      <p className="mb-0">@Hitesh_Khatik</p>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                      <i
                        className="fab fa-facebook-f fa-lg"
                        style={{ color: "#3b5998" }}
                      />
                      <p className="mb-0">@Hitesh_Khatik</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">{userdata.name}</h6>
                    </div>
                  </div>
                  <br />
                  {/* <hr /> */}
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">
                        {" "}
                        <i class="fa-solid fa-mobile"></i> {userdata.mobile}
                      </h6>
                    </div>
                  </div>
                  <br />
                  {/* <hr /> */}
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">
                        <i class="fa-solid fa-envelope"></i> {userdata.email}
                      </h6>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Skills Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Dot Net
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Asp.Net Core
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Web Api MVC
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        React.js
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Java Script
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: 5 }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card mb-4 mb-md-0">
                    <div className="card-body">
                      <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                          assigment
                        </span>{" "}
                        Project Status
                      </p>
                      <p className="mb-1" style={{ fontSize: ".77rem" }}>
                        Web Design
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Website Markup
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "72%" }}
                          aria-valuenow={72}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        One Page
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow={89}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Mobile Template
                      </p>
                      <div className="progress rounded" style={{ height: 5 }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "55%" }}
                          aria-valuenow={55}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                        Backend API
                      </p>
                      <div
                        className="progress rounded mb-2"
                        style={{ height: 5 }}
                      >
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "66%" }}
                          aria-valuenow={66}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
