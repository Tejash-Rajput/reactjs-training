import { useState } from "react";
import axios from "axios";
/**
 * Custom hook for fetching data from an API.
 * @param {string} url - The API endpoint to fetch data from.
 * @param {string} [method="GET"] - The HTTP method (default is GET).
 * @param {Object|null} [body=null] - The request body for POST/PUT requests.
 * @returns {{ data: any, loading: boolean, error: string|null }} Fetch results.
 */
const useFetch = (url, method = "GET", body = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const options = {
        url,
        method,
        data: body ? JSON.parse(body) : "",
      };
      const response = await axios(options);
      setData(response.data);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetch: fetchData };
};

export default useFetch;
