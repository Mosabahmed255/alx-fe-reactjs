import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState("");

  const handleSearch = async () => {
    setError(""); // Clear previous errors
    setUserData(null); // Clear previous results
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message); // Show network or API error
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p className="text-red-500">{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt={userData.login} />
          <p>{userData.name}</p>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
