import React from 'react';
import PostsList from './components/PostsList';
import NewPostForm from './components/NewPostForm';

const App = () => {
  return (
    <div>
      <h1>Ski Blog</h1>
      <NewPostForm />
      <PostsList />
    </div>
  );
};

export default App;
