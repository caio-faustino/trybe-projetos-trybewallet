import React from 'react';
import { Route } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <section>
      <switch>
        <Route path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </switch>
    </section>
  );
}

export default App;
