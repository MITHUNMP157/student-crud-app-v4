import React, { useContext } from "react";
import "./ManagementDB.css";
import { ToastContainer } from "react-toastify";
import { StudentContext } from "../context/StudentContext";

const ManagementDB = () => {
  const {
    studentDataBase,
    handleUpdate,
    deleteData,
    navigate,
    searchStudent,
    setSearchStudent,
  } = useContext(StudentContext);

  return (
    <div>
      <main className="student-main">
        {studentDataBase.length > 0 ? (
          <div className="student-body">
            <div className="student-title">
              <h1>Student Enrollment Database List </h1>
            </div>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Student Name</th>
                    <th>Gender</th>
                    <th>Department</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>DOB</th>
                    <th>Age</th>
                    <th>Mobile</th>
                    <th>Enroll Date</th>
                    <th>Batch Year</th>
                    <th>District</th>
                    <th>State</th>
                    <th>Update /EDIT</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {studentDataBase.map((student, index) => (
                    <tr key={student._id || index}>
                      <td>{index + 1}</td>
                      <td>{student.name}</td>
                      <td>{student.gender}</td>
                      <td>{student.department}</td>
                      <td>{student.email}</td>
                      <td>{student.password}</td>
                      <td>{student.dob}</td>
                      <td>{student.age}</td>
                      <td>{student.mobile}</td>
                      <td>{student.enrollDate}</td>
                      <td>{student.batchYear}</td>
                      <td>{student.district}</td>
                      <td>{student.state}</td>
                      <td>
                        <button
                          type="button"
                          className="btn-update-student"
                          onClick={() => {
                            handleUpdate(student);
                            navigate("/register");
                          }}
                        >
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn-delete-student"
                          onClick={() => {
                            deleteData(student._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="student-body1" style={{ color: "red" }}>
            <marquee behavior="smooth" direction="left">
              Database Empty....!
            </marquee>
          </div>
        )}
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

export default ManagementDB;
