import { useEffect, useState } from "react";
import "./App.css";
import PageNation from "./Components/Pagination/PageNation";
import UserTable from "./Components/UserTable/UserTable";
const axios = require("axios").default;

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(3);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://swapi.dev/api/people/?format=json");
      setUserData(res.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = userData?.results?.slice(
    indexOfFirstData,
    indexOfLastData
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="max-w-screen-lg mx-auto bg-gray-200 p-6 mt-16">
      <h2 className="text-center text-3xl text-orange-600 m-4">
        Welcome Leadzen employer
      </h2>
      <UserTable loading={loading} currentData={currentData} />

      <PageNation
        currentPage={currentPage}
        dataPerPage={dataPerPage}
        totalData={userData?.results?.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
