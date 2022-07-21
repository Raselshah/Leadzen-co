import React from "react";

const UserTable = ({ userData }) => {
  console.log(userData);
  return (
    <div className="">
      <div class="overflow-x-auto">
        <table class="table w-full border-2 rounded-full">
          <tbody>
            {userData.map((user) => (
              <tr>
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
                  <button className="btn btn-xs border-0 bg-orange-600">
                    view details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
