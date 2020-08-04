import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import Task from './components/Task';

function App() {
  return (
    <div className="App">
      <header className="header">
        {/* header */}
        {/* <img src={logo} className="logo" alt="logo" /> */}
      </header>
      <section>
        {/* section */}
        <Task />
      </section>
      <footer>
        {/* footer */}
      </footer>
    </div>
  );
}

export default App;
