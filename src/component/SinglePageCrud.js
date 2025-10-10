import React, { useEffect, useState } from "react";
import "./SinglePageCrud.css";
import axios from "axios";

const SinglePageCrud = () => {
  const [form, setForm] = useState(false);
  const [userData, setUserData] = useState([]);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    fetchUser();
  }, []);

  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username: user.username,
      email: user.email,
      phone: user.phone,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/users", formData)
      .then((res) => {
        setUser([...userData, res.data]);
        console.log(user);
        setForm(false);
      })
      .catch((err) => {
        console.log("Upload Error:", err);
      });
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.data;
      setUserData(data);
    } catch (error) {
      console.log("Fetch Error:", error);
    }
  };

  const handleSaveUser = () => {
    if (!user.username || !user.email || user.phone) {
      alert("Please enter all fields");
    }
  };

  const updtaeUser = async (userId) =>{
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users${userId}`, {name: username, email: email, phone: phone});
  const responseData = await response.data;
    const updatedUser = responseData.map((user) => user.id === userId ? res.data : user);
    setUserData(updatedUser)
  
  }
  return (
    <div>
      {form ? (
        <div className="single-crud-main">
          <form className="single-crud-form" onSubmit={handleSubmit}>
            <h1>Add User</h1>
            <div className="crud-form">
              <label>Username : </label>
              <input
                type="text"
                name="username"
                placeholder="Enter username"
                value={user.username}
                onChange={handleUpdate}
              />
            </div>
            <div className="crud-form">
              <label>Email : </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={user.email}
                onChange={handleUpdate}
              />
            </div>
            <div className="crud-form">
              <label>Phone : </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone"
                value={user.phone}
                onChange={handleUpdate}
              />
            </div>
            <button type="submit" className="btn btn-submit">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-close"
              onClick={() => setForm(false)}
            >
              X
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
      <div>
        <button
          type="button"
          className="btn btn-submit"
          onClick={() => setForm(true)}
        >
          Add user
        </button>
        <div className="crud-fetch-details">
          <table className="crud-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            {userData.map((user, index) => (
              <tbody key={index}>
                <tr>
                  <td>{index}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button className="btn btn-edit">Edit</button>
                    <button className="btn btn-remove">Delete</button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default SinglePageCrud;
