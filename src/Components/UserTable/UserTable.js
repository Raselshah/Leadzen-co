import React, { useState } from "react";
import UserData from "../UserData/UserData";

const UserTable = ({ userData }) => {
  const [selected, setSelected] = useState(null);
  const handleShowBtn = (id) => {
    if (selected == id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <div className="">
      {userData?.map((user) => (
        <>
          <div class="overflow-x-auto">
            <table class="table w-full border-2 rounded-full pb-8">
              <tbody>
                <tr className="">
                  <td className="w-full mx-auto">{user?.name}</td>
                  <td className="w-full">
                    Height
                    <br />
                    <span class="text-sm badge badge-ghost badge-sm">
                      {user?.height}
                    </span>
                  </td>
                  <td className="w-full">
                    Gender
                    <br />
                    <span class="text-sm">{user?.gender}</span>
                  </td>
                  <td className="w-full">
                    Date of Birth
                    <br />
                    <span class="text-sm">{user?.birth_year}</span>
                  </td>
                  <td>
                    {selected == user?.name ? (
                      <button
                        onClick={() => handleShowBtn(user?.name)}
                        className="btn btn-xs border-0 bg-gray-600"
                      >
                        hide details
                      </button>
                    ) : (
                      <button
                        onClick={() => handleShowBtn(user?.name)}
                        className="btn btn-xs border-0 bg-orange-600 hover:bg-orange-600"
                      >
                        view details
                      </button>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
            {selected == user?.name ? (
              <>
                <UserData filterData={selected} />
              </>
            ) : (
              ""
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default UserTable;
