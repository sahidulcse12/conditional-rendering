
import { useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Is familiar : {familiar.toString()}</h2>
      <button onClick={() => setFamiliar(!familiar)}>Toggle</button>
      <User familiar={familiar}></User>

    </div>
  );
}

export default App;
