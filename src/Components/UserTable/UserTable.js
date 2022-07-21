import React, { useState } from "react";
import UserData from "../UserData/UserData";

const UserTable = ({ userData }) => {
  //   const [userDetails, setUserDetails] = useState("");
  const [selected, setSelected] = useState(null);
  const handleShowBtn = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <div className="">
      <div class="overflow-x-auto">
        {userData.map((user) => (
          <>
            <table class="table w-full border-2 rounded-full">
              <tbody>
                <tr className="">
                  <td>{user?.company_name}</td>
                  <td>
                    Zemlak
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>
                    Zemlak
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>
                    Zemlak
                    <br />
                    <span class="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>
                  <td>
                    {selected === user.id ? (
                      <button
                        onClick={() => handleShowBtn(user.id)}
                        className="btn btn-xs border-0 bg-orange-600"
                      >
                        hide details
                      </button>
                    ) : (
                      <button
                        onClick={() => handleShowBtn(user.id)}
                        className="btn btn-xs border-0 bg-orange-600"
                      >
                        view details
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            {selected === user.id ? (
              <>
                <UserData />
              </>
            ) : (
              ""
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default UserTable;
