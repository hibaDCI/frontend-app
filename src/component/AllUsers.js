import React, {useState} from "react";
import axios from "axios";

function AllUsers() {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const res = await axios.get("/api/auth/all");
    console.log(res.data);
    setUsers(res.data.allUser);
  };
  return (
    <div>
      <h2>Get all users</h2>

      {users.length > 0 && users.map((user) => <img src={user.userPic} />)}
      <button onClick={getAllUsers}>Get all users</button>
    </div>
  );
}

export default AllUsers;
