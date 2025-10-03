import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const navigate = useNavigate();

  /*Upload Data*/
  const [studentDataBase, setStudentDataBase] = useState([]);

  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    mobile: "",
    password: "",
    doj: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const form = e.target;

    const studentName = form.studentName.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const password = form.password.value;
    const doj = form.doj.value;

    if (
      studentName === "" ||
      email === "" ||
      mobile === "" ||
      password === "" ||
      doj === ""
    ) {
      toast.warn("Enter Valid Inputs");
      return;
    }
    const studentData = { studentName, email, mobile, password, doj };
    console.log(studentData);

    if (formData._id) {
      fetch(`http://localhost:3030/editdata/${formData._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Student updated successfully!");
          fetchStudentData();
          setTimeout(() => {
            navigate("/studentdb");
          }, 3000);
        })
        .catch((err) => {
          toast.error("Failed to Update item", err);
        });
    } else {
      fetch("http://localhost:3030/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(studentData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Upload Success");
          console.log(data);
          form.reset();
        })
        .catch((error) => {
          toast.warn("Upload Failed");
          console.log("Upload Failed:", error);
        });
    }
  };

  /*Update Data*/

  const updateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdate = (student) => {
    setFormData(student);
  };

  /*Get Data*/
  const fetchStudentData = () => {
    fetch("http://localhost:3030/getdata")
      .then((res) => res.json())
      .then((data) => {
        setStudentDataBase(data);
      })
      .catch((err) => console.error("Fetch error", err));
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  /*Delete Data*/

  const deleteData = (id) => {
    fetch(`http://localhost:3030/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.error("Delete Successful");

        setStudentDataBase((prevData) =>
          prevData.filter((student) => student._id !== id)
        );
      })
      .catch((error) => {
        console.error("Delete error:", error);
        toast.error("Failed to delete item");
      });
  };

  return (
    <StudentContext.Provider
      value={{
        studentDataBase,
        formData,
        updateChange,
        handleSubmitForm,
        handleUpdate,
        deleteData,
        setFormData,
        navigate,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
