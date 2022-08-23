import { useState } from 'react'
import './App.css'
import Tween from './Tween'
import Timeline from './Timeline';
import "@arco-design/web-react/dist/css/arco.css";

function App() {
  return (
    <div className="App">
      <Tween />
      <Timeline />
    </div>
  )
}

export default App
