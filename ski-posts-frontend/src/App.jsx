import React from 'react';
import PostsList from './components/PostsList';
import NewPostForm from './components/NewPostForm';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

const App = () => {
  return (
    <div>
      <h1>Ski Blog</h1>

      <Profile />
      <LoginButton />
      <LogoutButton />

      <NewPostForm />
      <PostsList />
    </div>
  );
};

export default App;
