import React from 'react';
import './App.css';
import Modal from './Components/Modal';
import Garden from "./images/garden.svg"

function App() {
  return (
    <div className="App">
      <img src={Garden} alt="garden background" />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
