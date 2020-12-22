import React from 'react';
import api from './services/api';

async function handleAddRepository() {
  const response = await api.post('/user/login', {
    username: 'rafael',
    password: 'testing123',
  });
  console.log(response);
}

const App = () => (
  // eslint-disable-next-line react/button-has-type
  <button onClick={handleAddRepository}>Start</button>
);

export default App;
