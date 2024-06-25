import React from 'react';
import './style.css';
import FullScreenGrid from './pages/bigGrid';
import { DisplayProvider } from './components/displayContext';

function App() {
  return (
    <DisplayProvider>
      <main>
        <FullScreenGrid />
      </main>
    </DisplayProvider>
  );
}

export default App;