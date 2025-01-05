import React, { useState } from "react";
import { fetchUsers } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [results, setResults] = useState([]);

  // Function to handle the API call
    const fetchUserData = async () => {
    setLoading(true);
    setError("");
    setResults([]);

    try {
        const data = await fetchUsers(username, location, minRepos);
        if (data.items && data.items.length > 0) {
        setResults(data.items);
        } else {
        setError("Looks like we can't find the user");
        }
    } catch (err) {
        setError("Looks like we can't find the user");
    } finally {
        setLoading(false);
    }
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData();
    };

    return (
    <div className="max-w-xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
            <label className="block text-sm font-medium">Username</label>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter GitHub username"
            />
        </div>
        <div>
            <label className="block text-sm font-medium">Location</label>
            <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter location"
            />
        </div>
        <div>
            <label className="block text-sm font-medium">Minimum Repositories</label>
            <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter minimum repositories"
            />
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
            Search
        </button>
        </form>

        <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {results.length > 0 && (
            <ul className="space-y-4">
            {results.map((user) => (
                <li key={user.id} className="border p-4 rounded">
                <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full mb-2"
                />
                <h2 className="text-lg font-bold">{user.login}</h2>
                <a
                    href={user.html_url}
                    className="text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Profile
                </a>
                </li>
            ))}
            </ul>
        )}
        </div>
    </div>
    );
};

export default Search;
