import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);      
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);        // Set the fetched users
        setLoading(false);     // Done loading
      })
      .catch((err) => {
        setError(err.message); // Save error message
        setLoading(false);     // Done loading (even with error)
      });
  }, []); // Runs only once when component mounts

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <h1 style={{textAlign: "center", color: "whitesmoke"}}>👥 User List</h1>
    <div style={{ padding: "20px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
      
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            marginBottom: "10px",
            minWidth: "20%",
            backgroundColor: "#f9f9f9",
            
          }}
        >
            <img
                src={user.avatar_url}
                alt={user.login}
                style={{ width: "50px", borderRadius: "50%" }}/>
            <h2 style={{ fontSize: "1.2em", color: "#333" }}>{user.login}</h2>
            <a>{user.url}</a>
        </div>
      ))}
    </div>
    </>
  );
}

export default UserList;
