import React from 'react';
import { Router } from '@reach/router';

import { login, isAuthenticated, getProfile } from '../helpers/auth.helpers';

import Queue from '../components/Queue';

const App = () => {
  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>;
  }

  const user = getProfile();

  console.log({ user });

  return (
    <div>
      <Router>
        <Queue path="/queue" />
      </Router>
    </div>
  );
};

export default App;
