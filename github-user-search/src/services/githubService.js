import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchAdvancedSearchData = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching advanced search data.");
  }
};
