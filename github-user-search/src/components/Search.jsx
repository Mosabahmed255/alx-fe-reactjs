import React, { useState } from "react";
import { fetchAdvancedSearchData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);

    const query = [
        username && `user:${username}`,
        location && `location:${location}`,
        minRepos && `repos:>${minRepos}`,
    ]
        .filter(Boolean)
        .join(" ");

    try {
        const data = await fetchAdvancedSearchData(query);
        setResults(data.items);
    } catch (err) {
        setError("Something went wrong. Please try again.");
    } finally {
        setLoading(false);
    }
    };

    return (
    <div className="p-6 max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border rounded-md"
        />
        <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="p-2 border rounded-md"
        />
        <input
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="p-2 border rounded-md"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Search
        </button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <div className="mt-6">
        {results.map((user) => (
            <div key={user.id} className="p-4 border rounded-md mb-4 shadow-md">
            <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
            />
            <h3 className="text-lg font-bold">{user.login}</h3>
            <p>Location: {user.location || "Not available"}</p>
            <p>Repositories: {user.public_repos || "Unknown"}</p>
            <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
            >
                View Profile
            </a>
            </div>
        ))}
        </div>
    </div>
    );
};

export default Search;
