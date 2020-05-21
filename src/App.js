import React from 'react';
import OutputArea from './components/OutputArea';
import InputArea from './components/InputArea';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1 className="my-3">Country Info App</h1>
        <InputArea />
        <OutputArea />
      </div>
    </div>
  );
}

export default App;
