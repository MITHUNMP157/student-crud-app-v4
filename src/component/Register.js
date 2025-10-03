import React, { useContext } from "react";
import "./Register.css";
import { ToastContainer } from "react-toastify";
import { StudentContext } from "../context/StudentContext";

const Register = () => {
  const { formData, updateChange, handleSubmitForm, studentDataBase } =
    useContext(StudentContext);
  return (
    <div className="hero">
      <main className="form-main">
        <form onSubmit={handleSubmitForm}>
          <h2>Student Register</h2>
          <div className="form-field field1">
            <label>Name:</label>
            <input
              type="text"
              name="studentName"
              placeholder="Enter name"
              value={formData.studentName}
              onChange={updateChange}
            />
          </div>
          <div className="form-field">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={updateChange}
            />
          </div>
          <div className="form-field">
            <label>Mobile:</label>
            <input
              type="text"
              name="mobile"
              placeholder="Enter number"
              value={formData.mobile}
              onChange={updateChange}
              maxLength={10}
            />
          </div>
          <div className="form-field">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={updateChange}
            />
          </div>
          <div className="form-field">
            <label>DOJ:</label>
            <input
              type="date"
              name="doj"
              value={formData.doj}
              onChange={updateChange}
            />
          </div>
          {formData._id ? (
            <button type="submit" className="btn-update">
              Update
            </button>
          ) : (
            <button type="submit" className="btn-submit">
              Submit
            </button>
          )}
        </form>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Register;
