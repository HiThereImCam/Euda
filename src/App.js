import React from 'react';
import './App.css';
import Modal from './Components/Modal';
/*
  Each modal has internal state? 
  Or should there be an overarching Modal that controls which modal to open
    - i think we pass state down to the components

  Modal
    -

      switch(){
        case calendar:
          return <Calendar />
        case resources:
          return <Resources />
        case connect: 
          return <Connect />

      }

      onClick = () => setState()

      - <Calendar open={}/> 
          - if Calendar State 
            - render Modal



*/

function App() {
  return (
    <div className="App">
      <Modal />
    </div>
  );
}

export default App;
