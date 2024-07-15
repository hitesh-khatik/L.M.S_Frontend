import axios from "axios";
const header = {
  "Content-type": "application/json",
  accept: "application/json",
  "Access-Control-Allow-Origin": "*",
};
export const registerUser = (obj) => {
  debugger;
  var registerurl = "https://localhost:7270/api/RegisterUser/AddUser";
  console.log(registerurl, { header });
  return axios
    .post(registerurl, obj)
    .then((Response) => {
      console.log(Response.data);
      return Response.data;
    })
    .catch((error) => console.log(error));
};

export const Loginuser = (obj) => {
  var Loginurl = "https://localhost:7270/api/LoginUser/Loginuser";
  console.log(Loginurl, { header });
  return axios
    .post(Loginurl, obj)
    .then((Response) => {
      console.log(Response.data);
      return Response.data;
    })
    .catch((error) => console.log(error));
};

export const Userprofile = (obj) => {
 
  var purl = "https://localhost:7270/api/RegisterUser/getUserbyId";
  const authToken = JSON.parse(window.localStorage.getItem("Token")).token;
  const authHeaders = {
    "Content-Type": "application/json",
    accept: "application/json",
    "Access-Control-Allow-Origion": "*",
    Authorization: "Bearer " + authToken,
  };
  console.log( purl,{ obj } );
  return axios
    .get(purl, { params: obj , headers: authHeaders })
    .then((Response) => {
      console.log(Response.data);
      return Response.data;
    })
    .catch((error) => console.log(error));
 };
export const BooksCategory = () => {
  var CatUrl = "https://localhost:7270/api/BooksCategory/ViewBooksCategory";
  console.log(CatUrl);
  return axios
    .get(CatUrl)
    .then((Response) => {
      console.log(Response.data);
      return Response.data;
    })
    .catch((error) => console.log(error));
 };
 export const AddBooksCategory = (obj) => {
  debugger;
  const bookCatUrl = "https://localhost:7270/api/BooksCategory/AddBooksCategory";
  console.log(bookCatUrl, { header }); 
  return axios
    .post(bookCatUrl, obj) 
    .then((response) => {
      console.log(response.data); 
      return response.data; 
    })
    .catch((error) => {
      console.error("Error adding books category:", error);
      throw error; 
    });
};

 
export const editBooCategory = (obj) => {
  debugger;
  const bookCatUrl = "https://localhost:7270/api/BooksCategory/EditBooksCategory";
  console.log(bookCatUrl, { header }); 
  return axios
    .put(bookCatUrl, obj) 
    .then((response) => {
      console.log(response.data); 
      return response.data; 
    })
    .catch((error) => {
      console.error("Error adding books category:", error);
      throw error; 
    });
};

export const deleteBookCategory = (id) => {
  debugger;
  const bookCatUrl = "https://localhost:7270/api/BooksCategory/DeleteBooksCategory";
  console.log(bookCatUrl); 

  return axios
    .delete(bookCatUrl, { params: id })
    .then((response) => {
      console.log("Successfully deleted books category:", response.data ); 
      return response.data; 
    })
    .catch((error) => {
      console.error("Error deleting books category:", error);
      throw error; 
    });
};

 export const Bookdetails = (obj) => {
  var bookUrl = "https://localhost:7270/api/Books/ViewBooksByid";
  console.log(bookUrl);
  return axios
    .get(bookUrl ,{ params: obj })
    .then((Response) => {
      console.log(Response.data);
      return Response.data;
    })
    .catch((error) => console.log(error));
 };

 export const AddBooks = (obj) => {
  debugger;
  const bookAddUrl = "https://localhost:7270/api/Books/AddBooks";
  console.log(bookAddUrl, { header }); 
  return axios
    .post(bookAddUrl, obj) 
    .then((response) => {
      console.log(response.data); 
      return response.data; 
    })
    .catch((error) => {
      console.error("Error adding books category:", error);
      throw error; 
    });
};

export const EditBooks = (obj) => {
  debugger;
  const bookAddUrl = "https://localhost:7270/api/Books/EditBooks";
  console.log(bookAddUrl, { header }); 
  return axios
    .put(bookAddUrl, obj) 
    .then((response) => {
      console.log(response.data); 
      return response.data; 
    })
    .catch((error) => {
      console.error("Error adding books category:", error);
      throw error; 
    });
};

export const deleteBook = (id) => {
  debugger;
  const bookCatUrl = "https://localhost:7270/api/Books/DeleteBooksCategory";
  console.log(bookCatUrl); 

  return axios
    .delete(bookCatUrl, { params: id })
    .then((response) => {
      console.log("Successfully deleted books category:", response.data ); 
      return response.data; 
    })
    .catch((error) => {
      console.error("Error deleting books category:", error);
      throw error; 
    });
};