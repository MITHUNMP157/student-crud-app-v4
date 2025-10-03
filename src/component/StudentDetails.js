import React, { useContext } from "react";
import "./StudentDetails.css";
import { ToastContainer } from "react-toastify";
import { StudentContext } from "../context/StudentContext";

const StudentDetails = () => {
  const { studentDataBase, handleUpdate, deleteData, navigate } =
    useContext(StudentContext);

  return (
    <div>
      <main className="student-main">
        {studentDataBase.length > 0 ? (
          <div className="student-body">
            <div className="student-title">
              <h2>Student Database List</h2>
            </div>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Student Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Password</th>
                    <th>DOJ</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {studentDataBase.map((student, index) => (
                    <tr key={student._id || index}>
                      <td>{index + 1}</td>
                      <td>{student.studentName}</td>
                      <td>{student.email}</td>
                      <td>{student.mobile}</td>
                      <td>{student.password}</td>
                      <td>{student.doj}</td>
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

export default StudentDetails;
