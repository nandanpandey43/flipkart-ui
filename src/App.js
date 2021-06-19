import './App.css';
import React, { useState, useEffect } from 'react'
import Topbar from './components/Topbar';
import SidebarMenu from './components/SidebarMenu';
import Contents from './components/Contents';
import { products } from './data';

function App() {

  const [lowOrHigh, setlowOrHigh] = useState(null);
  

  
  


  return (
    <div className="App">

      {/* Topbar */}
      <Topbar />

      {/* left sidebar features */}
      <SidebarMenu lowOrHigh={lowOrHigh} setlowOrHigh={setlowOrHigh} />

      {/* right sidebar features */}
      <Contents />

      
    </div>
  );
}

export default App;
