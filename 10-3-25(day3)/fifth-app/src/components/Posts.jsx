import React, { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import PostItem from "./PostItem";
import "../scss/main.scss";

/**
 * Posts Component - Fetches and displays a list of posts with search functionality.
 * @component
 * @returns {JSX.Element} The Posts component.
 */
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchPosts, setSearchPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  /**
   * Fetches posts when the component mounts.
   */
  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      const data = await fetchPosts();
      setPosts(data);
      setSearchPosts(data);
      setLoading(false);
    };
    getPosts();
  }, []);
  /**
   * Filters posts based on the search query with a debounce effect.
   */
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!query.trim()) {
        setSearchPosts(posts);
      } else {
        setSearchPosts(
          posts.filter((post) =>
            post.title.toLowerCase().includes(query.toLowerCase())
          )
        );
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query, posts]);

  return (
    <div className="posts">
      <input
        type="text"
        className="posts-search"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading ? (
        <p className="posts-loading">Loading posts...</p>
      ) : searchPosts.length > 0 ? (
        <ol className="posts-list">
          {searchPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </ol>
      ) : (
        <p className="posts-empty">No posts found</p>
      )}
    </div>
  );
};

export default Posts;
