import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      // Network error (e.g., no internet connection)
      throw new Error("Network error. Please check your internet connection.");
    } else {
      // API error (e.g., 404 Not Found)
      throw new Error("User not found. Please check the username and try again.");
    }
  }
};
