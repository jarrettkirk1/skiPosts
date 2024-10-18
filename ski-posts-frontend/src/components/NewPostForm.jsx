import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [skiRouteId, setSkiRouteId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/posts', {
        post: {
          title,
          description,
          date,
          ski_route_id: skiRouteId,
        },
      });
      console.log('Post created:', response.data);
      // Reset the form or redirect after successful submission
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div>
        <label>Ski Route ID:</label>
        <input type="number" value={skiRouteId} onChange={(e) => setSkiRouteId(e.target.value)} required />
      </div>
      <button type="submit">Submit Post</button>
    </form>
  );
};

export default NewPostForm;
