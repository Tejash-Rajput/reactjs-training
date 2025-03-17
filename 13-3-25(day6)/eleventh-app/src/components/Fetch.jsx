import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const Fetch = () => {
  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");
  const [body, setBody] = useState("");

  const { data, loading, error, fetch } = useFetch(
    url,
    method,
    body
  );
  console.log(data, loading, error);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch();
  };

  return (
    <div className="fetch-container">
      <form onSubmit={handleSubmit} className="fetch-form">
        <input
          type="text"
          className="fetch-input"
          placeholder="Enter API URL..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <select
          className="fetch-method"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
        <textarea
          className="fetch-body"
          placeholder="Enter request body (JSON format)"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          disabled={method === "GET" || method === "DELETE"}
        ></textarea>
        <button type="submit" className="fetch-btn" disabled={loading}>
          {loading ? "Fetching..." : "Send Request"}
        </button>
      </form>
      <div>
        {error && <p className="fetch-error">{error}</p>}
        {data && (
          <pre className="fetch-response">{JSON.stringify(data, null, 2)}</pre>
        )}
      </div>
    </div>
  );
};

export default Fetch;
