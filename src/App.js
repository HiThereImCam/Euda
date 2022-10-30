import React, { useState } from 'react';
import './App.css';
import Modal from './Components/garden_modals/Modal';
import MoodModal from './Components/sky_modals/moodModal';

function App() {
  const [moodState, setMoodState] = useState(false)
  return (
    <div className="App">
      <section className="sky">
        <MoodModal setMoodState={setMoodState}/>
         {/* need to add gratitude modal  */}
      </section>
      <section className="garden">
        <Modal />
      </section>
    </div>
  );
}

export default App;
