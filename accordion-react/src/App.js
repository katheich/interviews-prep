import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [selected, setSelected] = useState(0)
  const items = Array.from(Array(5).keys())

  function toggle(e) {
    const currentSelection = parseInt(e.target.id)

    if (selected === currentSelection) {
      setSelected(0)
    } else {
      setSelected(parseInt(e.target.id))
    }
  }


  return (
    <div className="App">
      {items.map((item, i) => {
        const num = i + 1
        return <div key={i} className={selected === num ? 'accordion selected' : 'accordion'} id={num} onClick={toggle}>
          Item {num}
          <div className="panel">
            More info about item {num}
          </div>
        </div>

      })}

    </div>
  )
}

export default App;
