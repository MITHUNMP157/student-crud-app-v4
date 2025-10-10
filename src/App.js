import "./App.css";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import Home from "./component/Home";
import StudentDetails from "./component/StudentDetails";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/studentdb" element={<StudentDetails />} />
      </Routes>
    </div>
  );
}

export default App;
