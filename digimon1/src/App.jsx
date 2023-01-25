import Header from './commons/Header/Header';
import DigiEvoList from './views/DigiEvoList/DigiEvoList';
import './App.css';
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState(window.location.pathname);

  return (
    <div className="app-container">
      <div className="header sticky-top">
        <Header setUrl={setUrl} />
      </div>
      <div className="pb-2">
        <DigiEvoList url={url} />
      </div>
    </div>
  );
}

export default App;
