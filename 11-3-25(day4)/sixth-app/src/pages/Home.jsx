import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
/**
 * Home Component - Fetches and displays a list of posts.
 * @component
 * @returns {JSX.Element} The Home component.
 */
const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  /**
   * Fetch posts from API.
   */
  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <h2>Loading posts</h2>
      ) : (
        <>
          <h2>Posts</h2>
          <div className="posts-grid">
            {posts.map((post) => (
              <div key={post.id} className="card">
                <NavLink to={`/post/${post.id}`}>
                  <h3>{post.title}</h3>
                  <p>{post.body}</p>
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
