import { useState } from "react";
import "./App.css";
import UserTable from "./Components/UserTable/UserTable";
const axios = require("axios").default;

function App() {
  const [userData, setUserData] = useState([]);
  axios
    .get("https://leadzen-dev.analystt.ai/api/sme_companies/react_challenge")
    .then((res) => setUserData(res.data));
  console.log(userData);

  return (
    <div className="max-w-screen-lg mx-auto bg-gray-200 p-6 mt-16">
      <h2 className="text-center text-3xl text-orange-600 m-4">
        Welcome Leadzen employer
      </h2>
      <UserTable userData={userData} />

      <div class="btn-group flex justify-center mt-6">
        <button class="btn">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
        <button class="btn">4</button>
      </div>
    </div>
  );
}

export default App;
