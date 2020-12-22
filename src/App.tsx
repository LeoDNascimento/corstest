import React from 'react';
import api from './services/api';

async function handleAddRepository(): Promise<void> {
  const response = await api.post('/user/login', {
    username: 'rafael',
    password: 'testing123',
  });
}

const App: React.FC = () => (
  <button onClick={handleAddRepository}>Start</button>
);

export default App;
