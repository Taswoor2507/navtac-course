import React from "react";
import { useNavigate } from "react-router";

const UsersList = ({users, loading}) => {
    console.log(users?.users)
  const navigate = useNavigate()
    if(loading  ||  !users) {
       return  <h1>loading</h1>
    }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {
            users?.users.map((user)=>{
                return (
                    <tr key={user.id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={user.image}
                              alt={user.firstName}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.firstName}</div>
                          <div className="text-sm opacity-50">{user?.address?.country}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {user?.company?.department}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                       {user.company?.title}
                      </span>
                    </td>
                    <td>{user.eyeColor}</td>
                    <th>
                      <button   onClick={()=>{navigate(`/user/${user.id}`)}}  className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>
        
                )
            })
          }
     



        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default UsersList;
