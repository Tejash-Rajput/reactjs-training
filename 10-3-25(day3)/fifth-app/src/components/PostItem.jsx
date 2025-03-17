import React from "react";
/**
 * PostItem Component - Represents a single post.
 * @component
 * @param {Object} props - Component props.
 * @param {Object} props.post - The post object containing `id`, `title`, and `body`.
 * @returns {JSX.Element} The PostItem component.
 */
const PostItem = ({ post }) => {
  return (
    <li className="post-item">
      <h3 className="post-item-title">{post.title}</h3>
      <p className="post-item-body">{post.body}</p>
    </li>
  );
};

export default PostItem;
