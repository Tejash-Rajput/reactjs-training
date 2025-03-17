import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import "../scss/userList.scss";
/**
 * UserList Component - Fetches and displays a list of users.
 * @component
 * @returns {JSX.Element} The UserList component.
 */
const UserList = () => {
  const [users, setUsers] = useState([]);
  const { data, loading, error } = useFetch(
    "http://localhost:8000/api/users"
  );
  console.log(users);

  useEffect(() => {
    if (data) {
      if (Array.isArray(data)) {
        setUsers(data); 
      } else {
        setUsers([data]); 
      }
    }
  }, [data]);

  console.log(users);

  return (
    <div className="user-list">
      <h2 className="user-list-header">User List</h2>
      {loading && <p className="user-list-loading">Loading...</p>}
      {error && <p className="user-list-error">{error}</p>}
      <ul className="user-list-list">
        {users &&
          users.map((user) => (
            <li key={user.id} className="user-list-item">
              <strong className="user-list-item-name">{user.first_name}</strong>
              <p className="user-list-item-email">{user.email}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default UserList;
