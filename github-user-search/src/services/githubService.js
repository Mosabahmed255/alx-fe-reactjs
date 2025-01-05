import axios from "axios";

// Base URL for GitHub API
const BASE_URL = "https://api.github.com/search/users?q";

/**
 * Fetch GitHub users based on search criteria.
 * @param {string} username - GitHub username to search for.
 * @param {string} [location] - Location to filter by (optional).
 * @param {number} [minRepos] - Minimum number of repositories (optional).
 * @returns {Promise<Object>} - The search results from the GitHub API.
 */
export const fetchUsers = async (username, location = "", minRepos = 0) => {
  try {
    // Construct the query string
    let query = `${username}`;
    if (location) {
      query += `+location:${location}`;
    }
    if (minRepos > 0) {
      query += `+repos:>${minRepos}`;
    }

    // Make the API request
    const response = await axios.get(`${BASE_URL}${query}`);
    return response.data; // Return the API response data
  } catch (error) {
    console.error("Error fetching users from GitHub API:", error);
    throw error; // Re-throw the error for handling in the calling code
  }
};
