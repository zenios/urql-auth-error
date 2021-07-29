import React from 'react';
import {Provider} from 'urql';

import client from './client';

import {getToken, saveAuthData} from './authStore';
import Profile from './pages/Profile';
import LoginForm from './pages/LoginForm';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const onLoginSuccess = auth => {
    saveAuthData(auth);
    setIsLoggedIn(true);
  };

  React.useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    }
  }, []);

  return isLoggedIn ? (
    <Profile/>
  ) : (
    <LoginForm onLoginSuccess={onLoginSuccess}/>
  );
};

function App() {
  return (
    <Provider value={client}>
      <Home/>
    </Provider>
  );
}

export default App;
