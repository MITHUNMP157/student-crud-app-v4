import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const navigate = useNavigate();

  /*StudentDataBase state use to GET/DELETE API Array purpose*/
  const [studentDataBase, setStudentDataBase] = useState([]);

  /*FromData state use to UPDATE API data edit/update purpose*/
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    gender: "",
    department: "",
    email: "",
    mobile: "",
    password: "",
    dob: "",
    age: "",
    enrollDate: "",
    batchYear: "",
    district: "",
    state: "",
  });

  /*Upload / Update function data get from FORM*/
  const handleSubmitForm = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const gender = form.gender.value;
    const department = form.department.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const password = form.password.value;
    const dob = form.dob.value;
    const age = form.age.value;
    const enrollDate = form.enrollDate.value;
    const batchYear = form.batchYear.value;
    const district = form.district.value;
    const state = form.state.value;

    if (
      name === "" ||
      gender === "" ||
      department === "" ||
      email === "" ||
      mobile === "" ||
      password === "" ||
      dob === "" ||
      age === "" ||
      enrollDate === "" ||
      batchYear === "" ||
      district === "" ||
      state === ""
    ) {
      toast.warn("Enter Valid Inputs");
      return;
    }
    const studentData = {
      name,
      gender,
      department,
      email,
      mobile,
      password,
      dob,
      age,
      enrollDate,
      batchYear,
      district,
      state,
    };
    console.log(studentData);

    if (formData._id) {
      /*Update API*/
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
          });
        })
        .catch((err) => {
          toast.error("Failed to Update item", err);
        });
    } else {
      /*Upload(New Register) API*/
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
          setTimeout(() => {
            navigate("/managementdb");
          }, 1000);
        })
        .catch((error) => {
          toast.warn("Upload Failed");
          console.log("Upload Failed:", error);
        });
    }
  };

  /*Upload Form Data store to formData(state)*/
  const updateChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /*Get API from Backend*/
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

  /*Update Button onClick event function*/
  const handleUpdate = (student) => {
    setFormData(student);
  };

  /*Delete API*/
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

  const loginHandleSubmit = (form) => {
    if (!form.username || !form.email || !form.password) {
      alert("Please fill input fields");
    } else {
      fetch("http://localhost:5050/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log("Post Error :", err);
        });
    }
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
        loginHandleSubmit,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
