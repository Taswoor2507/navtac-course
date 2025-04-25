import React, { useEffect, useState } from "react";
import Allusers from "../../public/users.json";
import UserList from "./UserList";
const Users = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    setUsers(Allusers);
  }, []);
  console.log(users);
  return <div>
    <UserList   users={users}/>
  </div>;
};

export default Users;
