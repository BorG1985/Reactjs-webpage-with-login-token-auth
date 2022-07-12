import React, { useState } from 'react';
import RouterPage from './pages/RouterPage';
import Login from './pages/Login';
import useToken from './components/useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <RouterPage />
  );
}

export default App;


