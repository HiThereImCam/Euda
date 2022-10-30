import React, { useState } from 'react';
import './App.css';
import Modal from './Components/garden_modals/Modal';
import MoodModal from './Components/sky_modals/moodModal';
import Grateful from "./Components/sky_modals/Grateful";
function App() {
  const [moodState, setMoodState] = useState(false)
  return (
    <div className="App">
      <section className="sky">
        <MoodModal setMoodState={setMoodState}/>
         {/* need to add gratitude modal  */}
         <Grateful/>
      </section>
      <section className="garden">
        <Modal />
      </section>
    </div>
  );
}

export default App;
