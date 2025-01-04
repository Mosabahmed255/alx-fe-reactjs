import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUserData(null);

    try {
        const data = await fetchUserData(username);
        setUserData(data);
    } catch (err) {
        setError("Looks like we can't find the user.");
    } finally {
        setLoading(false);
    }
    };

    return (
    <div className="p-6 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-md"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Search
        </button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {userData && (
        <div className="border p-4 rounded-md shadow-md">
            <img
            src={userData.avatar_url}
            alt={userData.login}
            className="w-24 h-24 rounded-full mx-auto"
            />
            <h2 className="text-xl text-center mt-2">{userData.name || "No Name"}</h2>
            <p className="text-center">
            <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                Visit GitHub Profile
            </a>
            </p>
        </div>
        )}
    </div>
    );
};

export default Search;
