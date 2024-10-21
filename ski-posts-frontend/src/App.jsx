import React from 'react';
import PostsList from './components/PostsList';
import NewPostForm from './components/NewPostForm';
import pic from './assets/winterpark.jpeg'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Welcome to Winter Park Ski Posts</h1>
      <NewPostForm />
      <PostsList />
    </div>
  );
};

export default App;
