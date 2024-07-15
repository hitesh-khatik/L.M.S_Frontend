import React from "react";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashbord from "./Components/Dashbord";
import "./index.css";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import  Bookdetails  from "./Components/BooksDetails";
import Adminpanel from "./Components/AdminPanel/Adminpanel";
import AdminBooksCategory from "./Components/AdminPanel/AdminBooksCategory";
import Books from "./Components/AdminPanel/books";
import Bookcatform from "./Components/AdminPanel/Bookcatform";
import EditCategoryform from "./Components/AdminPanel/EditCategoryform";
import BookAddform from "./Components/AdminPanel/BookAddform";
import EditBooDetailspage from "./Components/AdminPanel/EditBooDetailspage";
import BookEditForm from "./Components/AdminPanel/BookEditForm";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="Dashboard" element={<Dashbord />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Home" element={<Home />} />
          <Route path="BooksDetails/:id" element={<Bookdetails />} />
          <Route path="/Adminpanel" element={<Adminpanel />} />
          <Route path="/BooksCategory" element={<AdminBooksCategory/>} />
          <Route path="/Books" element={<Books/>} />
          <Route path="/Bookcatform" element={<Bookcatform/>} />
          <Route path="/EditCategoryform/:id" element={<EditCategoryform/>} />
          <Route path="/BookAddForm/:id" element={<BookAddform/>} />
          <Route path="/EditBooDetailspage/:id" element={<EditBooDetailspage/>} />
          <Route path="/BookEditForm/:catid/:id" element={<BookEditForm/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
