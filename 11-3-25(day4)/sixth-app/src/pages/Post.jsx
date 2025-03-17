import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
/**
 * Post Component - Fetches and displays a single post by ID.
 * @component
 * @returns {JSX.Element} The PostDetails component.
 */
const Post = () => {
  const { id } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <h2 className="post-details">Loading post...</h2>;
  if (!post) return <h2 className="post-details">Post not found</h2>;

  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
