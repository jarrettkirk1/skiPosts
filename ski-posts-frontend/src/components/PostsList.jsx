import React, { useEffect, useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Recent Ski Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>Date: {post.date}</p>
            <p>Ski Route ID: {post.ski_route_id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
