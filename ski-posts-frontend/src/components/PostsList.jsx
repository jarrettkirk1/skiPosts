import React, { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';
import './PostsList.css';

const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className='container'>
      <div className="posts-list">
        <h2>Recent Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div className="post" key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <p>Date: {new Date(post.date).toLocaleDateString()}</p>
              {post.ski_route && (
                <div className="ski-route-details">
                  <h4>Ski Route Details:</h4>
                  <p>Name: {post.ski_route.name}</p>
                  <p>Part of Mountain: {post.ski_route.part_of_mountain}</p>
                  <p>Difficulty: {post.ski_route.difficulty}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default PostsList;
