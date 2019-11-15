import React from 'react';
import { handleAuthentication } from '../helpers/auth.helpers';

const Callback = () => {
  handleAuthentication();

  return <p>Loading...</p>;
};

export default Callback;
