import React from 'react';
import CitySearch from "../CitySearch"
import RefineFields from "../RefineFields"
import ResultsList from "../ResultsList"
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Restaurants By City</h1>
        <CitySearch />
        <RefineFields />
      </div>
      <div className="contentBody">
        <ResultsList />
      </div>
    </div>
  );
}

export default App;
