import React, { useState } from 'react';
import './App.css';
import Modal from './Components/garden_modals/Modal';
import MoodModal from './Components/sky_modals/moodModal';



function App() {
  const [moodState, setMoodState] = useState(false)
  const [gratefulState, setGratefulState] = useState(flase)

const moveBrowserDown = () => {
    // movebrowserdown
  }
  return (
    <div className="App">
      <section className="sky" >

         {/* need to add gratitude modal  */}
        {/* <img src={CloudsBackground} alt="calendar" className='mood-img'/> */}
        <MoodModal setMoodState={setMoodState}/>
        <Grateful />
        {moodState && gratefulState && moveBrowserDown}
      </section>
      <section className="garden">
        <Modal />
      </section>
    </div>
  );
}

export default App;
