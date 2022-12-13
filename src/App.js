import ColorChanger from './compontents/ColorChanger'
import {useState} from 'react'

import './style.css'

function App() {
  const [backgroundColor, setBackgroundColor] = useState('')

  return (
    <div className="App" style={{backgroundColor: backgroundColor}}>
      <ColorChanger setBackgroundColor={setBackgroundColor}/>
    </div>
  );
}

export default App;
