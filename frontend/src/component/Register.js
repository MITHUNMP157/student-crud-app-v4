import React, { useContext } from "react";
import "./Register.css";
import { ToastContainer } from "react-toastify";
import { StudentContext } from "../context/StudentContext";

const Register = () => {
  const { formData, updateChange, handleSubmitForm } =
    useContext(StudentContext);

  const shouldBeDisabled = !!formData._id;
  return (
    <div className="hero">
      <main className="form-main">
        <form onSubmit={handleSubmitForm}>
          <h2>Student Register</h2>
          <div className="form-field1">
            <div className="form-field-item1">
              <div className="form-field">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={updateChange}
                />
              </div>
              <div className="form-field">
                <label>Gender:</label>
                <input
                  type="text"
                  name="gender"
                  placeholder="Enter gender"
                  value={formData.gender}
                  onChange={updateChange}
                  disabled={shouldBeDisabled}
                />
              </div>
              <div className="form-field">
                <label>Department:</label>
                <select
                  type="text"
                  name="department"
                  placeholder="Enter department"
                  value={formData.department}
                  onChange={updateChange}
                >
                  <option value="">-- Select Department --</option>
                  <option value="computerScience">Computer Science</option>
                  <option value="informationTechnology">
                    Information Technology
                  </option>
                  <option value="electronicsAndCommunication">
                    Electronics and Communication
                  </option>
                  <option value="mechanicalEngineering">
                    Mechanical Engineering
                  </option>
                  <option value="civilEngineering">Civil Engineering</option>
                  <option value="electricaleAndElectronics">
                    Electrical and Electronics
                  </option>
                </select>
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
            </div>
            <div className="form-field-item2">
              <div className="form-field">
                <label>DOB:</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={updateChange}
                />
              </div>
              <div className="form-field">
                <label>Age:</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={updateChange}
                />
              </div>
              <div className="form-field">
                <label>Enroll-Year:</label>
                <input
                  type="date"
                  name="enrollDate"
                  placeholder="Enter enroll-year"
                  value={formData.enrollDate}
                  onChange={updateChange}
                />
              </div>
              <div className="form-field">
                <label>Batch-Year:</label>
                <input
                  type="text"
                  name="batchYear"
                  placeholder="Enter batch-year"
                  value={formData.batchYear}
                  onChange={updateChange}
                />
              </div>
              <div className="form-field">
                <label>District:</label>
                <input
                  type="text"
                  name="district"
                  placeholder="Enter district"
                  value={formData.district}
                  onChange={updateChange}
                />
              </div>
              <div className="form-field">
                <label>State:</label>
                <input
                  type="text"
                  name="state"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={updateChange}
                  disabled={shouldBeDisabled}
                />
              </div>
            </div>
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
