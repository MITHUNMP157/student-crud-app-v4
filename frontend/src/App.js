import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";
import StudentDetails from "./component/StudentDetails";
import ManagementDB from "./component/ManagementDB";
import LoginForm from "./component/LoginForm";
import { useState } from "react";
import SinglePageCrud from "./component/SinglePageCrud";
import LoginFormCrud from "./component/LoginFormCrud";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <>
        <Header setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studentdb" element={<StudentDetails />} />
          <Route path="/managementdb" element={<ManagementDB />} />
          <Route path="/singlecrud" element={<SinglePageCrud />} />
          <Route path="/logincrud" element={<LoginFormCrud />} />
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
      </>
      {/* {login ? (
      ) : (
        <LoginForm setLogin={setLogin} />
      )} */}
    </div>
  );
}

export default App;
