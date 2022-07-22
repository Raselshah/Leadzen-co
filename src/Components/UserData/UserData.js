import React, { useEffect, useState } from "react";

const UserData = ({ filterData }) => {
  const [detailsUser, setDetailsUser] = useState({});
  const [dataLoading, setDataLoading] = useState(false);
  useEffect(() => {
    const findUser = async () => {
      setDataLoading(true);
      await fetch("https://swapi.dev/api/people/?format=json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const findUser = data.results?.filter(
            (result) => result?.name == filterData
          );
          setDetailsUser(findUser);
          setDataLoading(false);
        });
    };
    findUser();
  }, [filterData]);
  if (dataLoading) {
    return <p className="text-center text-sky-500">loading..</p>;
  }
  return (
    <div>
      <div class="card w-full bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-red-500">{detailsUser[0]?.name} info</h2>
          <p>Eye color : {detailsUser[0]?.eye_color}</p>
          <p>Hair color : {detailsUser[0]?.hair_color}</p>
          <p>Skin color : {detailsUser[0]?.skin_color}</p>
          <p>Created : {detailsUser[0]?.created}</p>
        </div>
      </div>
    </div>
  );
};

export default UserData;
