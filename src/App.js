import './App.css';

import Stars from './Stars/Stars';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const arr = [1, 2, 3, 's', 4, 56, 5]
  return (
    <div className="App">
      {arr.map((el) => <Stars count={el} key={uuidv4()} />)}
    </div>
  );
}

export default App;
