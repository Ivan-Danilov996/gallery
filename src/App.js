import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import Modal from './components/Modal/Modal';

function App() {
  return (
    <React.Fragment>
      <Gallery />
      <Modal/>
    </React.Fragment>
  );
}

export default App;
