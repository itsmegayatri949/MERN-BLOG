import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <h1>All Blog Posts</h1>
      <Link to="/create">Create New Post</Link>
      {posts.map((post) => (
        <div key={post._id} className="post-card">
          <h2>{post.title}</h2>
          <p>{post.content.substring(0, 100)}...</p>
          <Link to={`/view/${post._id}`}>View</Link>
          <Link to={`/edit/${post._id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
