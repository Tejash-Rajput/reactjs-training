import axios from "axios";
/**
 * Fetches posts from an API.
 * @async
 * @function fetchPosts
 * @returns {Promise<Array>} An array of post objects.
 */
export const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
